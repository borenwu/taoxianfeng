const {mysql} = require('../qcloud')

async function add (ctx, next) {
	const {platform_name, province,city,description} = ctx.request.body
	if (platform_name) {
		const findRes = await mysql('platforms').select().where('platform_name',platform_name)
		if(findRes.length){
			ctx.state = {
				code:-1,
				data:{
					msg:'平台已存在'
				}
			}
			return
		}
		
		try {
			let id = await mysql('platforms')
				.returning('id')
				.insert({
					platform_name, province, city, description
				})
			ctx.state.data = {
				id:id[0],
				platform_name,
				msg: 'success'
			}
		} catch (e) {
			ctx.state = {
				code: -1,
				data: {
					msg: '新增失败：' + e.sqlMessage
				}
			}
		}
		
	}
}

async function remove (ctx, next) {
	const {platform_id} = ctx.request.body
	if(platform_id){
		try {
			await mysql('platforms')
				.where('id',platform_id)
				.del()
			ctx.state.data = {
				msg: 'success'
			}
		} catch (e) {
			ctx.state = {
				code: -1,
				data: {
					msg: '删除失败：' + e.sqlMessage
				}
			}
		}
	}
}

async function find (ctx, next) {
	const {platform_id} = ctx.request.body
	if(platform_id){
		try{
			const platform = await mysql('platforms')
				.where('id',platform_id)
				.select('*')
			ctx.state.data = {
				platform:platform[0]
			}
		} catch(e){
			ctx.state = {
				code: -1,
				data: {
					msg: '查询失败：' + e.sqlMessage
				}
			}
		}
		
	}
	else{
		try{
			const platforms = await mysql('platforms')
				.select('*')
				.orderBy('id','desc')
			
			ctx.state.data = {
				list:platforms
			}
		} catch(e){
			ctx.state = {
				code: -1,
				data: {
					msg: '查询失败：' + e.sqlMessage
				}
			}
		}
	}
	
}

async function update (ctx, next) {
	const {platform_id,platform_name,province,city,description} = ctx.request.body
	await mysql('platforms')
		.where('id', platform_id)
		.update({
			platform_name: platform_name,
			province: province,
			city:city,
			description:description
		})
}


module.exports = {
	add,
	remove,
	find,
	update
}

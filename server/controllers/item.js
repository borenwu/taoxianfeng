const {mysql} = require ('../qcloud')

async function add (ctx, next) {
	const {name, origin, category, description, platform_id, unit, balance} = ctx.request.body
	if (name) {
		try {
			let id = await mysql ('items')
				.returning ('id')
				.insert ({
					name, origin, category, description, platform_id, unit, balance
				})
			ctx.state.data = {
				id: id[0],
				name,
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
	const {item_id} = ctx.request.body
	if (item_id) {
		try {
			await mysql ('items')
				.where ('id', item_id)
				.del ()
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
	if (platform_id) {
		try {
			const items = await mysql ('items')
				.where ('platform_id', platform_id)
				.select ('*')
				.orderBy ('id', 'desc')
			ctx.state.data = {
				list: items
			}
		} catch (e) {
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
	const {item_id, name, origin, category, description, unit, balance} = ctx.request.body
	await mysql ('items')
		.where ('id', item_id)
		.update ({
			name: name,
			origin: origin,
			category: category,
			description: description,
			unit: unit,
			balance: balance
		})
}


module.exports = {
	add,
	remove,
	find,
	update
}

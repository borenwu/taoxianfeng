DROP TABLE IF EXISTS `orderlogs`;

 CREATE TABLE `orderlogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` DATE,
  `openid` varchar(100) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `amount` FLOAT(5,2) NOT NULL,
  `sale_price` FLOAT(5,2) NOT NULL,
  `total_sale` FLOAT(9,2) NOT NULL,
  `status` varchar(100),
  `platform_id` varchar(100) NOT NULL,
  `community_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `orders`;

 CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(100) NOT NULL,
  `item_id` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `market_price` FLOAT(5,2) ,
  `sale_price` FLOAT(5,2) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `platform_id` varchar(100) NOT NULL,
  `community_id` varchar(100) NOT NULL,
  `open_date` DATE,
  `close_date` DATE,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
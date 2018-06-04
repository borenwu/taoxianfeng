DROP TABLE IF EXISTS `orders`;

 CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `market_price` FLOAT(5,2) ,
  `sale_price` FLOAT(5,2) NOT NULL,
  `platform_id` varchar(100) NOT NULL,
  `community_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
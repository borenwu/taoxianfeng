DROP TABLE IF EXISTS `items`;

 CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `category` varchar(100) ,
  `description` varchar(100) ,
  `platform_id` varchar(100) NOT NULL,
  `block_info` varchar(2048),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
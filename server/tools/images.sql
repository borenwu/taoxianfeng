DROP TABLE IF EXISTS `images`;

 CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` varchar(100) NOT NULL,
  `url` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
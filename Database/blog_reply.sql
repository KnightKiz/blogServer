-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) DEFAULT NULL,
  `replyFrom` varchar(45) DEFAULT NULL,
  `replyTo` varchar(45) DEFAULT NULL,
  `replyTime` date DEFAULT NULL,
  `replyContent` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `comment_id_idx` (`comment_id`),
  CONSTRAINT `comment_id` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES (1,1,'陈东奇','陈陈陈','2017-08-19','谢谢回复'),(2,1,'陈东奇','东东东','2017-08-19','再次谢谢回复'),(3,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(4,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(5,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(6,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(7,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(8,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(9,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(10,1,'老陈','小陈','2017-08-20','老陈是个很好的人儿 很好很好的人儿'),(11,10,'123123','陈3','2017-08-26','玩儿去翁人'),(12,10,'谢谢惠顾','123123','2017-08-26','我真的好幼稚'),(13,10,'幼稚有怎么样','谢谢惠顾','2017-08-26','学习成长最重要'),(14,11,'测试回复','测试','2017-08-26','测试回复1'),(15,14,'回复测试5','测试4','2017-08-26','回复测试555555'),(16,14,'回复测试6','回复测试5','2017-08-26','回复测试6666'),(17,14,'阿斯顿发生','回复测试6','2017-08-26','气温气温'),(18,15,'1231 23 ','请问 ','2017-08-26','123 12 312 3'),(19,15,'33333','1231 23 ','2017-08-26','31434334343434');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-17 16:59:42

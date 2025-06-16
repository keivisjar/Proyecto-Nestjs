-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.4.5-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para base_datos
CREATE DATABASE IF NOT EXISTS `base_datos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `base_datos`;

-- Volcando estructura para tabla base_datos.candidato
CREATE TABLE IF NOT EXISTS `candidato` (
  `id_candidato` int(11) NOT NULL AUTO_INCREMENT,
  `no_tarjeton` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_tipo_candidatura` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_candidato`),
  KEY `FK_e494312e7acc318df4ca706b985` (`id_usuario`),
  KEY `FK_d358f7dad464233f72a2dc6e57c` (`id_tipo_candidatura`),
  CONSTRAINT `FK_d358f7dad464233f72a2dc6e57c` FOREIGN KEY (`id_tipo_candidatura`) REFERENCES `tipo_candidatura` (`id_candidatura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_e494312e7acc318df4ca706b985` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.candidato: ~2 rows (aproximadamente)
INSERT INTO `candidato` (`id_candidato`, `no_tarjeton`, `id_usuario`, `id_tipo_candidatura`) VALUES
	(1, 1, 1, 1),
	(2, 2, 2, 1);

-- Volcando estructura para tabla base_datos.curso
CREATE TABLE IF NOT EXISTS `curso` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `nomeclatura` varchar(100) NOT NULL,
  `id_grado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `FK_6f87a658f2b4012057b3457b15f` (`id_grado`),
  CONSTRAINT `FK_6f87a658f2b4012057b3457b15f` FOREIGN KEY (`id_grado`) REFERENCES `grado` (`id_grado`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.curso: ~3 rows (aproximadamente)
INSERT INTO `curso` (`id_curso`, `nomeclatura`, `id_grado`) VALUES
	(1, '11A', 1),
	(2, '11B', 1),
	(3, '11C', 1);

-- Volcando estructura para tabla base_datos.grado
CREATE TABLE IF NOT EXISTS `grado` (
  `id_grado` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_grado`),
  UNIQUE KEY `IDX_b420406651b4859eec4809a0f7` (`descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.grado: ~5 rows (aproximadamente)
INSERT INTO `grado` (`id_grado`, `descripcion`) VALUES
	(2, 'Grado 10'),
	(1, 'Grado 11'),
	(5, 'Grado 7'),
	(4, 'Grado 8'),
	(3, 'Grado 9');

-- Volcando estructura para tabla base_datos.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.rol: ~1 rows (aproximadamente)
INSERT INTO `rol` (`id_rol`, `descripcion`) VALUES
	(1, 'estudiante');

-- Volcando estructura para tabla base_datos.tipo_candidatura
CREATE TABLE IF NOT EXISTS `tipo_candidatura` (
  `id_candidatura` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_candidatura`),
  UNIQUE KEY `IDX_ec7613221d4db4de02353a60a5` (`descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.tipo_candidatura: ~1 rows (aproximadamente)
INSERT INTO `tipo_candidatura` (`id_candidatura`, `descripcion`) VALUES
	(1, 'Personero');

-- Volcando estructura para tabla base_datos.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `contrasena` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `documento_identidad` varchar(10) NOT NULL,
  `correo_electronico` varchar(50) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `id_curso` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `FK_3628e9894c4b014d61a01cb21dd` (`id_rol`),
  KEY `FK_c16d2d474a5fcacd2fafb4c1a28` (`id_curso`),
  CONSTRAINT `FK_3628e9894c4b014d61a01cb21dd` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_c16d2d474a5fcacd2fafb4c1a28` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.usuario: ~3 rows (aproximadamente)
INSERT INTO `usuario` (`id_usuario`, `contrasena`, `nombre`, `apellido`, `documento_identidad`, `correo_electronico`, `id_rol`, `id_curso`) VALUES
	(1, '1234', 'Aldair', 'Villalobos', '123456789', 'aldair@gmail.com', 1, 1),
	(2, '1234', 'Jhon', 'Carmona', '123453', 'carmona@gmail.com', 1, 2),
	(3, '1234', 'keivis', 'jaramillo', '12344353', 'keivis@gmail.com', 1, 3);

-- Volcando estructura para tabla base_datos.votacion
CREATE TABLE IF NOT EXISTS `votacion` (
  `id_votacion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_hora` datetime NOT NULL DEFAULT current_timestamp(),
  `id_candidato` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_votacion`),
  KEY `FK_768d8a6eded32c2dbda616314fd` (`id_candidato`),
  KEY `FK_964777f15f885bf1af0af4b6a84` (`id_usuario`),
  CONSTRAINT `FK_768d8a6eded32c2dbda616314fd` FOREIGN KEY (`id_candidato`) REFERENCES `candidato` (`id_candidato`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_964777f15f885bf1af0af4b6a84` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla base_datos.votacion: ~3 rows (aproximadamente)
INSERT INTO `votacion` (`id_votacion`, `fecha_hora`, `id_candidato`, `id_usuario`) VALUES
	(1, '2025-06-16 00:43:12', 1, 1),
	(2, '2025-06-16 00:43:16', 1, 2),
	(3, '2025-06-16 00:43:19', 1, 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2024 a las 23:11:59
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo49baseweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `prioridad` int(20) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `nombre`, `prioridad`, `telefono`, `password`) VALUES
(1, 'johann50@gmail.com', 'johann', 1, '3156859', '12345'),
(2, 'paola@hotmail.com', 'paola', 2, '3113345657', '123'),
(3, 'claudia@hotmail.com', 'claudia', 3, '3112233', '4345'),
(4, 'doris@hotmail.com', 'doris', 2, '323456', '546'),
(5, 'ramon@gmail.com', 'ramon', 3, '31123456', '145896'),
(6, 'nikoll@23.com', 'nikoll', 1, '3212345', '12345'),
(7, 'pablo@.com', 'pablo', 2, '43456', '1234'),
(8, 'richard', 'richard mendoza', 2, '32345', '123456'),
(9, 'fanny', 'fanny', 2, '231234', 'fanny3'),
(10, 'richard_cacua@hotmail.com', 'richard cacua', 2, '767898', '123456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-02-2024 a las 09:09:10
-- Versión del servidor: 5.7.33-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yrprey`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico`
--

CREATE TABLE `historico` (
  `id` int(255) NOT NULL,
  `username` text NOT NULL,
  `token` text NOT NULL,
  `valor` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historico`
--

INSERT INTO `historico` (`id`, `username`, `token`, `valor`) VALUES
(2, 'root', '123', '4.0'),
(3, 'root', '123', '4.0'),
(27, 'user', '245', '6.0'),
(28, 'root', '123', '4.0'),
(29, 'user', '245', '4.0'),
(30, 'teste', '123', '6.0'),
(31, 'teste', '123', '4.0'),
(32, 'teste', '123', '6.0'),
(33, '', '123', '6.0'),
(34, '', '123', '6.0'),
(35, '', '123', '4.0'),
(36, '', '123', '6.0'),
(37, '', '123', '4.0'),
(38, '', '123', '4.0'),
(39, '', '123', '6.0'),
(40, '', '123', '8.0'),
(41, '', '123', '4.0'),
(42, '', '123', '4.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produtos`
--

CREATE TABLE `produtos` (
  `id` int(255) NOT NULL,
  `title_image` text NOT NULL,
  `image` text NOT NULL,
  `color` text NOT NULL,
  `name` text NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `produtos`
--

INSERT INTO `produtos` (`id`, `title_image`, `image`, `color`, `name`, `value`) VALUES
(2, 'YRPrey', 'sword-red', 'red', 'Sword', '2.0'),
(3, 'YRPrey', 'map-red', 'red', 'Map', '4.0'),
(4, 'YRPrey', 'book-red', 'red', 'Book', '6.0'),
(5, 'YRPrey', 'potion-red', 'red', 'Potion', '8.0'),
(6, 'YRPrey', 'axe-red', 'red', 'Axe', '10.0'),
(7, 'YRPrey', 'arrow-red', 'red', 'Arrow', '12.0'),
(8, 'YRPrey', 'axe-blue', 'blue', 'Axe', '10.0'),
(9, 'YRPrey', 'map-blue', 'blue', 'Map', '4.0'),
(10, 'YRPrey', 'book-blue', 'blue', 'Book', '6.0'),
(11, 'YRPrey', 'sword-blue', 'blue', 'Sword', '2.0'),
(12, 'YRPrey', 'potion-blue', 'blue', 'Potion', '8.0'),
(13, 'YRPrey', 'shield-blue', 'blue', 'Shield', '12.0'),
(14, 'YRPrey', 'map-cian', 'cian', 'Map', '4.0'),
(15, 'YRPrey', 'book-cian', 'cian', 'Book', '6.0'),
(16, 'YRPrey', 'sword-cian', 'cian', 'Sword', '2.0'),
(17, 'YRPrey', 'axe-cian', 'cian', 'Axe', '8.0'),
(18, 'YRPrey', 'potion-cian', 'cian', 'Potion', '10.0'),
(19, 'YRPrey', 'shield-cian', 'cian', 'Shield', '12.0'),
(20, 'YRPrey', 'map-white', 'white', 'Map', '2.0'),
(21, 'YRPrey', 'book-white', 'white', 'Book', '4.0'),
(22, 'YRPrey', 'sword-white', 'white', 'Sword', '6.0'),
(23, 'YRPrey', 'helmet-white', 'white', 'Helmet', '8.0'),
(24, 'YRPrey', 'potion-white', 'white', 'Potion', '10.0'),
(25, 'YRPrey', 'shield-white', 'white', 'Shield', '12.0'),
(26, 'YRPrey', 'axe-beige', 'beige', 'Axe', '2.0'),
(27, 'YRPrey', 'map-beige', 'beige', 'Map', '4.0'),
(28, 'YRPrey', 'book-beige', 'beige', 'Book', '6.0'),
(29, 'YRPrey', 'sword-beige', 'beige', 'Sword', '8.0'),
(30, 'YRPrey', 'potion-beige', 'beige', 'Potion', '10.0'),
(31, 'YRPrey', 'shield-beige', 'beige', 'Shield', '12.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shop`
--

CREATE TABLE `shop` (
  `id` int(255) NOT NULL,
  `titulo` text NOT NULL,
  `img` text NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `token` text NOT NULL,
  `saldo` text NOT NULL,
  `role` int(255) NOT NULL,
  `criptomoeda` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`, `saldo`, `role`, `criptomoeda`) VALUES
(1, 'root', '1234', '123', '9788', 1, '14.538,73'),
(2, 'admin', 'admin', '245', '10000', 0, '20.200');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historico`
--
ALTER TABLE `historico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `historico`
--
ALTER TABLE `historico`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT de la tabla `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 06:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--
CREATE DATABASE StudentManagement;
USE StudentManagement;

CREATE TABLE `students` (
  `id` varchar(20) NOT NULL PRIMARY KEY,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `faculty` varchar(50) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fullname`, `email`, `faculty`, `dob`, `phone`) VALUES
('S001', 'Peter', 'peter@gmail.com', 'IT', '12/05/2002', '0900130777'),
('S002', 'Alice', 'alice@gmail.com', 'IT', '13/05/2002', '0900130776'),
('S003', 'David', 'david@gmail.com', 'IT', '14/05/2002', '0900130775'),
('S004', 'John', 'john@gmail.com', 'IT', '15/05/2002', '0900130774');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

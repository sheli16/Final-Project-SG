DROP DATABASE IF EXISTS topNotchdb;

CREATE DATABASE IF NOT EXISTS topNotchdb;

USE topNotchdb;

CREATE TABLE IF NOT EXISTS tblUsers(
  userId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE,  
  password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS jobs(
    id int NOT NULL AUTO_INCREMENT,
    userId integer(10) NOT NULL,
    jobName varchar(25) NOT NULL,
    jobAddress varchar(50) NOT NULL,
    jobMaterial varchar(30) NOT NULL,
    jobSink varchar(30) NOT NULL,
    jobEdge varchar(30) NOT NULL,
    jobSqft integer(10) NOT NULL,
   
    PRIMARY KEY (id)
 
);
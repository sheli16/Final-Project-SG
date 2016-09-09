DROP DATABASE IF EXISTS topNotchdb;

CREATE DATABASE IF NOT EXISTS topNotchdb;

USE topNotchdb;

DROP TABLE IF EXISTS tblUsers;

CREATE TABLE IF NOT EXISTS tblUsers(
  userId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE,  
  password VARCHAR(100)
);

CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    userId integer(10) NOT NULL,
    jobNumb integer(10) UNIQUE,
    jobName varchar(25) NOT NULL,
    jobAddress varchar(50) NOT NULL,
    jobMaterial varchar(30) NOT NULL,
    jobSink varchar(30) NOT NULL,
    jobEdge varchar(30) NOT NULL,
    jobSqft integer(10) NOT NULL,
    jobImage varchar(2000) NOT NULL DEFAULT '{}'
   
    -- PRIMARY KEY (id)
 
);
CREATE DATABASE IF NOT EXISTS topNotchdb;

USE topNotchdb;

CREATE TABLE IF NOT EXISTS tblUsers(
  userId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE,  
  password VARCHAR(100)
);

INSERT INTO tblUsers (username, password) VALUES ("user1", 1234);

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


INSERT INTO jobs (userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (1, "Paul Green", "2 Silk Bay Place, Longwood, Fl", "3cm Cambria Berwyn", "50/50 Stainless - inhouse","Standard Roundover", 55);
INSERT INTO jobs (userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (1, "Jane Miller", "2900 CopperRige Ct, Longwood, Fl", "3cm Granite Uba Tuba - ", "50/50 Stainless - inhouse","Standard Roundover", 55);
INSERT INTO jobs (userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (1, "Willy Wonka", "706 commerce way, Longwood, Fl", "3cm Granite Giallo Light", "50/50 Stainless - inhouse","Standard Roundover", 55);

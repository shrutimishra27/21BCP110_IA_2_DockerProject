CREATE DATABASE IF NOT EXISTS ia2_db;
USE ia2_db;

-- Add your SQL commands here to initialize the database
CREATE TABLE IF NOT EXISTS ia2_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data VARCHAR(255) NOT NULL
);
INSERT INTO ia2_table (data) VALUES ('This is 21BCP110!');
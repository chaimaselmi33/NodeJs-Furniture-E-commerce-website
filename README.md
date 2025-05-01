# Furniture e-commerce

## About This Project

This furniture web application is built with **Express.js** framework, using Embedded JavaScript (**EJS**) as a  
templating engine to create dynamic and interactive user interfaces. Data is efficiently managed with **MySQL**  
for storage and retrieval.

## Preview

![Image](https://github.com/user-attachments/assets/e3ab1c33-4070-45fd-972b-eab9cbd0d264)

## How to Run

To run the project locally, follow these steps:

1- Install the app dependencies with : npm install  
2- Run the project with : npm run start

### ⚠️ **Note**: 
This project requires a MySQL database. You need to manually create following tables before running the backend:
```sql
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

CREATE TABLE `furniture` (
  `furn_id` int NOT NULL AUTO_INCREMENT,
  `furn_name` varchar(255) DEFAULT NULL,
  `furn_descrip` varchar(255) DEFAULT NULL,
  `furn_price` double DEFAULT NULL,
  `furn_image` mediumblob,
  PRIMARY KEY (`furn_id`)
) 
```

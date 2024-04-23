# Building Three-Tier Application using Docker

## Introduction to Docker

Docker is a platform for developing, shipping, and running applications in containers, providing a consistent environment across different systems. It allows you to package your software and its dependencies into a standardized unit for easy deployment.


## Dockerizing my Three-Tier Application

I have used Docker for implementing and deploying my three-tier application:

### 1. Frontend Tier

In the frontend tier, Docker streamlines frontend deployment by packaging static assets, JavaScript frameworks like React or Angular, and web servers such as Nginx or Apache. This ensures consistent and reliable deployment of frontend applications.


### 2. Backend Tier

For the backend tier, Docker simplifies backend deployment by encapsulating application logic, including web servers, APIs, and microservices. Developers can package backend code and dependencies into Docker images for easy deployment and scalability.

### 3. Database Tier

In the database tier, Docker containerizes database management systems like PostgreSQL, MySQL, or MongoDB, providing a lightweight and portable solution for running databases. This ensures consistency across different environments.

---

# Part 1 - Dockerfile for Frontend Tier

Lets understand the dockerfile built for HTML Frontend:

### Dockerfile:

```dockerfile
# Use nginx:alpine as the base image
FROM nginx:alpine

# Copy index.html, style.css, and script.js to the nginx html directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to enable external access
EXPOSE 80

# Start nginx with the specified command
CMD ["nginx", "-g", "daemon off;"]
```

---

# Part 2 - Dockerfile for Backend Tier

Lets understand the dockerfile built for Node.js Backend:

### Dockerfile:

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "server.js" ]
```

---

# Part 3 - Dockerfile for Database Tier

Lets understand the dockerfile built for MySQL database:

### Dockerfile:

```dockerfile
# Use MySQL 8.0.31 as the base image
FROM mysql:8.0.31

# Set MySQL root password
ENV MYSQL_ROOT_PASSWORD=pw

# Set the name of the MySQL database
ENV MYSQL_DATABASE=ia2_db

# Set MySQL user
ENV MYSQL_USER=iauser

# Set MySQL user password
ENV MYSQL_PASSWORD=12345

# Copy the init.sql script to be executed during database initialization
COPY init.sql /docker-entrypoint-initdb.d/
```

---

## Images on Docker Hub
 - [Frontend Image](https://hub.docker.com/layers/shruti2704/21bcp110_frontend/latest/images/sha256:76943c67c4add0f0ac73dfb931d43505d323a99d145b4f51faf29125c0609790?uuid=7C80163E-7863-40AE-AC82-A32890CA59F4)
 - [Backend Image](https://hub.docker.com/layers/shruti2704/21bcp110_backend/latest/images/sha256:244b8c211dfa556bdc873e7df08c7624521a46e7429143a0e6c6fcca687d53cc?uuid=7C80163E-7863-40AE-AC82-A32890CA59F4)
 - [Database Image](https://hub.docker.com/layers/shruti2704/21bcp110_database/latest/images/sha256:ebd97e75cd34aa268a6fa606bcfd2ebb4c978abf4352bd74fcb76a08f75a02c3?uuid=7C80163E-7863-40AE-AC82-A32890CA59F4)
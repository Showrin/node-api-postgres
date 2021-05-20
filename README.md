# node-api-postgres

It's a basic **CRUD REST API** app, built on top of NodeJs. Basically, the main theme of this project is helping beginners to learn **how to build REST API** with **CRUD functionalities**, how to **deploy and test** the app.

## Technology

This project is built using the following tech stack:

* **NodeJS**
* **Express**
* **Postgresql**

## Packages Used

* nodejs **^12.0.0**
* dotenv **^9.0.2**
* express **^4.17.1**
* pg **^8.6.0**

## Setup

### Forking

Fork this repo and then clone that repo into your local machine.

### Setup Postgresql Database

Please, goto this [link](https://www.postgresql.org/download/), download and install **Postgresql** into your OS. Then open your terminal and run these commands.

``` 
CREATE ROLE me WITH LOGIN PASSWORD ‘password’;

ALTER ROLE me CREATEDB;

-d postgres -U me

CREATE DATABASE crudapi;
```

### Setup Environment Variables

- Create a file named **`.env`**
- Copy codes from **`.env.example`** file 
- Paste it in **`.env`** file
- By default all the variables are assigned a value. Keep it as it is.
- **But if you create Database and users with different name, password (as not same as [these instructions](###Setup-Postgresql-Database)), you can change these variables as expected**

### Run Dev Server

``` 
npm install

npm start
```

## File Structure and Uses of Each Files

### Package.json

Keep all the information related to the package. For example:
  
- Package name

- Package Description

- Package Version

- Entry Point (file, ex: index.js) of the package

- Scripts

- Dependencies

- Dev Environment Dependencies

### index.js

This file is the **entry point of the app**. That means if any user hit the domain address of your app, the request will be sent to this file and then further process will happen. In this project, this file is executing the following tasks:

- Intialize the app

- Start the server

- Listen all the http requests to different api endpoint (domain path, ex: `/users` or `/users/:id`)

- **Connects the http requests with database** and prepare necessary responses

- Finally, send the responses to the users

### routes.js

This file keeps all the routes available in this app and `index.js` reads routes/path/api-endpoints from this file.

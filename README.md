# node-api-postgres

It's a basic **CRUD REST API** app, built on top of NodeJs. Basically, the main theme of this project is helping beginners to learn **how to build REST API** with **CRUD functionalities**, how to **deploy and test** the app.

<br>

## Technology

This project is built using the following tech stack:

* **NodeJS**
* **Express**
* **Postgresql**

<br>

## Packages Used

* nodejs **^12.0.0**
* dotenv **^9.0.2**
* express **^4.17.1**
* pg **^8.6.0**

<br>

## Setup

### Forking

Fork this repo and then clone that repo into your local machine.

<br>

### Setup Postgresql Database

Please, goto this [link](https://www.postgresql.org/download/), download and install **Postgresql** into your OS. Then open your terminal and run these commands.

``` 
CREATE ROLE me WITH LOGIN PASSWORD ‘password’;

ALTER ROLE me CREATEDB;

-d postgres -U me

CREATE DATABASE crudapi;
```

<br>

### Setup Environment Variables

- Create a file named **`.env`**
- Copy codes from **`.env.example`** file 
- Paste it in **`.env`** file
- By default all the variables are assigned a value. Keep it as it is.
- **But if you create Database and users with different name, password (as not same as [these instructions](###Setup-Postgresql-Database)), you can change these variables as expected**

<br>

### Run Dev Server

``` 
npm install

npm start
```

<br>

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

<br>

### index.js

This file is the **entry point of the app**. That means if any user hit the domain address of your app, the request will be sent to this file and then further process will happen. In this project, this file is executing the following tasks:

- Intialize the app

- Start the server

- Listen all the http requests to different api endpoint (domain path, ex: `/users` or `/users/:id`)

- **Connects the http requests with database** and prepare necessary responses

- Finally, send the responses to the users

<br>

### routes.js

This file keeps all the routes available in this app and `index.js` reads routes/path/api-endpoints from this file.

<br>

### pool.js

This file creates the connection between the database and the app. We have to use this pool to run any kind of query into the database. It does the following tasks:

- Read the environment variables that are necessary

- Create connection pool using these variables

- Enable SSL connection for production

<br>

### scheema.js

This file keeps all the queries that are needed to be run before starting the server. These queries are used for:

- Creating necessary tables

- Creating basic users

These queries are needed to prevent errors while executing requests through api-endpoints

<br>

### queries.js

This file keeps all the queries based on api endpoints. It does following tasks:

- It exposes some processing functions

- These functions receive the request sent by the users

- Based on the different endpoints, different function runs different queries to the database and builds the response object

- Returns these responses

`index.js` uses these functions to process the users' requests

<br>

### .env.exmaple

This file keeps an example of `.env`. We have to create `.env` files with the help of this file.

- Shows which environment variables are needed

- What values these variables are expecting

<br>

### Procfile

This file is used to tell **`Heroku`** what scripts should be run to start the server.

### app.json

This file is also used for **`Heroku`**. It's just giving a short detail of the app to Heroku.

<br>

## How to deploy to `Heroku`

### Setup Postgresql Database

#### Create Database

- GoTo **`Resource Tab`** in the dashboard

- Here, in the **Add on** search field, type **`Heroku Postgres`**

- Then from the suggestion click on the **`Heroku Postgres`**

- From the popup, select **`Hobby Dev - Free`** as plan and click **Provision**

The database will be created.

#### Setup DB credentials as Environment variable

- At first, Goto the settings tab

- Then click on **`Reveal Config Vars`** from the below

- **Search for `DATABASE_URL` this variable. If it's here, you don't need to follow the following steps. Otherwise follow.**

- Goto the resource tab again and select **`Heroku Postgres`**

- Then, select the `Settings` tab

- Select **`View Credentials`** button

- Copy the value of **`URI`** field

- Go back to the dashboard of the app and goto the settings tab

- Then click on **`Reveal Config Vars`** from the below

- Type **`DATABASE_URL`** in the **KEY** input field

- Paste the value of **`URI`** you copied in the **VALUE** input field

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

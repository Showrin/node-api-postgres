# node-api-postgres

It's a basic **CRUD REST API** app, built on top of NodeJs. Basically, the main theme of this project is helping beginners to learn **how to build REST API** with **CRUD functionalities**, how to **deploy and test** the app.

<br>

## Table of Content

<details>
<summary><b>Click to see the Table of Content</b></summary>

- [node-api-postgres](#node-api-postgres)
  - [Table of Content](#table-of-content)
  - [Technology](#technology)
  - [Packages Used](#packages-used)
  - [Setup](#setup)
    - [Forking](#forking)
    - [Setup Postgresql Database](#setup-postgresql-database)
    - [Setup Environment Variables](#setup-environment-variables)
    - [Run Dev Server](#run-dev-server)
  - [How to test the app](#how-to-test-the-app)
    - [Setup curl](#setup-curl)
    - [Commands to test the app](#commands-to-test-the-app)
      - [Testing POST request (Create functionality)](#testing-post-request-create-functionality)
      - [Testing GET request (Read functionality)](#testing-get-request-read-functionality)
      - [Testing PUT request (Update functionality)](#testing-put-request-update-functionality)
      - [Testing DELETE request (Delete functionality)](#testing-delete-request-delete-functionality)
  - [File Structure and Uses of Each Files](#file-structure-and-uses-of-each-files)
    - [package.json](#packagejson)
    - [index.js](#indexjs)
    - [routes.js](#routesjs)
    - [pool.js](#pooljs)
    - [scheema.js](#scheemajs)
    - [queries.js](#queriesjs)
    - [.env.exmaple](#envexmaple)
    - [Procfile](#procfile)
    - [app.json](#appjson)
  - [How to deploy to `Heroku`](#how-to-deploy-to-heroku)
    - [Deploy the App](#deploy-the-app)
    - [Setup Postgresql Database](#setup-postgresql-database-1)
      - [Create Database](#create-database)
      - [Setup DB credentials as Environment variable](#setup-db-credentials-as-environment-variable)
  - [How to Contribute](#how-to-contribute)
</details>

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

<br>

## How to test the app

For testing the CRUD functionalities, you have to install **`curl`** in your OS.

### Setup curl

To check if your OS has curl pre-installed, open the terminal/cmd and run the following command:

```
curl --version
```

If curl is pre-installed, it will show the version of the curl here. Otherwise, it'll say, **`'curl' is not recognized as an internal or external command`**.

If curl is not installed, then please follow the top answers given to [**this question in stackoverflow**](https://stackoverflow.com/questions/9507353/how-do-i-install-and-use-curl-on-windows).

And you can also read this [**article**](https://help.ubidots.com/en/articles/2165289-learn-how-to-install-run-curl-on-windows-macosx-linux).

### Commands to test the app

Open the terminal. Now run the following commands:

#### Testing POST request (Create functionality)

```
curl -X POST -d "name=me&email=me@example.com" http://localhost:5000/users
```

This command will create a user with these infos:

```
name: me
email: me@example.com
```

If this command has been successfully executed, then it will return the id of the new user as the response.

```
User's created with id: 11     // This number can be different for you
```

<br>

#### Testing GET request (Read functionality)

```
curl -X GET http://localhost:5000/users
```

This will read all the users from the database and show them like:

```
[{"id":1,"name":"admin","email":"admin@example.com"},{"id":11,"name":"me","email":"me@example.com"}]
```

If no user exists, it will show a empty array `[]`.

You can also get the info of one specific user. Run this command.

```
curl -X GET http://localhost:5000/users/1
```

If the user with id 1 is available, it will show you the info of that user like:

```
[{"id":1,"name":"admin","email":"admin@example.com"}]
```

#### Testing PUT request (Update functionality)

```
curl -X PUT -d "name=Iam&email=iam@example.com" http://localhost:5000/users/11
```

This command will update info of the user having `id: 11` with these information:

```
name: Iam
email: iam@example.com
```

If this command has been successfully executed, then it will return the id of the new user as the response.

```
Updated user with id 11
```

You can check the result by running GET request and see the info whether it gets changed or not.

#### Testing DELETE request (Delete functionality)

```
curl -X DELETE http://localhost:5000/users/11
```

This command will delete the user having `id: 11` from the database. And return the id of the user as response like:

```
Deleted user with id 11
```

You can check the result by running GET request also.

> **Note: In this command, if you are using a different port number instead of 5000, replace `5000` with your port number in `http://localhost:5000/users`**

## File Structure and Uses of Each Files

### package.json

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
### pool.js

This file creates the connection between the database and the app. We have to use this pool to run any kind of query into the database. It does the following tasks:

- Read the environment variables that are necessary

- Create connection pool using these variables

- Enable SSL connection for production
### scheema.js

This file keeps all the queries that are needed to be run before starting the server. These queries are used for:

- Creating necessary tables

- Creating basic users

These queries are needed to prevent errors while executing requests through api-endpoints
### queries.js

This file keeps all the queries based on api endpoints. It does following tasks:

- It exposes some processing functions

- These functions receive the request sent by the users

- Based on the different endpoints, different function runs different queries to the database and builds the response object

- Returns these responses

`index.js` uses these functions to process the users' requests
### .env.exmaple

This file keeps an example of `.env`. We have to create `.env` files with the help of this file.

- Shows which environment variables are needed

- What values these variables are expecting
### Procfile

This file is used to tell **`Heroku`** what scripts should be run to start the server.
### app.json

This file is also used for **`Heroku`**. It's just giving a short detail of the app to Heroku.

<br>

## How to deploy to `Heroku`

### Deploy the App

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

- ☝️ ☝️ ☝️ Click on the button above

- Then type a name in the app name field

- Then connect to github

- And deploy

- When the deployment will end, click on the **`View App`** button
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

For more details, read this 👉 [**article**](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1).

> **Note: While testing the app in Heroku (after deployment), follow the same instructions given [How to test the app](#how-to-test-the-app) section and replace `http://localhost:5000` this with the domain given by Heroku for your app like `https://<Domain given by Heroku>/users`.** 

<br>

## How to Contribute

If you find any typo or think of any better or simple project structure, then create an **issue** and describe your thought here. I will discuss that with you. And then you can give pull request with your implementations.

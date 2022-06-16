# object

in this Angular and Node.js project,

## for front end
- how to authenticate and authorize users using JWT?
- how to user http interceptor and router?
- how to implement user login, register and user input validation?
- how to enable user to access protected resources only when authenticated?
- how to add dynamic navigation bar to the web app?
- how to use browser session storage to manage token and user info?

## for back end
- how is the flow of authentication and authorization accomplished?
- how JWT is generated, handled, saved, and verified?
- how Node.js Express, CORS, authentication & authorization middlewares, Sequelize, mySQL database are stitched together?
- how to configure Express routes to work with JWT?
- how to define data models and association for authentication & authorization
- how to yse Sequelize to interact with MySQL database?

# Work Book

## for Angular

1. create this project, components, services, classes, models, views
    - [X] understand the how, using angular CLI
    - [X] generate boards, helpers, jwt token storage, login, register, profile, home page
2. import angular modules in app.module.ts
    - [X] understand component declaration, imports, providers in @ngModule
3. work on services classes
    - [X] implement authentication service class sends signup, login HTTP requests to the back-end
    - [X] implement token storage service to manage token, user info inside browser session storage
    - [X] write method signOut(), saveToken(), getToken(), saveUser(), getUser() in token storage service
    - [X] implement data service provides methods to access public and protected resources
    - [X] use interceptors to implement authentication for users and authorization for requests
4. work on components
    - [X] implement register component
    - [] implement login component
    - [] implement profile component
    - [] create public component to get public accessable data from the back end
    - [] create role-based or protected components for dev, consumer, and admin
5. work on HTML view pages
    - [X] add form validation for username, password, email in register view page
6. configure routing
7. work on model or data structure
    - [] implement database schema, data structure in the backend

## for Node.js
1. work on starting the back end server
    - [X] initialize node.js app with package.json file
    - [X] install modules
2. work on configuration
    - [X] create mySQL configuration
    - [] create auth key configuration
3. work on models & database schema
    - [X] create user model for username, password, email
    - [X] create role model for admin, developer, consumer



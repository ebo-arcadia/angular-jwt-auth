# object

in this Angular and Node.js project,

## for front end
- how to authenticate and authorize users using JWT?
- how to user http interceptor and router?
- how to implement user login, register and user input validation?
- how to enable user to access protected resources only when authenticated?
- how to add dynamic navigation bar to the web app?
- how to use browser session storage to manage token and user info?
- how to create forms using template-driven techniques?
- how to create forms using model-driven forms techniques?
- what are the differences between template-driven and model-driven techniques? Pros and cons using each? 

## for back end
- how is the flow of authentication and authorization accomplished?
- how JWT is generated, handled, saved, and verified?
- how Node.js Express, CORS, authentication & authorization middlewares, Sequelize, mySQL database are stitched together?
- how to configure Express routes to work with JWT?
- how to define data models and association for authentication & authorization
- how to yse Sequelize to interact with MySQL database?

# Project plan and implementation tracking

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
    - [X] implement login component
    - [X] implement profile component
    - [X] create public component to get public accessable data from the back end
    - [X] create role-based or protected components for dev, consumer, and admin
5. work on HTML view pages
    - [X] add form validation for username, password, email in register view page
    - [X] add form for username, password, input validation in login view page
    - [X] render content for public obtained to home view page
    - [X] render role based content to each view page, developer, admin, consumer
    - [x] add navigation bar with available routes
6. configure routing
    - [X] configure routes URL 
    - [X] display component content with corresponding routes, incorporate navigation bar using directive 
7. work on model or data structure
    - [X] implement database schema, data structure in the backend
8. run & test results
    - [X] web app server starts successfully
    - [X] user is able to register successfully
    - [X] user profile data is created in the table in the database
    - [X] successful registration message is returned in the Response object by the back end server
    - [X] user is able to log in as an existing user
    - [X] user is able to see profile info on the view page once logged in
    - [X] user is able to see role based content on view page once logged in
    - [X] user receives invalid message if invalid password when log in
    - [X] user receives error message if username,email,password are invalid
    - [X] user is able to log out

## for Node.js
1. work on starting the back end server
    - [X] initialize node.js app with package.json file
    - [X] install modules
    - [X] create an entry file used to start the server
2. work on configurations
    - [X] create mySQL configuration
    - [X] create auth key configuration
3. work on models & database schema
    - [X] create user model for username, password, email
    - [X] create role model for admin, developer, consumer
4. work on features to handle authentication & verification
    - [X] create a secret key string to encode and decode token
    - [X] create middleware to verify signup not duplicated, roles exist
    - [X] implement methods to check if token is provided, legal or not
    - [X] implement method to check if user contains required role or not
    - [X] package all methods for authentication & authorization into one module
5. work on controller
    - [X] implement functions to handle sign up creating new user in database
    - [X] implement functions comparing login credentials against database for login
    - [X] generate & return access token & user info
    - [X] define routes REST POST respond user request for authentication
    - [X] define routes REST GET to respond user request content authorization roles
    - [X] make routes available in the server entry file
6. run & test results
    - [X] if connected to mySQL database
    - [X] if table is generated
    - [X] if table structure is correct
    - [X] if URL links are working using postman

# Refactor & enhancement & new features

## for Angular
    todo: user is able to select roles upon sign up
    todo: render real protected data onto view page when user logged in

### create a create fund page using model-driven forms technique
    1. steps to implement
        [X] import reactive or model driven forms module
        [X] create a route to invoke the component 
        [X] define a new instance of form control class
        [X] define control instance using form control class
        [X] assign instance to a property on the component
        [X] define default values for each property
        [X] pass validation to the form control
        [X] associate inputs in the template to the control properties using directive
    2. add input, button, radio button, drop down list, check box
        [X] create new from control object
        [X] create html tags
        [X] bind user input to control form object using property binding technique
        [X] generate radio button values dynamically
        [X] generate a dynamic drop down list using class, service, and component
    3. implement dynamic drop down list
        [X] generate a class defining data structure
        [X] generate a service class defining get data method
        [X] import and initialize service class object to call get data method
        [X] define a variable and store received data in it
        [X] bind user input using form contorl
        [X] render data received saved in component onto user view page
    4. implemnt in-place editable table with multiple form controls per line
        [X] import form array APIX
        [X] initialize a variable or object as an empty array
        [X] iterate the array using ngFor directive in the view page
        [X] for each item in the array, display it using interpolation binding
        [X] create a button user can add items in the array
        [X] add a method called when user clicks on the add button which then type cast form group into form array type
        [X] programmatically add form groups to form array
        [X] bind each group control to the corresponding form contorl name defined in the form group
        [X] bind the form group name to the index value to the parent in the html tag
        [X] specify the form array name in the parent html tag
        [X] create a button when clicked removes the form control item using item index
    5. implement user input validations in reactive forms
        [X] import validator modules from the library
        [X] add validator method to the attributes to validate in component
        [X] link validation to user input using class binding 
        [X] verify or test if input error highlight appear
        [X] add message to show error messages on the HTML page if errors returned by the validator
        [X] add custom validations in reactive forms & test if error message appear
    6. additional features
        [X] detect changes made in the form elements in reactive forms?
        [X] use set value, patch value, reset value to work with user input
        [X] implement nested form groups to keep form controls organzied
        [X] use form builder API service to refactor code using form group and form control
        [] use async validation to validate duplicate input value in real time against database
    7. knowledge gap catching up
        [X] define data structure for user input
        [X] handle submit implementing http call and using observable API in reactive form
        [] debug cross field custom validator error message not appear

### create a sign up portal using template-driven forms technique
    1. implement validation of "password and confirm password must be the same"
        [X] create two input fields for password and confirm password
        [X] create custom validation service and a method to receive the two inputs
        [X] create validation function with logic to match the two
        [X] conditionally render error messages on the html page if two passwords do not match

## for Node JS
    todo: JWT refresh token implementation
    todo: User can switch roles
    todo: implement other types of database such as noSQL
    todo: store JWT in HttpOnly Cookie
# object

in this Angular project,
- how to authenticate and authorize users using JWT?
- how to user http interceptor and router?
- how to implement user login, register and user input validation?
- how to enable user to access protected resources only when authenticated?
- how to add dynamic navigation bar to the web app?
- how to use browser session storage to manage token and user info?

# Work Book

1. create this project, components, services, classes, models, views
    - [X] understand the how, using angular CLI
    - [X] generate boards, helpers, jwt token storage, login, register, profile, home page
2. import angular modules in app.module.ts
    - [X] understand component declaration, imports, providers in @ngModule
3. work on services classes
    - [X] implement authentication service class sends signup, login HTTP requests to the back-end
    - [X] implement token storage service to manage token, user info inside browser session storage
    - [X] write method signOut(), saveToken(), getToken(), saveUser(), getUser() in token storage service
    - [] implement data service provides methods to access public and protected resources
4. work on model or data structure
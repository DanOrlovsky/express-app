# Expres App
Bare-bones express app.  

To run:
> nodemon start
OR
> npm start

Routes:
localhost:3000  
localhost:3000/blog

An example of middleware is used in server.js.  It logs the request to the console.

The controllers handle routing. Basic controllers have been set up for /get requests.  Their only function is to serve the handlebars view templates.  The blog controller shows an example of passing data to a view, and the blog.handlebars view shows an example of how that data is displayed in handlebars. 

Bootstrap 4 is being loaded in the main.handlebars layout file.  
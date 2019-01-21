const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Function to be called in between requests and responses
function middleware(req, res, next) {
    console.log("Request: ");
    console.log(req);
}

// This is "middleware" - you can insert functions to be ran in between
// requests and responses.  
app.use((request, response, next) => {
    middleware(request, response);
    next();
})


require('./controllers/homeController')(app);
require('./controllers/blogController')(app);



// Where to browse to the application.  
// This sets it to either the environment variable OR (logical) 3000.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
})
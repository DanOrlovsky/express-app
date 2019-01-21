const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/homeController')(app);
require('./controllers/blogController')(app);

// This is "middleware" - you can insert functions to be ran 
app.use((request, response, next) => {
    console.log("Request made");
    next();
})

// Where to browse to the application.  
// This sets it to either the environment variable OR (logical) 3000.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
})
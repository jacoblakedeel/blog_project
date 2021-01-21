const express = require('express');
const app = express();
let db = require('./models');


//public
app.use(express.static('public'));

//view engine

app.set('view engine', 'ejs');


//routes

app.use(require('./routes'));




app.listen(3000, () => {
    
    console.log('Listening on PORT 3000');
})
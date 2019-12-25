var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('hbs', exphbs({
    defaultLayout:'main.hbs'

}));

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render("home");
})


app.get('/about', function(req, res){
    res.render('about');
})


var path = require('path');
app.get('/homepage', function(req, res){
    res.render('homepage', {layout: true});
})


app.use('/admin/categories', require('./routes/category.route'));


const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})

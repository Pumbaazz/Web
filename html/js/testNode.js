const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('Hello express js');
})

const PORT = 3000;
app.listen(PORT, function(){
    app.listen(PORT, function(){
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})
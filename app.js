const express = require('express');
const path = require('path');
const app = express();

// static images
app.use('/images',express.static('images'));
app.use('/',express.static('landing_page'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/landing_page/index.html'))
})

app.listen(3000,()=>{
    console.log("Server Running On Port 3000")
})
const bodyParser = require('body-parser');
const express=require('express')
const port=process.env.port ||5000

const app=express()
require('./models/wish')

// using static files
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))

//parse application json
app.use(bodyParser.json())
 
const path=__dirname+'/index.html';

require('./route')(app,path)

app.set('view engine','ejs')

app.listen(port,()=>{
    console.log('app is listening at port 5000')
})
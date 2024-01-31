const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const cookieParser=require('cookie-parser')
const nodemailer=require('nodemailer')
const bodyparser=require('body-parser')
const Admin=require("./models/Admin.js")
const bodyParser = require('body-parser')
require('dotenv').config()
const app=express()
const port=4000

const bcryptSalt=bcrypt.genSaltSync(10)
const jwtSecret='fase2j34gj4h5gjdnjs';


app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('../pages'))
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5501'
}))


app.get('/', (req,res)=>{
    res.set({
        "Allow-access-Allow-origin":'*'
    })
    return(res.redirect('register.html'))
})

mongoose.connect(process.env.MONGOURL)
var db=mongoose.connection
db.on('error',()=>console.log("error"))
db.once('open',()=>console.log("connected"))




app.get('/test',(req,res)=>{
    res.json('test ok');
});
app.post("/register",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : bcrypt.hashSync(password,bcryptSalt)
    }
    console.log(data)

    db.collection('admin').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})
app.listen(port,()=>{
    console.log(`app running on ${port}`)
})



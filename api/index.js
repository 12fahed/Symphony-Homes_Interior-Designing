const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
require('dotenv').config()
const app=express()
const port=4000

app.use(express().json)
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5501'
}))

app.get('/', (req,res)=>{
    res.send("good")
})
app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    password=bcrypt.hashSync
})
mongoose.connect(process.env.MONGOURL)

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})


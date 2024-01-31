const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=4000

app.get('/', (req,res)=>{
    res.send("good")
})

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})


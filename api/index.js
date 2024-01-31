const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const cookieParser=require('cookie-parser')
const nodemailer=require('nodemailer')
require('dotenv').config()
const app=express()
const port=4000

const bcryptSalt=bcrypt.genSaltSync(10)
const jwtSecret='fase2j34gj4h5gjdnjs';


app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5501'
}))

app.get('/', (req,res)=>{
    res.send("hello")
})

mongoose.connect(process.env.MONGOURL)

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})



app.get('/test',(req,res)=>{
    res.json('test ok');
});
app.post('/register',async (req,res)=>{
    const{name,email,password}=req.body;
    try{const UserDoc=await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
    })
    res.json(UserDoc);}
   catch(e){
    res.status(422).json(e);
   }
})
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const UserDoc=await User.findOne({email})
    if(UserDoc){
        const passOk=bcrypt.compareSync(password,UserDoc.password)
        if(passOk){
            jwt.sign({email:UserDoc.email,id:UserDoc.id},jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(UserDoc)
            })
            
        }
        else{
            res.status(422).json('pass not ok')
        }
    }
    else{
        res.json('not found')
    }
})
app.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    if(token){
        jwt.verify(token,jwtSecret,{},async (err,userData)=>{
            if(err) throw err;
            const {name,email,id}=await User.findById (userData.id) 
            res.json({name,email,id})
        })
    }
    else{
        res.json(null);
    }
    
})
app.post('/logout',(req,res)=>{
    res.cookie('token','').json(true);
})



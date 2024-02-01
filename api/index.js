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
var type;
var id;
var temp;


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

app.post('/type', (req, res) => {
    type = req.body.type;
    
    // Process the selected gender as needed
    console.log(':', type);

    // Your backend logic here

    // Respond to the client
    res.json({ message: 'Data received successfully' });
});

app.post("/register",async (req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var number=req.body.number;
   
        // Check if a user with the email or mobile number already exists
        const existingUser = await db.collection('admin').findOne({
            $or: [{ email: email }, { phno: phno }]
        });

        if (existingUser) {
            return res.status(409).json({ message: 'User with this email or mobile number already exists' });
        }
        

    var randomNumber = parseInt(new Date().getTime());
    if((type=="Member")||(type=="Contractor"))
    {
        randomNumber=number;
    }
    console.log(randomNumber);
    var html=`Hello ${name} welcome to SymphonySpaces 
    your unique code is ${randomNumber}`
    console.log(html)

    async function main(){
        const transporter=nodemailer.createTransport({
           host:'smtp@gmail.com',
           service:'Gmail',
           port:465,
           secure:true,
           auth:{
            user:'symphonyspaces@gmail.com',
            pass:'jccutseulqxsufuw'
           }  
        });
        const info=await transporter.sendMail({
            from:'symphonyspaces@gmail.com',
            to:email,
            subject: "welcome to symphonyspaces",
            html: html,
        })
        console.log("Message sent:"+info.messageId)
    }
    if(type=="Owner"){
    main().catch(e=>console.log(e))
    }

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : bcrypt.hashSync(password,bcryptSalt),
        "id":randomNumber,
        "role": type
    }
    console.log(data)

    db.collection('admin').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('./3d-model-main/landingpage.html')

})

app.post('/login', async (req, res) => {
    var email = req.body.email;
    var code = req.body.code;
    
    var password = req.body.password;
    console.log(type)

    try {
        const userDoc = await db.collection('admin').findOne({ email });

        if (!userDoc) {
            return res.status(404).json({ message: 'User not found' });
        }
        id=userDoc.id;
        const passOk=bcrypt.compareSync(password,userDoc.password)
        if((passOk)&&(code==id)){
            temp=userDoc;
            console.log(temp.role)
            if((temp.role=="Member")||(temp.role=="Owner"))
           {
            return(res.redirect('postlogin.html'))
           }
           else{
            return(res.redirect('admindashboardC.html'))
           }
           
        }
        else{
            res.status(401).json({message:'wrong credentials'})
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
app.get('/search', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    
    try {
      const userId =id
  
      // Find users with the same ID and role 'members'
      const users = await db.collection('admin').find({ id: userId, role: "Member" }).toArray();
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get('/getData', (req, res) => {
    
    console.log(temp)
     res.header('Access-Control-Allow-Origin', '*')
    res.json(temp);
});
app.post('/events', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    
    const receivedArray = req.body.eventsArr;
    const completed=req.body.a;
    console.log('Received Array:', receivedArray);
    var data={
        "id":temp.id,
        "notasks":receivedArray.length,
        "completetasks":completed
        
    }
    console.log(data)

    db.collection('tasks').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    res.json({ message: 'Array received successfully' });
});
app.listen(port,()=>{
    console.log(`app running on ${port}`)
})



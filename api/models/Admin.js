const mongoose=require ('mongoose');
const {Schema}=mongoose
const AdminSchema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    code:{type:String,unique:true},
    mobile: {type: String, unique: true}

})
const adminModel=mongoose.model('User',AdminSchema)

module.exports=adminModel
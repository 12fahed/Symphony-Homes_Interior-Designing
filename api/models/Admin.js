const mongoose=require ('mongoose');
const {Schema}=mongoose

const AdminSchema=mongoose.Schema({
    role: {type: String, required: true, default: "user"},
    name:{type: String, required: true},
    email:{type: String, unique: true, required: true},
    password:{type: String, required: true},
    code:{type: String, unique:true, default: "12345"},
    mobile: {type: String, unique: true, required: true}
})
const adminModel=mongoose.model('Admin', AdminSchema);

module.exports=adminModel;
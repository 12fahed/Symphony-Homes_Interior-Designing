const mongoose=require('mongoose');
const {Schema}=mongoose;

const ContractorSchema=mongoose.Schema({
    role: {type: String, unique: true, required: true},
    name:{type: String, required: true},
    email:{type: String, unique:true, required: true},
    password:{type: String, required: true},
    code:{type: String, unique:true},
    mobile: {type: String, unique: true, required: true}
});
const contractorSchema=mongoose.model('Contractor', ContractorSchema);

module.exports=contractorSchema;
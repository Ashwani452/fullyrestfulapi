const mongoose=require("mongoose");

const AlluserData=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("UserAllData",AlluserData);
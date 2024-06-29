const mongoose= require("mongoose");
const userModule=require("../Modules/modeles");
uri="mongodb+srv://hanzira45:3ycvYhBgizz62cL6@cluster0.0xacrxi.mongodb.net/allUserData?retryWrites=true&w=majority&appName=Cluster0";

const connectDb=()=>{
    return mongoose.connect(uri);
}

const start=async()=>{
    try {
        await connectDb();
        await userModule.create();
        console.log("succes");
    } catch (err) {
        console.log(err);
    }
}

start();

module.exports=connectDb;
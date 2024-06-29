const Data=require("../routes/approutes");
const userModule=require("../Modules/modeles")
const getAlldata=async(req,res)=>{
   const userData =await userModule.find({});
   res.status(200).send(userData);
};

const userlogin=async(req,res)=>{
    const user= await new  userModule(req.body);

    user.save().then(()=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err)
    });
    console.log(user);
}

module.exports={getAlldata,userlogin};
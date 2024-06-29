const express= require("express");
const port=process.env.PORT || 5000;
const routes=require("./routes/approutes")
const connectDb=require("./db/cnn")
const userModel=require("./Modules/modeles")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send(" Now i am live");
});

app.use("/user/data",routes);

const start=async()=>{
   try {
    await connectDb();
    app.listen(port,()=>{
        console.log("Server running");
    });
   } catch (err) {
    console.log(err);
   }
}
app.delete("/user/:id",async(req,res)=>{
    try {
    
       const deletestudent=await userModel.findByIdAndDelete(req.params.id);
       if (!req.params.id) {
         return res.status(404).send();
       } else {
         res.send(deletestudent);
       }

    } catch (error) {
         res.status(500).send();
    }
});

//update Student

app.patch("/user/:id",async(req,res)=>{

    try {
    const _id= req.params.id;
    const updatestudent= await userModel.findByIdAndUpdate(_id, req.body ,{
         new:true
    });
     res.send(updatestudent);
    } catch (error) {
         res.status(500).send(updatestudent);
    }
});
start();
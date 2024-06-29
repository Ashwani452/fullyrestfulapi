const express=require("express");
const routes=express.Router();
const {getAlldata,userlogin}=require("../controller/controller")

routes.route("/").get(getAlldata);
routes.route("/singup").post(userlogin);

module.exports=routes;
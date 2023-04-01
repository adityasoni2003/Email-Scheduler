const express = require("express");
const app = express();
const scheduler = require("node-cron");
const {transporter , options } = require("./services/email");



scheduler.schedule("* * * * * *",()=>{
    console.log("Sending emails")
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err);
        }
        console.log(info);
    })
})


const PORT = 1223;
app.listen(PORT,()=>{
    console.log("App is running ")
})
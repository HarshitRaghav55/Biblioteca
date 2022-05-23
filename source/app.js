const express = require('express');
const path= require("path");
const app=express();

require("./database/connection")
const port= process.env.PORT || 3000;
// console.log(path.join(__dirname,"../public"));
const staic_path=path.join(__dirname,"../public")
app.use(express.static(staic_path))
app.get('/',(req,res)=>{
    res.send("hello login  ")
});
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
}); 
const express = require('express');
const path= require("path");
const app=express();
const hbs = require("hbs")
require("./database/connection")
const port= process.env.PORT || 3000;
// console.log(path.join(__dirname,"../public"));
const staic_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
app.use(express.static(staic_path))
app.set("view engine", "hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)

app.get('/',(req,res)=>{
    res.render("index")
});
// app.get('/login',(req,res)=>{
//     res.render("login")
// })
app.get('/register',(req,res)=>{
    res.render('register')
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
}); 
// const express = require('express');
// const path= require("path");
// const app=express();
// const hbs = require("hbs")
// require("./database/connection")
// const Register = require("./models/registers");
// const async = require('hbs/lib/async');
// const { use } = require('express/lib/application');
// const port= process.env.PORT || 3000;
// // console.log(path.join(__dirname,"../public"));
// const staic_path=path.join(__dirname,"../public")
// const template_path=path.join(__dirname,"../templates/views")
// const partials_path=path.join(__dirname,"../templates/partials")
// app.use(express.json());
// app.use(express.urlencoded({extended:false}))
// app.use(express.static(staic_path))
// app.set("view engine", "hbs")
// app.set("views",template_path)
// hbs.registerPartials(partials_path)

// app.get('/',(req,res)=>{
//     res.render("index")
// });

// app.get('/register',(req,res)=>{
//     res.render('register')
// })
// app.get('/login',(req,res)=>{
//     res.render("login")
// })
// app.post('/register',async (req,res)=>{
//     try{
//         const registerReader = new Register({
//             firstname:req.body.firstname,
//             lastname:req.body.lastname,
//             email:req.body.email,
//             phone:req.body.phone,
//             password:req.body.password
//         })
//         const register = await(registerReader.save());
//         res.status(201).render("home")
//     } catch(error){
//         res.status(400).send(error)
//     }
// })
// app.post('/login',async(req,res)=>{
//     try{
//         const email=req.body.email;
//         const password=req.body.password;
//         const userEmail=await Register.findOne({email:email});
//         if(userEmail.password===password){
//             res.status(201).render("home")
//         }
        

//     }catch(error){
//         res.status.send("invalid email")
//     }
// })
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
// }); 
const express = require('express');
const path= require("path");
const app=express();
const hbs = require("hbs")
require("./database/connection")
const Register = require("./models/registers");
const async = require('hbs/lib/async');
const { use } = require('express/lib/application');
const Demand = require('./models/demands');
const port= process.env.PORT || 3000;
// console.log(path.join(__dirname,"../public"));
const staic_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(staic_path))
app.set("view engine", "hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)

app.get('/',(req,res)=>{
    res.render("index")
});

app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.post('/register',async (req,res)=>{
    try{
        const registerReader = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
        })
        const register = await(registerReader.save());
        res.status(201).render("home")
    } catch(error){
        res.status(400).send(error)
    }
})
app.post('/login',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const userEmail=await Register.findOne({email:email});
        if(userEmail.password===password){
            res.status(201).render("home")
        }


    }catch(error){
        res.status.send("invalid email")
    }
})
app.get('/demand',(req,res)=>{
    res.render("demand")
})
app.post('/demand',async (req,res)=>{
    try{
        const demand = new Demand ({
            bookname:req.body.bookname,
            authorname:req.body.authorname,
            email:req.body.email,
            desciption:req.body.desciption
        })
        const demandsave = await(demand.save());
        res.status(201).render("home")
    } catch(error){
        res.status(201).render("home")
    }
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
}); 
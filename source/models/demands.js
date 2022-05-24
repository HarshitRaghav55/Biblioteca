const mongoose = require("mongoose");
const demandSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,       
    }
    
   
})

const Demand = new mongoose.model("Demand",demandSchema);
module.exports=Demand;
"use strict";
const mongoose=require("mongoose");

const book=new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String,
});

const bookModel=mongoose.model('book',book);

let seedBook=()=>{
    let newbook=new bookModel({
        title:"Mastery",
        description:"Lorem ipsum......",
        status:"god knows",
        email:"123@mail.com",
    })
    let newbook1=new bookModel({
        title:"Absalom, Absalom",
        description:"Lorem ipsum......",
        status:"god knows",
        email:"thewasem7915@mail.com",
    })
    let newbook2=new bookModel({
        title:"A Time to Kill ",
        description:"Lorem ipsum......",
        status:"god knows",
        email:"thewasem7915@mail.com",
    })
    newbook.save();
    newbook1.save();
    newbook2.save();
    }
    
module.exports={seedBook,bookModel} ;
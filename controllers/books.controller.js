"use strict";
const {bookModel}=require("../models/Book");

let booksController= (req,res)=>{
    bookModel.find().then(data=>{
        res.json(data);
    })  
}

module.exports = booksController;
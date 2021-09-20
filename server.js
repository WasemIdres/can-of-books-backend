"use strict";
const axios = require("axios");
const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const mongoose=require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
const {seedBook} =require("./models/Book");
const {booksController,createBookController,deleteBookController} =require("./controllers/books.controller")



mongoose.connect(`${process.env.MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});
app.get('/', (req, res) => {
    res.status(200).json({ "message": "I'm working" })
})

app.get('/seed-data',(req,res)=>{
    seedBook();
        res.json({
            "message":"book Object Created succefully"
        })
    
    })
app.get('/books',booksController);

app.post('/books',createBookController);

app.delete('/books/:id',deleteBookController);

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})

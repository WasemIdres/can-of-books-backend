"use strict";
const { bookModel, book } = require("../models/Book");

let booksController = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
}
const createBookController = async (req, res) => {
    let {title,description,status,email} = req.body;
    let newCreate = new bookModel({
        title:title,
        description:description,
        status:status,
        email:email,
    })
    newCreate.save();
    let bookList = await bookModel.find({})
    res.status(201).json(bookList);
}
const deleteBookController = (req, res) => {
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, async (err, data) => {
        if (err) {
            res.status(500).send("an error occured");
        }
        let bookList = await bookModel.find({})
        res.json(bookList);
    })
}

const updateBookController=async (req,res)=>{
    let studnetID=req.params.id;
    let updatedData=req.body;
    bookModel.findOne({_id:studnetID}).then(book=>{
        book.title=updatedData.title;
        book.description=updatedData.description;
        book.status=updatedData.status;
        book.email=updatedData.email;
        book.save();
    });
    let updatedBooksList=await bookModel.find({});
    res.status(200).send(updatedBooksList);
}

module.exports = {booksController,createBookController,deleteBookController,updateBookController};
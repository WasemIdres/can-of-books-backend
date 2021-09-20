"use strict";
const { bookModel } = require("../models/Book");

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

module.exports = {booksController,createBookController,deleteBookController};
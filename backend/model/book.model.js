import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoty: String,
    image:String,
    title:String
})

const BookModel = mongoose.model('books', bookSchema);

export default BookModel;
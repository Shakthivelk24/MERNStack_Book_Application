import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
    try {
        const books =  await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }       
};

export const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);    
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
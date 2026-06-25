import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
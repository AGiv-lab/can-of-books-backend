import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = 3001;
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/books');

app.get('/', (req, res) => {
  res.send('Backend Server Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/books', async (request, response) => {
  const books = await Book.find({});
  response.json(books);
});
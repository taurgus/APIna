//APIna by Arvi Klemetti, Riku Piipponen

const express = require('express');
const mongoose = require('mongoose');


// .env 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3007;
const MONGODB_URI = process.env.MONGODB_URI;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/////////////////////////////// CONNECT TO MONGODB ///////////////////////////////
async function connectDB() {
  try {
      await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('Error connecting to MongoDB:', error);
  }
}

connectDB();
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//////////////////////////////////////////////////////////////////////////////////
// Require Monkey routes
const monkeyRouter = require('./routes/monkeys');

// Use Monkey routes
app.use('/monkeys', monkeyRouter);
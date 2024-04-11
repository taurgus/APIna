//APIna by Arvi Klemeti, Riku Piipponen

const express = require('express');
const mongoose = require('mongoose');


// ladataan .env muuttujat
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3007;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.static('public'));

/////////////////////////////// CONNECT TO MONGODB ///////////////////////////////
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

////////////////////////////////////////////////////////////////////////////////

// ETSI APINA


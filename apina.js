//APIna by Arvi Klemetti, Riku Piipponen

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// .env 
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

//////////////////////////////////////////////////////////////////////////////////
// MONKEYS

// Find the monkeys
app.get('/api/monkeys', async (req, res) => {
  const monkeys = await Monkey.find({});
  res.json(monkeys);
});

// Add a new route for creating a new monkey
app.post('/api/monkeys', async (req, res) => {
  const { name, size, area } = req.body;

  if (!name || !size || !area) {
    return res.status(400).send({ error: 'Name, size, and area are required.' });
  }

  const monkey = new Monkey({
    name,
    size,
    area
  });

  try {
    const savedMonkey = await monkey.save();
    res.json(savedMonkey);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong.' });
  }
});
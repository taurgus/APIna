const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey'); 


router.post('/', async (req, res) => {
  const { race, size, livingArea } = req.body;

  try {
    const newMonkey = new Monkey({
      race,
      size,
      livingArea
    });

    const savedMonkey = await newMonkey.save();

    res.json(savedMonkey);
  } catch (error) {
    console.error("Apinan teko ei onnistunut:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
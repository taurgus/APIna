const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey');

router.get('/', async (req, res) => {
    try {
        // Extract query parameters
        const { race, size, livingArea } = req.query;
        let query = {};
  
        // Search query 
        if (race) query.race = race;
        if (size) query.size = size;
        if (livingArea) query.livingArea = livingArea;
  
        // MongoDB find
        const monkeys = await Monkey.find(query);
        // Respond with the found monkeys 
        res.status(200).json(monkeys);
    } catch (error) {
        // Handling errors
        console.error("Error fetching monkeys:", error);
        res.status(500).json({ message: "Failed to retrieve monkeys", error: error });
    }
  });
  
  
  module.exports = router;
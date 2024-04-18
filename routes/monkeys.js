const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey');

// Route to add a new monkey
router.post('/', async (req, res) => {
    const { race, size, livingArea } = req.body;
    try {
        const newMonkey = new Monkey({ race, size, livingArea });
        await newMonkey.save();
        res.status(201).json(newMonkey);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

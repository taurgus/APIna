const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey');

router.post('/', async (req, res) => {
    console.log("Received body:", req.body); 

    const { race} = req.body;
    try {
        const newMonkey = new Monkey({ race, size, livingArea });
        await newMonkey.save();
        res.status(201).json(newMonkey);
    } catch (error) {
        console.error("Failed to save monkey:", error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

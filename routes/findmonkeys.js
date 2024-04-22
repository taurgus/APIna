const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey');

// GET route to handle inquiries about monkeys
router.get('/', async (req, res) => {
    try {
        const { race, size, livingArea } = req.query;
        let query = {};

        if (race) query.race = race;
        if (size) query.size = size;
        if (livingArea) query.livingArea = livingArea;

        const monkeys = await Monkey.find(query);
        res.status(200).json(monkeys);
    } catch (error) {
        console.error("Error fetching apinoita:", error);
        res.status(500).json({ message: "Cannot get apinoita", error: error });
    }
});

module.exports = router;
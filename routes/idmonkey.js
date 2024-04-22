const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey'); // Adjust path as necessary

// GET route to fetch a single monkey by its MongoDB _id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const monkey = await Monkey.findById(id);
        if (monkey) {
            res.status(200).json(monkey);
        } else {
            res.status(404).json({ message: 'Monkey not found' });
        }
    } catch (error) {
        console.error("Error fetching the monkey:", error);
        // Handle the case where the ID format is not valid
        if (error.kind === 'ObjectId' && error.name === 'CastError') {
            res.status(400).json({ message: "Invalid ID format" });
        } else {
            res.status(500).json({ message: "Error retrieving the monkey", error: error });
        }
    }
});

module.exports = router;

// EI TOIMI
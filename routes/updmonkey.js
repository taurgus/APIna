const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey'); 

// PUT route to update
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const options = { new: true }; // Returns the updated apina document

        const updatedMonkey = await Monkey.findByIdAndUpdate(id, updateData, options);
        if (updatedMonkey) {
            res.status(200).json({ message: 'Apina successfully updated', monkey: updatedMonkey });
        } else {
            res.status(404).json({ message: 'Apina ja ID ei matchaa' });
        }
    } catch (error) {
        console.error("Virhe apinan korvaamisessa:", error);
        res.status(500).json({ message: "Apina ei halua muuttua", error: error });
    }
});

module.exports = router;
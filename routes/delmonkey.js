const express = require('express');
const router = express.Router();
const Monkey = require('../models/monkey'); 

// DELETE apina id:llä
router.delete('/:id', async (req, res) => {
    try {
        const result = await Monkey.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).json({ message: 'Apina poistettu', id: req.params.id });
        } else {
            res.status(404).json({ message: 'Apina ja ID ei matchaa' });
        }
    } catch (error) {
        console.error("Virhe apinan poistossa:", error);
        res.status(500).json({ message: "Apina ei halua poistua serveriltä", error: error });
    }
});

module.exports = router;

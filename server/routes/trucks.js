const express = require('express');
const router = express.Router();
const Truck = require('../models/Truck');

// get all trucks
router.get('/', async (req, res) => {
    try{
        const trucks = await Truck.find();
        res.json(trucks);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Post new truck
router.post('/',async (req, res) => {
    try{
        const { truckNumber, driverName, currentLocation, status } = req.body;

        const newTruck = await new Truck({
            truckNumber,
            driverName,
            currentLocation,
            status
        });

        await newTruck.save();
        res.status(201).json(newTruck);
    } catch (err) {
        res.status(400).json({ error: err,message });
    }
});

module.exports = router;
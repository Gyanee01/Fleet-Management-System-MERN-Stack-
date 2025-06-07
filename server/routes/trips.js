const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const Truck = require('../models/Truck');

// Get all trips
router.get("/", async (req, res) => {
    console.log("Trips route enterd");
    try{
        const trips = await Trip.find().populate('truck');
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post new trip
router.post('/u', async (req, res) => {
    try {
        const{
            truckId,
            startLocation,
            endLocation,
            loadInfo,
            startTime,
            endTime,
            isActive
        } = req.body;

        const newTrip = new Trip({
            truck: truckId,
            startLocation,
            endLocation,
            loadInfo,
            startTime,
            endTime,
            isActive
        });
        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json({error: err.message });
    }
});

// Get single trip by ID
router.get('/:id', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id).populate('truck');
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.json(trip);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
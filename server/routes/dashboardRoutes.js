const express = require("express");
const router = express.Router();
const Truck = require("../models/Truck");
const Trip = require("../models/Trip");

router.get("/", async (req ,res) => {
    try{
        const totalTrucks = await Truck.countDocuments();
        const activeTrips = await Trip.countDocuments({isActive: true});
        const activeLoads = await Trip.countDocuments({loadAssigned: { $ne: null}});

        res.json({ totalTrucks, activeTrips, activeLoads});
    } catch {
        res.status(500).json({error: "Dashboard data fetch failed"});

    }
})

module.exports = router;
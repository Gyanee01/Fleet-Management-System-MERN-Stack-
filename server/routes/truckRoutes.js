const express = require("express");
const router = express.Router();
const Truck = require("../models/Truck");

router.get("/", async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trucks" });
  }
});

module.exports = router;
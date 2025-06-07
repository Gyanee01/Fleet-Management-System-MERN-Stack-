// server/routes/dashboard.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Dashboard endpoint working!" });
});

module.exports = router;

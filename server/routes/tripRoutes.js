router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().populate("truck");
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

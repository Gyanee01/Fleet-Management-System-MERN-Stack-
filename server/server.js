require('dotenv').config(); // when i am notimporting the dotenv 
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/fleetmg"
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();
// app.use(cors());
// app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const truckRoutes = require('./routes/trucks');
const tripRoutes = require('./routes/trips');

app.use('/api/trucks', truckRoutes);
app.use('/api/trips', tripRoutes);


//MongoDb Connection

// const mongoose = require('mongoose');

const connectDB =mongoose.connect(process, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});


// Routes
app.get('/', (req, res) => {
  console.log("backend runnnig")
  res.send('Fleet Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const dashboardRoutes = require("./routes/dashboard");
// app.use("/api/dashboard", dashboardRoutes);

console.log('MONGO_URI:', process.env.MONGO_URI);

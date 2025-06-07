const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    truckNumber: {
        type: String,
        required: true,
        unique: true
    },
    driverName: String,
    currentLocation: {
        latitude: Number,
        longitude: Number,
    },
    status: {
        type: String,
        enum: ['idle','in-transit','loading','unloading'],
        default: 'idle',

    },
    }, {timestamps: true});

    module.exports = mongoose.model('Truck', truckSchema);
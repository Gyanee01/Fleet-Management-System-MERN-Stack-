const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    truck:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Truck',
        required: true
    },
    startLocation: {
        address: String,
        latitude: Number,
        longitude: Number,
    } ,
    endLocation: {
        address: String,
        latitude: Number,
        longitude: Number,
    },
    loadInfo: String,
    startTime: Date,
    endTime: Date,
    isActive:{
        type: Boolean,
        default: true
    }
    },{timestamps: true});

    module.exports = mongoose.model('Trip', tripSchema);
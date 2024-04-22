const mongoose = require('mongoose');

const dbConnection = process.env.DB_CONNECTION;
mongoose.connect(dbConnection);

const locationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true,
        unique: true,
    },
    parent: {
        type: Number,
        index: true,
    },
    superParent: {
        type: Number,
        required:true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    // It's better to use GeoJSON for location data in MongoDB
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    description: {
        type: [String],
    },
    nestedList: {
        type: [new mongoose.Schema({
            nestedItemId: {
                type: Number,
            },
            nestedItemName: {
                type: String,
            },
        })],
    },
    clickCount:{
        type: Number,        
    },
});

// It's better to use a more descriptive name for the model
const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
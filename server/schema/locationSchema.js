const mongoose = require('mongoose');

const dbConnection = process.env.DB_CONNECTION_LOCATIONS;

const conn = mongoose.createConnection(dbConnection);

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

    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },
    description: {
        type: [String],
    },
    nestedList: {
        type: [{
            nestedItemId: {
                type: Number,
            },
            nestedItemName: {
                type: String,
            },
        }],
    },
    clickCount:{
        type: Number,    
        required: true
    },
    lastClicked: { type: Date, default: new Date('1970-01-01') }
});

const Location = conn.model('Location', locationSchema);
module.exports = Location;
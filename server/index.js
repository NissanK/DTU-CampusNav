const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const adminRoute = require("./routes/adminRoute");
const topResultsRoute = require("./routes/topResultsRoute");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/admin", adminRoute);
app.use("/topResults", topResultsRoute);

const Location = require('./schema/locationSchema');

app.get('/location', async (req, res) => {
    const locationId = req.query.id; 
    console.log(locationId);

    if (!locationId) {
        return res.status(400).json({ error: 'Location ID is required' });
    }

    try {
        const location = await Location.findOne({ id: locationId });

        if (!location) {
            return res.status(404).json({ error: 'Location ID not found' });
        }
            
        // If the last click was more than 5 second ago, counter++

        if (Date.now() - location.lastClicked > 5000) {
            location.clickCount++;
            location.lastClicked = Date.now();
            await location.save();
        }

        res.json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

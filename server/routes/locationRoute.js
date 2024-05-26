const { Router } = require('express');
const router = Router();

const imagesRoute = require('./locationImagesRoute');

const Location = require('../schema/locationSchema');

router.use("/images",imagesRoute)

router.get('/', async (req, res) => {
    const locationId = req.query.id; 

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

router.get('/count', async (req, res) => { 
    try {
        const count = await Location.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
const { Router } = require('express');
const router = Router();
const { getDownloadURL, ref } = require('firebase/storage');
const { uploadImage } = require('../libraries/firebase');
const axios = require('axios');

const Location = require('../schema/locationSchema');


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

        const firebaseStorage = req.firebaseStorage;
        
        const imageRef = ref(firebaseStorage, `files/${locationId}`);

        if (!imageRef) {
            return res.status(500).json({ error: 'Failed to create storage reference' });
        }

        try{
            const url = await getDownloadURL(imageRef);
            res.json({ imageUrl: url });
        }
        catch(error){
            if (error.code === 'storage/object-not-found'){
                try{

                    const imageResponse = `https://maps.googleapis.com/maps/api/staticmap?center=${location.location.latitude},${location.location.longitude}&zoom=18&size=1600x1600&markers=color:red%7Clabel:imdumb%7C${location.location.latitude},${location.location.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
                    const response = await axios.get(imageResponse, { responseType: 'arraybuffer' });
                    const imageData = response.data;
    
                    const newImageUrl = await uploadImage(locationId, imageData);

                    res.json(newImageUrl);
                }
                catch (error) {
                    res.status(500).json({ "error": "Some other error occurred while fetching image."});
                }
            }
            else{
                res.status(500).json({ error: error.message });
            }
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;
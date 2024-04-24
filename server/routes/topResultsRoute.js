const {Router} = require('express');

const router = Router();

const db = process.env.DB_CONNECTION_LOCATIONS;

router.get('/all', async (req,res) => {
    var data = await db.collection('locations').find().sort({clickCount: -1}).limit(10);
    res.json(data);
})

module.exports = router;
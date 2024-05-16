const { Router } = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = Router();

const client = new MongoClient(process.env.DB_CONNECTION_ADMIN);

router.get('/all', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('locations');

        const data = await db.collection('locations')
        .find()
        .sort({clickCount: -1})
        .limit(15)
        .toArray();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching top results' });
    } finally {
        await client.close();
    }
});

// partial search

router.get('/', async (req, res) => {

    const searchString = req.query.search;

    if(searchString === undefined || searchString === ''){
        return res.status(200).json([]);
    }

    try {
        await client.connect();
        const db = client.db('locations');

        const regex = new RegExp(`\\b${searchString}`, 'i');

        const data = await db.collection('locations')
        .find({
            $or: [
                {name : {$regex : regex}},
                {description : {$in : [regex]}}
            ]
        })
        .sort({clickCount: -1})
        .limit(30) // check if do i need to limit the responses here or not
        .toArray();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(200).json([]);
    } finally {
        await client.close();
    }
});

module.exports = router;
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
        .limit(10)
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
        return res.status(400).json({ error: 'Search string is required' });
    }

    try {
        await client.connect();
        const db = client.db('locations');

        const data = await db.collection('locations')
        .find( {name : {$regex : `${searchString}`, $options: 'i'}})
        .sort({clickCount: -1})
        .limit(10) // check if do i need to limit the responses here or not
        .toArray();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching top results' });
    } finally {
        await client.close();
    }
});

module.exports = router;
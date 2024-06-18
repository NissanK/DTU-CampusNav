const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const adminRoute = require("./routes/adminRoute");
const topResultsRoute = require("./routes/topResultsRoute");
const locationRoute = require("./routes/locationRoute");
const { initialiseFirebase } = require('./libraries/firebase');

const app = express();

app.use(cors({ origin: ['https://dtu-campus-nav.vercel.app','http://localhost:3001','http://localhost:3000'] }));
app.use(bodyParser.json());

const {firebaseStorage} = initialiseFirebase();

app.use((req, res, next) => {
    req.firebaseStorage = firebaseStorage;
    next();
});

const PORT = process.env.PORT || 3000;

app.use("/admin", adminRoute);
app.use("/topResults", topResultsRoute);
app.use("/location", locationRoute);

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

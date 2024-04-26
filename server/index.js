const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const adminRoute = require("./routes/adminRoute");
const topResultsRoute = require("./routes/topResultsRoute");
const locationRoute = require("./routes/locationRoute");

const app = express();

app.use(cors({ origin: ['https://dtu-campus-nav.vercel.app','http://localhost:3001'] }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/admin", adminRoute);
app.use("/topResults", topResultsRoute);
app.use("/location", locationRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

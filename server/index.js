const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const adminRoute = require("./routes/adminRoute");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use("/admin", adminRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

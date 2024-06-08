const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const adminRoute = require("./routes/adminRoute");
const topResultsRoute = require("./routes/topResultsRoute");
const locationRoute = require("./routes/locationRoute");
const { initialiseFirebase } = require('./libraries/firebase');
const admin = require('firebase-admin');
const firebaseServiceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS_PATH);


const app = express();

app.use(cors({ origin: ['https://dtu-campus-nav.vercel.app','http://localhost:3001','http://localhost:3000'] }));
app.use(bodyParser.json());

const {firebaseStorage} = initialiseFirebase();

admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
  databaseURL: "https://dtu-campusnavimages.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID
});

app.get('/generate-token', async (req, res) => {
    try {
      const userRecord = await admin.auth().createUser({});
      const uid = userRecord.uid;
  
      const customClaims = {
        apiAccess: true,
      };
  
      const customToken = await admin.auth().createCustomToken(uid, customClaims);
  
      res.json({ token: customToken });
    } catch (error) {
      res.status(500).send('Error generating token: ' + error);
    }
});

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

const {Router} = require('express');
const Admin = require('../schema/adminSchema');
const jwt = require("jsonwebtoken");

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET;

const locationRoute = require("./adminLocationRoute");

router.use("/locations", locationRoute);

router.post('/signin', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.find({
        username,
        password
    })

    if (admin) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

module.exports = router;
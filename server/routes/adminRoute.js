const {Router} = require('express');
const Admin = require('../schema/adminSchema');
const jwt = require("jsonwebtoken");

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signin', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const admin = await Admin.find({
        username,
        password
    })
    if (admin) {
        const token = jwt.sign({
            username
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
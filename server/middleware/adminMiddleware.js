const express = require('express');

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function adminMiddleware(req,res,next){
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
            if(err){
                res.status(401).json({
                    message: "Invalid token"
                })
            }else{
                if(decoded.username){
                    next();
                }else{
                    res.status(401).json({
                        message: "Invalid token"
                    })
                }
            }
        })
    }else{
        res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = adminMiddleware;
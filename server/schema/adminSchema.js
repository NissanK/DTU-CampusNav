const mongoose = require('mongoose');

const dbConnection = process.env.DB_CONNECTION_ADMIN;
const conn = mongoose.createConnection(dbConnection);

const adminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const Admin = conn.model('Form', adminSchema);
module.exports = Admin;
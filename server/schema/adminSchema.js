const mongoose = require('mongoose');

const dbConnection = process.env.DB_CONNECTION;
mongoose.connect(dbConnection);

const adminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const Admin = mongoose.model('Form', adminSchema);
module.exports = Admin;
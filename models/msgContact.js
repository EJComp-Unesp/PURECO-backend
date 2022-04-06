const { text } = require("express");
const mongoose = require("mongoose");

const msgContact = new mongoose.Schema({
    _id: {
        type: String,
        autoIncrement: true,
        allowNull: false,
        primaryKey: false,
        required: true,
    },
    name: {
        type: String.apply,
        allowNull: false
    },
    email: {
        type: String,
        allowNull: false
    },
    subject: {
        type: String,
        allowNull: false
    },
    content: {
        type: text,
        allowNull: false
    }

})

module.exports = msgContact;
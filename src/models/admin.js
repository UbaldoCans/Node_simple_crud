const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    edge:{
        type: Number,
        required: true

    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number, 
    },
    role: {
        type: String,
        required: true
    }
})
module.exports = adminSchema;
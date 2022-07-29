const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true
    },
    email:{
       type: String,
       reqired: true
    }

})
module.exports = mongoose.model('User', userSchema);
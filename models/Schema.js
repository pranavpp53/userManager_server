const { type } = require('express/lib/response')
const mongoose = require('mongoose')




const User = mongoose.model('users', {
    userName: {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:String
})


module.exports = User
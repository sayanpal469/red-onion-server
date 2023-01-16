const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"]
    },
    defaultImage: {
        type: String,
        required: [true, "Please provide image source link"]
    },
    images: [{
        title: String,
        img: String,
        price: Number,
        category: String,
        description: String
    }],
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Foods', foodSchema)
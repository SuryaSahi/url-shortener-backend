// const { timeStamp } = require('console')
// const { type } = require('express/lib/response')
const mongoose = require('mongoose');

//schema for our url
const URLSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    VisitHistory: [
        {
            timeStamp: { type: Number }
        }
    ],
    TotalClick: {
        type: Number,
        default: 0
    }
}, { timestamps: true }); 

const URL = mongoose.model('url', URLSchema);

module.exports = URL;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BrandSchema = new Schema({
    name: String,
    description: String,
    logo: {
        type: {String},
    },
    link: {
        type: String
    },
    supporting: [String],
    conflicting: [String],
    reason: String,
    source: 
});

const Brand = mongoose.model("Brand", BrandSchema);
module.exports = Brand;

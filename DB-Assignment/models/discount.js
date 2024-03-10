// models/discount.js

const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

module.exports = mongoose.model('Discount', discountSchema);

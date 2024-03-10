// models/product_category.js

const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    name: String,
    desc: String,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);

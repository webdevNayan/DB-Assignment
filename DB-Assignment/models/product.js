// models/product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    SKU: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory'
    },
    price: Number,
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

module.exports = mongoose.model('Product', productSchema);

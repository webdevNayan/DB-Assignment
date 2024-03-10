// models/product_inventory.js

const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema({
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

module.exports = mongoose.model('ProductInventory', productInventorySchema);

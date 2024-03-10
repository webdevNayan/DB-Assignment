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

// models/product_inventory.js
const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema({
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

module.exports = mongoose.model('ProductInventory', productInventorySchema);

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

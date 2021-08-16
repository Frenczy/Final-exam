const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    name: String,
    catID: Number,
    description: String,
    price: Number,
    UOM: String,
    active: {
        type: Boolean, 
        default: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);

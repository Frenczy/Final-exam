const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    customerID: Number,
    catID: Number,
    productID: Number,
    amount: Number,
    quantity: Number,
    status: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);

const mongoose = require('mongoose');

const ReceiptSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    orderID: Number,
    amount: Number,
    status: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Receipt', ReceiptSchema);

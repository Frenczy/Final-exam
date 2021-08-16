const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    zip: Number,
    country: String,
    city: String,
    street: String,
    notes: String
});

const CustomerSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    firstName: String,
    lastName: String,
    email: String,
    address: AddressSchema,
    active: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);




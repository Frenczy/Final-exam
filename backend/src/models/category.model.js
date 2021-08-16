const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    name: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);

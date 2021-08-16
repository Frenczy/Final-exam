const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true},
    address: String,
    role: {
        type: Number,
        default: 0
    },
    active: Boolean,
}, {
    timestamps: true
});

/* UserSchema.plugin(require('mongoose-bcrypt')); */
module.exports = mongoose.model('User', UserSchema);


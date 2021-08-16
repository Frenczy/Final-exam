const Product = require('../../models/user.model');

exports.create = userData => {
    const user = new Product(userData);
    return user.save();
};

exports.findAll = () => Product.find();

exports.findOne = id => Product.findById(id);

exports.update = (id, updateData) => Product.findByIdAndUpdate(
    id, updateData, {new: true});

exports.delete = id => Product.findByIdAndRemove(id);

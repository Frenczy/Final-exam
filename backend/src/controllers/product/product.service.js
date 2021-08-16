const Product = require('../../models/product.model');

exports.create = productData => {
    const product = new Product(productData);
    return product.save();
};

exports.findAll = () => Product.find();

exports.findOne = id => Product.findById(id);

exports.update = (id, updateData) => Product.findByIdAndUpdate(
    id, updateData, {new: true});

exports.delete = id => Product.findByIdAndRemove(id);

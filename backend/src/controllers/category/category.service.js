const Category = require('../../models/category.model');

exports.create = categoryData => {
    const category = new Category(categoryData);
    return category.save();
};

exports.findAll = () => Category.find();

exports.findOne = id => Category.findById(id);

exports.update = (id, updateData) => Category.findByIdAndUpdate(
    id, updateData, {new: true});

exports.delete = id => Category.findByIdAndRemove(id);

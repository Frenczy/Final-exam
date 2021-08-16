const Receipt = require('../../models/receipt.model');

exports.create = receiptData => {
    const receipt = new Receipt(receiptData);
    return receipt.save();
};

exports.findAll = () => Receipt.find();

exports.findOne = id => Receipt.findById(id);

exports.update = (id, updateData) => Receipt.findByIdAndUpdate(
    id, updateData, {new: true});

exports.delete = id => Receipt.findByIdAndRemove(id);

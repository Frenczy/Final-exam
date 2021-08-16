const Customer = require('../../models/customer.model');

exports.create = customerData => {
    const customer = new Customer(customerData);
    return customer.save();
};

exports.findAll = () => Customer.find();

exports.findOne = id => Customer.findById(id);

exports.update = (id, updateData) => Customer.findByIdAndUpdate(
    id, updateData, {new: true});

exports.delete = id => Customer.findByIdAndRemove(id);

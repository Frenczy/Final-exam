const express = require('express');
const createError = require('http-errors');

const orderService = require('./order.service');

// Create a new order.
exports.create = (req, res, next) => {
    const { id, customerID, catID, productID, amount, quantity, status } = req.body;
    if (!id || !customerID || !catID || !productID || !amount || !quantity || !status) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newOrder = {
        id:id,
        customerID: customerID,
        catID: catID,
        productID: productID,
        amount: amount,
        quantity: quantity,
        status: status
    };

    return orderService.create(newOrder)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return orderService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return orderService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("Order not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const { id, customerID, catID, productID, amount, quantity, status } = req.body;
    if (!id || !customerID || !catID || !productID || !amount || !quantity || !status) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        id:id,
        customerID: customerID,
        catID: catID,
        productID: productID,
        amount: amount,
        quantity: quantity,
        status: status
    };
    return orderService.update(req.params.id, update)
        .then(order => {
            res.json(order);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return orderService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

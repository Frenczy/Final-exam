const express = require('express');
const createError = require('http-errors');

const receiptService = require('./receipt.service');

// Create a new receipt.
exports.create = (req, res, next) => {
    const { amount, status, orderID, id} = req.body;
    if (!amount || !status || !id || !orderID) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newReceipt = {
        amount: amount,
        status: status,
        orderID: orderID,
        id: id
    };

    return receiptService.create(newReceipt)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return receiptService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return receiptService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("Receipt not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const { amount, status, orderID, id} = req.body;
    if (!amount || !status || !id || !orderID) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

     const update = {
        amount: amount,
        status: status,
        orderID: orderID,
        id: id
    }; 
    return receiptService.update(req.params.id, update)
        .then(receipt => {
            res.json(receipt);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return receiptService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

const express = require('express');
const createError = require('http-errors');

const productService = require('./product.service');

// Create a new product.
exports.create = (req, res, next) => {
    const { id, name, catID, description, price, UOM, active } = req.body;
    if (!id || !name || !catID || !description || !price || !UOM || !active) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newProduct = {
        id:id,
        name: name,
        catID: catID,
        description: description,
        price: price,
        UOM: UOM,
        active: active
    };

    return productService.create(newProduct)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return productService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return productService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("Product not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const {id, name, catID, description, price, UOM, active } = req.body;
    if (!id || !name || !catID || !description || !price || !UOM || !active) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        id: id,
        name: name,
        catID: catID,
        description: description,
        price: price,
        UOM: UOM,
        active: active
    };
    return productService.update(req.params.id, update)
        .then(product => {
            res.json(product);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return productService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

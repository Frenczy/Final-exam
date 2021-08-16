const express = require('express');
const createError = require('http-errors');

const customerService = require('./customer.service');
const customerModel = require('../../models/customer.model')

// Create a new customer.

const checkModel = (model, body, next)=>{
    const validationErrors = new model(body).validateSync()
    if (validationErrors){
        next(
            new createError.BadRequest(
                JSON.stringify({
                    message:`Schema validation error`,
                    error: validationErrors
                })
            )
        )
        return false
    }
    return true
}

exports.create = (req, res, next) => {
/*     if (!checkModel(customerModel, req.body, next)){
        return 
    } */
    const { id, firstName, lastName, email, address, active } = req.body;
    if (!id || !lastName || !firstName || !email || !address || !active) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newCustomer = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        active: active,
        address: address
    };

    return customerService.create(newCustomer)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return customerService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return customerService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("Customer not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const {id, lastName, firstName, email, address, active } = req.body;
    if (!id || !lastName || !firstName || !email || !address || !active) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

     const update = {
        id:id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        active: active,
        address: address
    }; 
    return customerService.update(req.params.id, update)
        .then(customer => {
            res.json(customer);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return customerService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

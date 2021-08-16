const express = require('express');
const createError = require('http-errors');

const userService = require('./user.service');

// Create a new user.
exports.create = (req, res, next) => {
    const { firstName, lastName, email, address, active } = req.body;
    if (!email ) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        active: active
    };

    return userService.create(newUser)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return userService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return userService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("User not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const { firstName, lastName, email, address, active } = req.body;
    if (!email ) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        active: active
    };
    return userService.update(req.params.id, update)
        .then(user => {
            res.json(user);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return userService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

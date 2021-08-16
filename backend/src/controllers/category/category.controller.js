const express = require('express');
const createError = require('http-errors');

const categoryService = require('./category.service');

// Create a new category.
exports.create = (req, res, next) => {
    const { name, description, id} = req.body;
    if (!name || !description || !id) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newCategory = {
        name: name,
        description: description,
        id: id
    };

    return categoryService.create(newCategory)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return categoryService.findAll()
        .then( e => {
            res.json(e);
        });
};

exports.findOne = (req, res, next) => {
    return categoryService.findOne(req.params.id)
        .then( e => {
            if (!e) {
                return next(new createError.NotFound("Category not found"));
            }
            return res.json(e);
        });
};

exports.update = (req, res, next) => {
    // const id = req.params.id;
    const { name, description, id } = req.body;
    if (!name || !description ||!id) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

     const update = {
        name: name,
        description: description,
        id: id
    }; 
    return categoryService.update(req.params.id, update)
        .then(category => {
            res.json(category);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return categoryService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};

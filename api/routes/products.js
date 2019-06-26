const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get req to products route'
    })
})

router.get('/:productid', (req, res, next) => {

    const id = req.params.productid;

    Product.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    // res.status(200).json({
    //     message: 'Handling get req to products route'
    // })
})

router.post('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price
    });

    product.save();

    res.status(200).json({
        message: 'Handling post req to products route',
        createdproduct: product
    });
});

module.exports = router;
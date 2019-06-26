const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');

mongoose.connect('mongodb+srv://nodeapi:nodeapi@cluster0-z9osw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, function (error) {

    console.log(error);
});

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/products', productRoutes);
module.exports = app;
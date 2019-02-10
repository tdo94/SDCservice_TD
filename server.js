const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./app/controllers/productRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.listen(3001);
console.log('Listening on localhost:3001');

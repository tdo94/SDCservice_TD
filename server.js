const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const productRoutes = require('./app/controllers/productRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/products', cors(), productRoutes);

app.listen(3001);
console.log('Listening on localhost:3001');

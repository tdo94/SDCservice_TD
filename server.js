const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const productRoutes = require('./app/controllers/productRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));
app.use('/api/products', cors(), productRoutes);

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});


app.listen(3001);
console.log('Listening on localhost:3001');

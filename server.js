const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('', (req, res) => {
  res.send('hello world');
});

app.listen(3000);
console.log('Listening on localhost:3000');

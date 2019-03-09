const express = require('express');

const Products = require('../models/products');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Products.getFive();
  const data = [];
  const rawData = products.rows;
  for (let i = 0; i < rawData.length; i += 2) {
    rawData[i].primary_image = rawData[i].link;
    rawData[i].secondary_image = rawData[i + 1].link;
    delete rawData[i].link;
    data.push(rawData[i]);
  }
  res.send(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.getOne(id);
  if (product.rows.length === 0) {
    res.status(404).end();
  } else {
    // const data = product.rows[0];
    product.rows[0].primary_image = product.rows[0].link;
    product.rows[0].secondary_image = product.rows[1].link;
    // delete data.link;
    res.status(200).send(product.rows[0]);
  }
});


router.post('/', async (req, res) => {
  const rawData = req.body;
  const id = await Products.addOne(rawData);
  if (id === 0) {
    res.status(400).send('Field(s) is missing');
  } else {
    const data = { id };
    res.send(JSON.stringify(data));
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const rawData = req.body;
  const product = await Products.updateOne(id, rawData);
  if (!product) {
    res.status(204).end();
  } else {
    product.rows[0].primary_image = product.rows[0].link;
    product.rows[0].secondary_image = product.rows[1].link;
    delete product.rows[0].link;
    res.send(product.rows[0]);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await Products.deleteOne(id);
  if (data === 0) {
    res.status(204).end();
  }
  res.send(JSON.stringify({ 'row Deleted': data }));
});
module.exports = router;

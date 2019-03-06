const express = require('express');

const Products = require('../models/products');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Products.getAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.getOne(id);
  const data = product.rows[0];
  data.primary_image = data.link;
  data.secondary_image = product.rows[1].link;
  delete data.link;
  res.send(data);
});

module.exports = router;

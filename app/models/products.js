const { Client } = require('pg');

const { database } = require('../../config');

const client = new Client(database);
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to db', err.stack);
  } else {
    console.log('connected to DB');
  }
});

const getAll = async () => {
  const res = await client.query('SELECT * FROM products');
  return res;
};

const getOne = async (id) => {
  const res = await client.query(`
  SELECT products.*, images.link FROM products, images WHERE products.id = ${id} AND images.product_id = products.id; 
  `);
  return res;
};

module.exports = {
  getAll,
  getOne,
};

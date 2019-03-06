const { Client } = require('pg');

const { database } = require('../../config');

const getAll = async () => {
  const client = new Client(database);
  await client.connect((err) => {
    if (err) {
      console.error('Failed to connect to db', err.stack);
    } else {
      console.log('connected to DB');
    }
  });
  const res = await client.query('SELECT * FROM products');
  client.end();
  return res;
};

const getOne = async (id) => {
  const client = new Client(database);
  await client.connect((err) => {
    if (err) {
      console.error('Failed to connect to db', err.stack);
    } else {
      console.log('connected to DB');
    }
  });
  const res = await client.query(`
  SELECT products.*, images.link FROM products, images WHERE products.id = ${id} AND images.product_id = products.id; 
  `);
  client.end();
  return res;
};

module.exports = {
  getAll,
  getOne,
};

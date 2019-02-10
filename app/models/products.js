const { Client } = require('pg');

const { database } = require('../../config');

const client = new Client(database);

const getAll = async () => {
  await client.connect();
  return client.query('SELECT * FROM products');
};

module.exports = {
  getAll,
};

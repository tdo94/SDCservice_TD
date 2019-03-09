const { Pool } = require('pg');

const { database } = require('../../config');

const client = new Pool(database);
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to db', err.stack);
  } else {
    console.log('connected to DB');
  }
});

const getFive = async () => {
  const res = await client.query('SELECT products.*, images.link FROM products, images WHERE images.product_id = products.id ORDER BY products.review_count LIMIT 10;');
  return res;
};

const getOne = async (id) => {
  const res = await client.query(`
  SELECT * FROM products, images WHERE products.id = ${id} AND images.product_id = ${id}; 
  `);
  return res;
};

const addOne = async (rawData) => {
  const {
    name, category, manufacturer, price, is_prime, description, primary_image, secondary_image,
  } = rawData;
  if (name === undefined || category === undefined || manufacturer === undefined
    || price === undefined || is_prime === undefined || description === undefined
    || primary_image === undefined || secondary_image === undefined) {
    return 0;
  }
  let res = await client.query(`
  INSERT INTO products (name, category, manufacturer, price, is_prime, description)
  VALUES ('${name}', '${category}', '${manufacturer}', ${price}, ${is_prime}, '${description}') RETURNING id; 
  `);
  res = res.rows[0].id;
  await client.query(`
  INSERT INTO images (link, product_id) VALUES ('${primary_image}', '${res}'); 
  `);
  await client.query(`
  INSERT INTO images (link, product_id) VALUES ('${secondary_image}', '${res}'); 
  `);
  return res;
};

const updateOne = async (id, rawData) => {
  const {
    name,
    category,
    manufacturer,
    price,
    is_prime,
    description,
    primary_image,
    secondary_image,
  } = rawData;
  await client.query(`
  UPDATE products SET name = '${name}', category = '${category}', manufacturer = '${manufacturer}',
  price = ${price}, is_prime = ${is_prime}, description = '${description}'
  WHERE id = ${id}; 
  `);

  const result = await client.query(`
  SELECT id FROM images WHERE product_id = ${id}
  `);

  // If no such product id
  if (result.rows.length === 0) return 0;

  const image1 = result.rows[1].id;
  const image2 = result.rows[0].id;
  await client.query(`
  UPDATE images SET link = '${primary_image}' WHERE product_id = ${image1}; 
  `);
  await client.query(`
  UPDATE images SET link = '${secondary_image}' WHERE product_id = ${image2}; 
  `);
  const res = await client.query(`
  SELECT products.*, images.link FROM products, images WHERE products.id = ${id} AND images.product_id = products.id; 
  `);
  return res;
};

const deleteOne = async (id) => {
  const res1 = await client.query(`
  DELETE FROM images WHERE product_id = ${id}; 
  `);
  const res2 = await client.query(`
  DELETE FROM products WHERE id = ${id}; 
  `);
  return res1.rowCount + res2.rowCount;
};

module.exports = {
  getFive,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};

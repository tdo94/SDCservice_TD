module.exports = {
  createTableQueries: `
    DROP TABLE IF EXISTS products, images, reviews;

    CREATE TABLE products(
      "id" SERIAL PRIMARY KEY,
      "name" varchar(100),
      "category" varchar,
      "manufacturer" varchar,
      "question_count" int,
      "price" int,
      "is_prime" boolean,
      "description" varchar(1000),
      "review_one_star_count" int,
      "review_two_star_count" int,
      "review_three_star_count" int,
      "review_four_star_count" int,
      "review_five_star_count" int,
      "review_count" int
    );
    
    CREATE TABLE images(
      "id" SERIAL PRIMARY KEY,
      "link" varchar(100),
      "product_id" int REFERENCES products(id)
    );
  `,
};

/* eslint-disable */
//SELECT * FROM products, reviews WHERE products.unique_id = '1' AND reviews.product_id = '1';

// COPY products(name, category, manufacturer, question_count, price,
// is_prime, description, review_one_star_count, review_two_star_count,
// review_three_star_count, review_four_star_count, review_five_star_count, review_count) FROM 
// '/Users/trangdo/Study/Hack reactor/SDC/SDCservice_TD/csvFiles/products.csv'
// DELIMITER '|';

// COPY images(link, product_id) FROM 
// '/Users/trangdo/Study/Hack reactor/SDC/SDCservice_TD/csvFiles/images.csv'
// DELIMITER '|';
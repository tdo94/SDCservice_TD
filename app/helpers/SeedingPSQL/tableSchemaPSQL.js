module.exports = {
  createTableQueries: `
    DROP TABLE IF EXISTS products, images, reviews;

    CREATE TABLE products(
      "id" SERIAL PRIMARY KEY,
      "unique_id" int,
      "name" varchar(100),
      "category" varchar,
      "manufacturer" varchar,
      "question_count" int,
      "price" int,
      "is_prime" boolean,
      "description" varchar(1000)
    );
    
    CREATE TABLE images(
      "id" SERIAL PRIMARY KEY,
      "link" varchar(100),
      "product_id" int REFERENCES products(id)
    );

    CREATE TABLE reviews(
      "id" SERIAL PRIMARY KEY,
      "review_one_star_count" int,
      "review_two_star_count" int,
      "review_three_star_count" int,
      "review_four_star_count" int,
      "review_five_star_count" int,
      "review_count" int,
      "product_id" int REFERENCES products(id)
    );
  `,
};

/* eslint-disable */
//SELECT * FROM products, reviews WHERE products.unique_id = '1' AND reviews.product_id = '1';

//COPY reviews(review_one_star_count, review_two_star_count, review_three_star_count, review_four_star_count, review_five_star_count, review_count, product_id) FROM 
// '/Users/trangdo/Study/Hack reactor/SDC/SDCservice_TD/csvFiles/reviews.csv'
// DELIMITER '|';
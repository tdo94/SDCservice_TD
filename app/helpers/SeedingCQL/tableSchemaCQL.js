module.exports = {
  createTableQueries: `
    CREATE TABLE "products" (
      "id" int,
      "name" text,
      "category" text,
      "manufacturer" text,
      "images" list<text>,
      "review_one_star_count" int,
      "review_two_star_count" int,
      "review_three_star_count" int,
      "review_four_star_count" int,
      "review_five_star_count" int,
      "review_count" int,
      "question_count" int,
      "price" int,
      "is_prime" boolean,
      "description" text,
      PRIMARY KEY(id)
    );
  `,
};

/* eslint-disable */
// COPY products(id, name, category, manufacturer, images, review_one_star_count, review_two_star_count, review_three_star_count, review_four_star_count, review_five_star_count, review_count, question_count, price, is_prime, description) FROM '/Users/trangdo/Study/Hack reactor/SDC/SDCservice_TD/csvFiles/allCQL.csv' WITH DELIMITER = '|';

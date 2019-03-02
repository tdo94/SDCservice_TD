const faker = require('faker');

module.exports = {
  generateName: number => `Amazon Product ${number}`,
  generateCategory: (number) => {
    const categoryArr = [
      'electronics',
      'beauty',
      'outdoor',
      'wearables',
      'bath',
      'clothing',
      'board games',
      'food',
      'toys',
      'jewelery',
    ];
    return categoryArr[number % 10];
  },
  generateManufacturer: () => faker.company.companyName(),
  generateImage: () => faker.image.image(),
  // generateImage: (category, number) => `https://s3.us-east-2.amazonaws.com/product-summary-component/${category}${number}.jpg`,
  generateRandomCount: () => faker.random.number({
    min: 20,
    max: 1000,
  }),
  generateRandomBoolean: () => faker.random.boolean(),
  generateDescription: id => `Product ${id}'s description`,
};

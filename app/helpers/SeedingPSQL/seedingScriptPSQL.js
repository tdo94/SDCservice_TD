const {
  generateName,
  generateCategory,
  generateManufacturer,
  generateRandomCount,
  generateRandomBoolean,
  generateDescription,
} = require('../seedingHelperFunctions');

const generateProductData = () => {
  for (let i = 1; i <= 10000000; i += 1) {
    const values = [
      i,
      generateName(i),
      generateCategory(i),
      generateManufacturer(),
      generateRandomCount(),
      generateRandomCount(),
      generateRandomBoolean(),
      generateDescription(),
    ];
    console.log(values.join('|'));
  }
};

generateProductData();

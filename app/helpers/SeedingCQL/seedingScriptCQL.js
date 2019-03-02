const fs = require('fs');

const {
  generateName,
  generateCategory,
  generateManufacturer,
  generateRandomCount,
  generateRandomBoolean,
  generateDescription,
  generateImage,
} = require('../seedingHelperFunctions');


function generateData(writer, callback) {
  let i = 1;
  function write() {
    let ok = true;
    do {
      const reviews = [];
      for (let b = 0; b < 5; b++) {
        reviews.push(generateRandomCount());
      }
      reviews.push(reviews.reduce((total, value) => total + value));

      const images = [generateImage(), generateImage()];

      const values = `${i}|${generateName(i)}|${generateCategory(i)}|${generateManufacturer()}|[${images}]|${reviews.join('|')}|${generateRandomCount()}|${generateRandomCount()}|${generateRandomBoolean()}|${generateDescription(i)}\n`;
      i++;
      if (i === 10000000) {
        writer.write(values, () => callback('All data have been written'));
      } else {
        ok = writer.write(values);
      }
    } while (i <= 10000000 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}


const writer = fs.createWriteStream('csvFiles/allCQL.csv');

generateData(writer, console.log);

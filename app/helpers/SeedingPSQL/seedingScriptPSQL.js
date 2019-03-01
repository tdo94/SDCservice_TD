const fs = require('fs');

const {
  generateName,
  generateCategory,
  generateManufacturer,
  generateRandomCount,
  generateRandomBoolean,
  generateDescription,
} = require('../seedingHelperFunctions');

// const generateProductData = () => {
//   for (let i = 1; i <= 10000000; i += 1) {
//     const values = [
//       i,
//       generateName(i),
//       generateCategory(i),
//       generateManufacturer(),
//       generateRandomCount(),
//       generateRandomCount(),
//       generateRandomBoolean(),
//       generateDescription(),
//     ];
//     console.log(values.join('|'));
//   }
// };

// generateProductData();

function generateProductData(writer, callback) {
  let i = 1;
  write();
  function write() {
    let ok = true;
    do {
      const values = `${i}|${generateName(i)}|${generateCategory(i)}|${generateManufacturer()}|${generateRandomCount()}|${generateRandomCount()}|${generateRandomBoolean()}|${generateDescription(i)}\n`;
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
}

const writer = fs.createWriteStream('./product.csv');

generateProductData(writer, console.log);

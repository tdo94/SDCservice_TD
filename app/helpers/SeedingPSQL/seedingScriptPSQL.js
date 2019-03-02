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

// TO GENERATE PRODUCT DATA, UNCOMMENT BELOW TILL ******, COMMENT EVERY OTHER FUNCTIONS OUT

// function generateProductData(writer, callback) {
//   let i = 1;
//   function write() {
//     let ok = true;
//     do {
//       const values = `${i}|${generateName(i)}|${generateCategory(i)}|${generateManufacturer()}|${generateRandomCount()}|${generateRandomCount()}|${generateRandomBoolean()}|${generateDescription(i)}\n`;
//       i++;
//       if (i === 10000000) {
//         writer.write(values, () => callback('All data have been written'));
//       } else {
//         ok = writer.write(values);
//       }
//     } while (i <= 10000000 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// const writer = fs.createWriteStream('csvFiles/products.csv');

// *****************************************


// TO GENERATE PRODUCT DATA, UNCOMMENT BELOW TILL ******, COMMENT EVERY OTHER FUNCTIONS OUT

// function generateReviewData(writer, callback) {
//   let i = 1;
//   function write() {
//     let ok = true;
//     do {
//       const reviews = [];
//       for (let b = 0; b < 5; b++) {
//         reviews.push(generateRandomCount());
//       }
//       reviews.push(reviews.reduce((total, value) => total + value));

//       const values = `${reviews.join('|')}|${i}\n`;
//       i++;
//       if (i === 10000000) {
//         writer.write(values, () => callback('All data have been written'));
//       } else {
//         ok = writer.write(values);
//       }
//     } while (i <= 10000000 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// const writer = fs.createWriteStream('csvFiles/reviews.csv');

// generateReviewData(writer, console.log);

// *****************************************


// TO GENERATE IMAGE DATA, UNCOMMENT BELOW TILL ******, COMMENT EVERY OTHER FUNCTIONS OUT

function generateImageData(writer, callback) {
  let i = 1;
  function write() {
    let ok = true;
    do {
      const values = `${generateImage()}|${i}\n${generateImage()}|${i}\n`;
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

const writer = fs.createWriteStream('csvFiles/images.csv');

generateImageData(writer, console.log);

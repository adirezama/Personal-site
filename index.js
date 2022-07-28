function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (value of arrayOfNumbers) {
    if (value < currentMin) {
      currentMin = value;
    } else if (value > currentMax) {
      currentMax = value;
    }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

const greatAuthors = books
  .filter((book) => book.sales > 1000000)
  .map((book) => {
    return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
  });

console.log(greatAuthors);

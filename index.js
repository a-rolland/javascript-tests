num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function onlyEven(elem) {
  return elem % 2 === 0;
}

numEven = num.filter(onlyEven);
console.log(numEven);


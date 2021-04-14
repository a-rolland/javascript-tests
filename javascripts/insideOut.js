function insideOut(x) {
  const processArray = (array, a, b) =>
    array.split("").splice(a, b).reverse().join("");
  return x
    .split(" ")
    .map((word) => {
      return word.length <= 3
        ? word
        : word.length % 2 === 0
        ? [
            processArray(word, 0, word.length / 2),
            processArray(word, word.length - word.length / 2, word.length),
          ].join("")
        : word.length % 2 !== 0
        ? [
            processArray(word, 0, word.length / 2),
            word[Math.floor(word.length / 2)],
            processArray(word, word.length - word.length / 2 + 1, word.length),
          ].join("")
        : 0;
    })
    .join(" ");
}

const word = "what time are we climbing up the volcano";

console.log(insideOut(word));

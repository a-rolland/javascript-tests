const sumR = ([head, ...tail]) => {
  return !head ? 0 : head + sumR(tail)
} 

const a = sumR([10,10,10,15,15])

console.log(a)

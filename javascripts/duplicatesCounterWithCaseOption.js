const duplicateCountWithCase = (text, caseSensitive = true) => Object.values(text.split("").reduce((acc, curr) => {
  const lc = caseSensitive ? curr.toLowerCase() : curr
  return Object.keys(acc).indexOf(lc) !== -1 ? {...acc, [lc]: acc[lc]+1 } : {...acc, [lc]: 0}
}, {})).filter(value => value > 0).length


const a = "aaabaaaAA"

console.log(duplicateCountWithCase(a, true))

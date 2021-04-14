const duplicateCount = text => Object.values(text.split("").reduce((acc, curr) => {
  const lc = curr.toLowerCase()
  return Object.keys(acc).indexOf(lc) !== -1 ? {...acc, [lc]: acc[lc]+1 } : {...acc, [lc]: 0}
}, {})).filter(value => value > 0).length


const a = "aabbcdeaaaAdDAaadA"

console.log(duplicateCount(a))
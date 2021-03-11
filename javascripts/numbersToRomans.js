const solution = number =>{
  let rest = number
  const values = [["M", 1000],["CM", 900],["D", 500],["CD", 400],["C", 100],["XC", 90],["L", 50],["XL", 40],["X", 10],["IX", 9],["V", 5],["IV", 4],["I", 1]]
  return values.map(value => {
    let occurences = Math.floor(rest/value[1])
    rest = value[0] === "CM" || value[0] === "XC" || value[0] === "IX" ?
      occurences === 1 ? rest -= value[1]
      : rest = rest
    : rest = rest%value[1]
    return value[0].repeat(occurences)
  }).join("")
}

solution(2451)

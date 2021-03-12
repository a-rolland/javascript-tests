const calc = x => {
  const a = x.split("").reduce((acc, curr) => acc + curr.charCodeAt(0), "")
  return a.split("").reduce((acc, curr) => acc + parseFloat(curr), 0) - a.replace(/7/g,1).split("").reduce((acc, curr) => acc + parseFloat(curr), 0)
}
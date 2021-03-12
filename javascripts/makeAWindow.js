const makeAWindow = num => {
  let base = `|${".".repeat(num)}|${".".repeat(num)}|`
  let separator = `|${"-".repeat(num)}+${"-".repeat(num)}|`
  let component = base + `\n${base}`.repeat(num-1)
  return `${"-".repeat(num*2+3)}\n${component}\n${separator}\n${component}\n${"-".repeat(num*2+3)}`
}

makeAWindow(10)
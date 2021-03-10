const vowelBack = s => {
  return s.split("").map(letter => {
    let index = letter.charCodeAt(0)
    const isVowel = /[aeiou]/.test(letter)
    return(
      letter === "c" ? "b"
        : letter === "o" ? "n"
        : /[co]/.test(letter) ? String.fromCharCode(corrector(index -1))
        : /[de]/.test(letter) ? "a"
        : !isVowel ?
          !/[code]/.test(String.fromCharCode(corrector(index +9))) ? String.fromCharCode(corrector(index +9))
          : letter
        : !/[code]/.test(String.fromCharCode(corrector(index -5))) ? String.fromCharCode(corrector(index -5))
        : letter
    )
  }).join("")
}

const corrector = (val, min=97, max=122) => {
    const p = max-min+1;
    let mod = (val-min)%p;
    if (mod<0) {
      mod += p;
    }
    return min+mod;
}
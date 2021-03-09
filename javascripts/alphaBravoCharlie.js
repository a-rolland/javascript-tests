const to_nato = words => {
  const nato = { 'A': 'Alfa',  'B': 'Bravo',   'C': 'Charlie',
        'D': 'Delta',  'E': 'Echo',    'F': 'Foxtrot',
        'G': 'Golf',   'H': 'Hotel',   'I': 'India',
        'J': 'Juliett','K': 'Kilo',    'L': 'Lima',
        'M': 'Mike',   'N': 'November','O': 'Oscar',
        'P': 'Papa',   'Q': 'Quebec',  'R': 'Romeo',
        'S': 'Sierra', 'T': 'Tango',   'U': 'Uniform',
        'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray',
        'Y': 'Yankee', 'Z': 'Zulu'
  }
  const translate = words.split("").map(letter => nato[letter.toUpperCase()] ? nato[letter.toUpperCase()].replace(/-/, "") : letter)
  
  return translate.join(" ").replace(/  +/g, ' ')
}
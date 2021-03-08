const chirp = n => n === 0 ? '' : ('chirp-' + chirp(--n)).replace(/-$/, "")

chirp(4)
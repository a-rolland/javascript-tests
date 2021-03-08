const replicate = (times, number) => times <= 0 ? [] : [number, ...replicate(--times, number)]

replicate(8,0)
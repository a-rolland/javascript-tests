multiplicationTable = function(size) {
  const tables = []
  for (i=1;i<=size;i++) {
    const currentTable = []
    for (j=1;j<=size;j++) {
      currentTable.push(i * j)
    }
    tables.push(currentTable)
  }
  return tables
}
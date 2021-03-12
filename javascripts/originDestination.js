const findRoutes = routes => {
  const routesObject = {}
  routes.forEach(route => {
    routesObject[route[0]] = route[1]
  })
  let start = Object.keys(routesObject).filter(point => Object.values(routesObject).indexOf(point) === -1)
  const result = [...start, routesObject[start[0]]]

  for (let i = 1; i<routes.length; i++) {
    result.push(routesObject[result[result.length-1]])
  }
  return result.join(", ")
}

const routes = [ ["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"] ]

findRoutes(routes)
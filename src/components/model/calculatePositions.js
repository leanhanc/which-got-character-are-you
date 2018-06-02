let calculatePositions = someArrayorObj => {
  return Object.keys(someArrayorObj).sort((a, b) => {
    return someArrayorObj[a] - someArrayorObj[b]
  })
}

export default calculatePositions

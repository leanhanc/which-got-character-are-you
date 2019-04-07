let calculatePositions = sortObject => {
  return Object.keys(sortObject).sort((a, b) => {
    return sortObject[a] - sortObject[b]
  })
}

export default calculatePositions

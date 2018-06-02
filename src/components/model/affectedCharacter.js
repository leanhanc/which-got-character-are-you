let afectado = QNum => {
  switch (QNum) {
    case 1 || 11:
      return 'TL'
      break
    case 2 || 8:
      return 'DT'
      break
    case 3 || 10:
      return 'CL'
      break
    case 4 || 9:
      return 'PB'
      break
    case 5 || 7:
      return 'SS'
      break
    default:
      return 'CL'
  }
}

export default afectado

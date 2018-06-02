let afectado = QNum => {
  switch (QNum) {
    case 1 || 11:
      return 'TL'

    case 2 || 8:
      return 'DT'

    case 3 || 10:
      return 'CL'

    case 4 || 9:
      return 'PB'

    case 5 || 7:
      return 'SS'

    default:
      return 'JS'
  }
}

export default afectado

let afectado = QNum => {
  switch (true) {
    case QNum === 1 || QNum === 11 || QNum === 13 || QNum === 22:
      return 'TL'

    case QNum === 2 || QNum === 8 || QNum === 12 || QNum === 21:
      return 'DT'

    case QNum === 3 || QNum === 10 || QNum === 16 || QNum === 19:
      return 'CL'

    case QNum === 4 || QNum === 9 || QNum === 17 || QNum === 23:
      return 'PB'

    case QNum === 5 || QNum === 7 || QNum === 14 || QNum === 18:
      return 'SS'

    default:
      return 'JS'
  }
}

export default afectado

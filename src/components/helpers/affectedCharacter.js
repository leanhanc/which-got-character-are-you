const afectado = QNum => {
  if ([1, 11, 13, 22].includes(QNum)) return 'TL'
  if ([2, 8, 12, 21].includes(QNum)) return 'DT'
  if ([3, 10, 16, 19].includes(QNum)) return 'CL'
  if ([4, 9, 14, 23].includes(QNum)) return 'PB'
  if ([5, 7, 17, 18].includes(QNum)) return 'SS'

  return 'JS'
}

export default afectado

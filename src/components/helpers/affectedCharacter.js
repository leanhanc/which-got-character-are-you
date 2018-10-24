const afectado = QuestionNumber => {
  if ([1, 11, 13, 22].includes(QuestionNumber)) return 'TL'
  if ([2, 8, 12, 21].includes(QuestionNumber)) return 'DT'
  if ([3, 10, 16, 19].includes(QuestionNumber)) return 'CL'
  if ([4, 9, 14, 23].includes(QuestionNumber)) return 'PB'
  if ([5, 7, 17, 18].includes(QuestionNumber)) return 'SS'

  return 'JS'
}

export default afectado

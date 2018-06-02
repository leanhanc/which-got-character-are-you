const transform = name => {
  switch (name) {
    case 'DT':
      return 'Daenerys Targaryen'
    case 'SS':
      return 'Sansa Stark'
    case 'TL':
      return 'Tyrion  Lannister'
    case 'JS':
      return 'John Snow'
    case 'CL':
      return 'Cersei Lannister'
    case 'PB':
      return 'Petyr Bealish ("Little Finger")'
  }
}

export default transform

const transform = name => {
  switch (name) {
    case 'DT':
      return 'Daenerys Targaryen'
    case 'SS':
      return 'Sansa Stark'
    case 'TL':
      return 'Tyrion Lannister'
    case 'JS':
      return 'Jon Snow'
    case 'CL':
      return 'Cersei Lannister'
    default:
      return 'Petyr Baelish ("Little Finger")'
  }
}

export default transform

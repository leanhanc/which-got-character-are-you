export const calculateCharacterPositions = (characterAnswers = {}) =>
  Object.keys(characterAnswers).sort((a, b) => characterAnswers[a] - characterAnswers[b]);

export const getDifference = (characterScore = {}) => {
  const ranking = Object.values(characterScore).sort((a, b) => a - b);

  if (ranking[5] - ranking[4] === 0) {
    return { ES: 'sos extremadamente similar a ', EN: 'you are extremely similar to ' };
  }
  if (ranking[5] - ranking[4] === 1) {
    return {
      ES: 'te parecés mucho a ',
      EN: 'you are very similar to ',
    };
  }
  if (ranking[5] - ranking[4] === 2) {
    return { ES: 'te parecés a ', EN: 'you are similar to ' };
  } else {
    return {
      ES: 'tenés algunas cositas de ',
      EN: 'you are a bit like ',
    };
  }
};

export const getFullCharacterInfo = (characterFirstName = '') => {
  if (characterFirstName === 'tyrion') {
    return {
      fullName: 'Tyrion Lannister',
      alias: {
        ES: 'El Gnomo',
        EN: 'The Imp',
      },
    };
  }
  if (characterFirstName === 'sansa') {
    return {
      fullName: 'Sansa Stark',
      alias: {
        EN: 'Little Bird',
        ES: 'Pequeño pajarito',
      },
    };
  }
  if (characterFirstName === 'jon') {
    return {
      fullName: 'Jon Snow',
      alias: {
        EN: 'The White Wolf, The Bastard of Winterfell, King Crow',
        ES: 'Lobo Blanco, El Bastardo de Winterfell, Rey Cuervo',
      },
    };
  }
  if (characterFirstName === 'cersei') {
    return {
      fullName: 'Cersei Lanninster',
      alias: {
        EN: 'The Lion, The mother of madness',
        ES: 'La Leona, La madre de la locura',
      },
    };
  }
  if (characterFirstName === 'petyr') {
    return {
      fullName: 'Petyr Baelish',
      alias: {
        EN: 'Little Finger',
        ES: 'Meñique',
      },
    };
  }

  return {
    fullName: 'Daenerys Targaryen',
    alias: {
      ES: 'Dany, Daenerys de la Tormenta, Mhysa, Khaleesi, Madre de Dragones',
      EN: 'Dany, Daenarys Stormborn, Mhysa, Khaleesi, Mother of Dragons',
    },
  };
};

export const buildResultInfo = (characterPositions = []) => {
  return {
    isLike: characterPositions[characterPositions.length - 1],
    closeTo: characterPositions[characterPositions.length - 2],
    farFrom: characterPositions[0],
  };
};

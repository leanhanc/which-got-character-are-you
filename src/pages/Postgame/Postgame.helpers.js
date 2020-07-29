export const calculateCharacterPositions = (characterAnswers = {}) =>
  Object.keys(characterAnswers).sort((a, b) => characterAnswers[a] - characterAnswers[b]);

const getDifference = (characterScore = []) => {
  if (characterScore[5] - characterScore[4] === 0) {
    return { ES: 'te parecés muchísimo a ', EN: 'You are very very similar to ' };
  }
  if (characterScore[5] - characterScore[4] === 1) {
    return {
      ES: 'te parecés mucho a ',
      EN: 'you are very similar to ',
    };
  }
  if (characterScore[5] - characterScore[4] === 1) {
    return { ES: 'te parecés a ', EN: 'you are similar to ' };
  } else {
    return {
      ES: 'tenés algunas cositas de',
      EN: 'you are a bit similar to',
    };
  }
};

export const buildTextResult = (characterPositions = []) => {
  return {
    main: {
      ES: `Sos ${characterPositions[5]}`,
      EN: `You are ${characterPositions[5]}`,
    },
    extra: {
      ES: `También te podemos decir que ${getDifference().ES} ${
        characterPositions[4]
      } y que estás lejos de ser como ${characterPositions[0]}`,
      EN: `We can also tell you that ${getDifference().EN} ${
        characterPositions[4]
      } and that you are far from being like ${characterPositions[0]}`,
    },
  };
};

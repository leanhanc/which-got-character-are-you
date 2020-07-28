export const lastAnswerOfStep = [5, 11, 17, 23];
export const firstAnswerOfStep = [0, 6, 12, 18];

export const jonAnswers = [0, 6, 15, 20];
export const tyrionsAnswers = [1, 11, 13, 22];
export const daenerysAnswers = [2, 8, 12, 21];
export const cerseiAnswers = [3, 10, 16, 19];
export const petyrAnswers = [4, 9, 14, 23];
export const sansaAnswers = [5, 7, 17, 18];
export const totalAnswers = 24;

export const calculateCharacterPositions = (characterAnswers = {}) =>
  Object.keys(characterAnswers).sort((a, b) => characterAnswers[a] - characterAnswers[b]);

const getDifference = (characterScore = []) => {
  if (characterScore[5] - characterScore[4] === 0) {
    return { ES: 'te parecés muchísimo a ', EN: 'You are very very similar to ' };
  }
  if (characterScore[5] - characterScore[4] === 1) {
    return {
      ES: 'te parecés mucho a ',
      EN: 'You are very similar to ',
    };
  }
  if (characterScore[5] - characterScore[4] === 1) {
    return { ES: 'te parecés a ', EN: 'you are similar to' };
  } else {
    return {
      ES: 'tenés algunas cositas de ',
      EN: 'you are a bit similar to ',
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
      } y que estás lejos de ser como ${characterPositions[0]}}`,
      EN: `We can also tell you that ${getDifference().EN}  ${
        characterPositions[4]
      } and that you are far from being like ${characterPositions[0]}`,
    },
  };
};

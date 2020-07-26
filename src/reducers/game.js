export const initialState = {
  step: 0,
  answer: 0,
  characterScore: {
    cersei: 0,
    daenerys: 0,
    jon: 0,
    petyr: 0,
    sansa: 0,
    tyrion: 0,
  },
};

export const gameActions = {
  RESET: '@@game/reset_steps',
  INCREMENT_STEP: '@@game/increment_step',
  INCREMENT_ANSWER: '@@game/increment_answer',
  CERSEI_STRONGLY_AGREE: '@@game/cersei_strongly_agree',
  CERSEI_AGREE: '@@game/cersei_agree',
  CERSEI_STRONGLY_DISAGREE: '@@game/cersei_strongly_disagree',
  CERSEI_DISAGREE: '@@game/cersei_disagree',
  DAENERYS_STRONGLY_AGREE: '@@game/daenerys_strongly_agree',
  DAENERYS_AGREE: '@@game/daenerys_agree',
  DAENERYS_STRONGLY_DISAGREE: '@@game/daenerys_strongly_disagree',
  DAENERYS_DISAGREE: '@@game/daenerys_disagree',
  JON_STRONGLY_AGREE: '@@game/jon_strongly_agree',
  JON_AGREE: '@@game/jon_agree',
  JON_STRONGLY_DISAGREE: '@@game/jon_strongly_disagree',
  JON_DISAGREE: '@@game/jon_disagree',
  PETYR_STRONGLY_AGREE: '@@game/petyr_strongly_agree',
  PETYR_AGREE: '@@game/petyr_agree',
  PETYR_STRONGLY_DISAGREE: '@@game/petyr_strongly_disagree',
  PETYR_DISAGREE: '@@game/petyr_disagree',
  SANSA_STRONGLY_AGREE: '@@game/sansa_strongly_agree',
  SANSA_AGREE: '@@game/sansa_agree',
  SANSA_STRONGLY_DISAGREE: '@@game/sansa_strongly_disagree',
  SANSA_DISAGREE: '@@game/sansa_disagree',
  TYRION_STRONGLY_AGREE: '@@game/tyrion_strongly_agree',
  TYRION_AGREE: '@@game/tyrion_agree',
  TYRION_STRONGLY_DISAGREE: '@@game/tyrion_strongly_disagree',
  TYRION_DISAGREE: '@@game/tyrion_disagree',
};

export function gameReducer({ characterScore, step, answer }, action) {
  switch (action.type) {
    case gameActions.INCREMENT_STEP:
      return { step: step + 1, characterScore, answer };
    case gameActions.INCREMENT_ANSWER:
      return { answer: answer + 1, characterScore, step };
    case gameActions.RESET:
      return { step: 0, answer: 0, characterScore: { ...initialState.characterScore } };
    case gameActions.CERSEI_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, cersei: characterScore.cersei + 1 },
      };
    case gameActions.CERSEI_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, cersei: characterScore.cersei + 3 },
      };
    case gameActions.CERSEI_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, cersei: characterScore.cersei - 1 },
      };
    case gameActions.CERSEI_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, cersei: characterScore.cersei - 3 },
      };
    case gameActions.DAENERYS_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, daenerys: characterScore.daenerys + 1 },
      };
    case gameActions.DAENERYS_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, daenerys: characterScore.daenerys + 3 },
      };
    case gameActions.DAENERYS_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, daenerys: characterScore.daenerys - 1 },
      };
    case gameActions.DAENERYS_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, daenerys: characterScore.daenerys - 3 },
      };
    case gameActions.JON_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, jon: characterScore.jon + 1 },
      };
    case gameActions.JON_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, jon: characterScore.jon + 3 },
      };
    case gameActions.JON_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, jon: characterScore.jon - 1 },
      };
    case gameActions.JON_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, jon: characterScore.jon - 3 },
      };
    case gameActions.PETYR_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, petyr: characterScore.petyr + 1 },
      };
    case gameActions.PETYR_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, petyr: characterScore.petyr + 3 },
      };
    case gameActions.PETYR_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, petyr: characterScore.petyr - 1 },
      };
    case gameActions.PETYR_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, petyr: characterScore.petyr - 3 },
      };
    case gameActions.SANSA_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, sansa: characterScore.sansa + 1 },
      };
    case gameActions.SANSA_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, sansa: characterScore.sansa + 3 },
      };
    case gameActions.SANSA_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, sansa: characterScore.sansa - 1 },
      };
    case gameActions.SANSA_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, sansa: characterScore.sansa - 3 },
      };
    case gameActions.TYRION_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, tyrion: characterScore.tyrion + 1 },
      };
    case gameActions.TYRION_STRONGLY_AGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, tyrion: characterScore.tyrion + 3 },
      };
    case gameActions.TYRION_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, tyrion: characterScore.tyrion - 1 },
      };
    case gameActions.TYRION_STRONGLY_DISAGREE:
      return {
        step,
        answer,
        characterScore: { ...characterScore, tyrion: characterScore.tyrion - 3 },
      };
    default:
      throw new Error('[game] Received invalid action type: ' + action.type);
  }
}

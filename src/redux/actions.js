import ActionTypes from "../config/actionTypes";

export const changeNav = (content) => ({
  type: ActionTypes.CHANGE_TAB,
  payload: {
    state: content,
  },
});

export const newGame = (content) => ({
  type: ActionTypes.NEW_GAME,
  payload: {
    deckSize: content,
  },
});

export const endGame = (content) => ({
  type: ActionTypes.END_GAME,
});

export const setTable = (content) => ({
  type: ActionTypes.SET_TABLE,
  payload: {
    table: content,
  },
});

export const addTries = (content) => ({
  type: ActionTypes.ADD_TRIES,
});
export const addMatches = (content) => ({
  type: ActionTypes.ADD_MATCHES,
});

let initial_state = {
  inProgress: false,
  deckSize: 6,
  won: false,
  table: [],
  matches: 0,
  best: 0,
  tries: 0,
};

const gameReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      state.inProgress = true;
      state.table = [];
      state.matches = 0;
      state.won = false;
      state.tries = 0;
      state.deckSize = action.payload.deckSize;
      return { ...state };
    case "SET_TABLE":
      state.table = action.payload.table;
      return { ...state };
    case "END_GAME":
      if (state.tries !== 0 && (!state.best || state.best > state.tries)) {
        state.best = state.tries;
      }
      state.tries = 0;
      state.deckSize = 0;
      state.inProgress = false;
      return { ...state };
    case "ADD_TRIES":
      state.tries += 1;
      return { ...state };
    case "ADD_MATCHES":
      state.matches += 1;
      return { ...state };
    default:
      return state;
  }
};

export default gameReducer;

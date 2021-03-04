let initial_state = {
  state: 0,
};

const navReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      state.state = action.payload.state;
      return state;
    default:
      return state;
  }
};

export default navReducer;

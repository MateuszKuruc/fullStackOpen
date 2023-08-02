const filterChange = (searchWord) => {
  return {
    type: "SET_FILTER",
    payload: searchWord,
  };
};

const filterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

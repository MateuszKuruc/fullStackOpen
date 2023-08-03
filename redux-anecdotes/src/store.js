import anecdoteReducer from "./reducers/anecdoteReducer";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";


const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
    },
  });

  export default store
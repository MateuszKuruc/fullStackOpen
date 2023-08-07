import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload];
    },
    getVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export default anecdoteSlice.reducer;
export const { createAnecdote, getVote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await noteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

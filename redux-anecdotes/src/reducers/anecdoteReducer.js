import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    getVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export default anecdoteSlice.reducer;
export const { getVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await noteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = content => {
  return async (dispatch) => {
    const newAnecdote = await noteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote))
  };
};

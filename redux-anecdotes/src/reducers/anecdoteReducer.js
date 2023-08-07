import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    setVotes(state, action) {
      // state.push(action.payload)
      return state.map((a) =>
        a.id !== action.payload.id ? a : action.payload
      );
    },
  },
});

export default anecdoteSlice.reducer;
export const { setAnecdotes, appendAnecdote, setVotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await noteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await noteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const getVote = (id) => {
  return async (dispatch) => {
    const anecdotes = await noteService.getAll();
    const anecdoteToChange = anecdotes.find((a) => a.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    };

    const updatedAnecdote = await noteService.addVote(changedAnecdote);

    dispatch(setVotes(changedAnecdote));
  };
};

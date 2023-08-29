import { DiaryEntry } from "../../types";
import diaries from "../../data/entries";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
};

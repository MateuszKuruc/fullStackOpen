import axios from "axios";
import { NewDiary } from "../../types";

const baseUrl = "http://localhost:3001/api/diaries";

const getAll = async () => {
  const diaries = await axios.get(baseUrl);
  console.log("diaries", diaries);
  return diaries;
};

const addDiary = async (object: NewDiary) => {
  const { data } = await axios.post(baseUrl, object);
  return data;
};

export default {
  getAll,
  addDiary,
};

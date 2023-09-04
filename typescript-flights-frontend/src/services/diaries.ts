import axios from "axios";
import { NewDiary } from "../../types";

const baseUrl = "http://localhost:3001/api/diaries";

const getAll = async () => {
  const diaries = await axios.get(baseUrl);
  return diaries;
};

const addDiary = async (object: NewDiary) => {
  const { data } = await axios.post(baseUrl, object);
  console.log("data from post request", data);
  return data;
};

export default {
  getAll,
  addDiary,
};

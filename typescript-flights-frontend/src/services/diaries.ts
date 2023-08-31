import axios from "axios";
const baseUrl = "http://localhost:3001/api/diaries";

const getAll = async () => {
  const diaries = await axios.get(baseUrl);
  console.log("diaries", diaries);
  return diaries;
};

const addDiary = async (object) => {
  const { data } = await axios.post(object, baseUrl);
  return data;
};

export default {
  getAll,
  addDiary,
};

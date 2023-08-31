import axios from "axios";
const baseUrl = "http://localhost:3001/api/diaries";

const getAll = async () => {
  const diaries = await axios.get(baseUrl);
  console.log("diaries", diaries);
  return diaries;
};

export default {
  getAll,
};

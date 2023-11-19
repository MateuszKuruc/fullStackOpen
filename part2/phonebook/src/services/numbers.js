import axios from "axios";

// local
// const baseUrl = "/api/persons";

// production build
const baseUrl = "https://fullstack-phonebook-7wl2.onrender.com/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const change = (url, newObject) => {
  const request = axios.put(url, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, change };

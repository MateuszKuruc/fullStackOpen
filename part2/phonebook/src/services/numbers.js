import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post("http://localhost:3001/persons", newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

const change = (url, newObject) => {
  const request = axios.put(url, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, change };

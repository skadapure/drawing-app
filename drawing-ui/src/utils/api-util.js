import axios from "axios";
const baseUrl = "http://localhost:8080";

export const post = (path, data) => {
  return axios({
    method: "post",
    url:`${baseUrl}${path}`,
    data
  })
}

export const get = (path, queryParameters = []) => {
  let url = `${baseUrl}${path}`;
  let query = "";
  for(let i = 0; i < queryParameters.length; i++) {
    query = `${query}${queryParameters.key}=${queryParameters.value}&`
  }
  if(query) {
    query = query.substring(0, query.length-1);
    url = `${url}?${query}`;
  }
  return axios({
    method: "get",
    url
  });
}
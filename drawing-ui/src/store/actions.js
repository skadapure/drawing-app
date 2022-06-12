import { post, get } from "../utils/api-util";
const GET_IMAGE_SUCCESS = "getImageSuccess";
const LOGIN = "login";

export const uploadImage = (image, userId) => {
	post("/images/upload", { image, userId });
}

export const getImage = async (dispatch, userId) => {
  console.log("USERID", userId);
  get(`/images/${userId}`).then((res) => { 
    const resp = res.data || [];
    dispatch({ type: GET_IMAGE_SUCCESS, payload: resp });
  })
}

export const login = (dispatch, loginCreds) => {
  post(`/login`, loginCreds).then((res) => {
    const resp = res.data || {}; 
    dispatch({ type: LOGIN, payload: resp });
  }).catch(e => console.log("LOGIN ERROR", e));
}


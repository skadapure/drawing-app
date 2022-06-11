import { post, get } from "../utils/api-util";
const GET_IMAGE_LIST_SUCCESS = "getImageListSuccess";
const GET_IMAGE_SUCCESS = "getImageSuccess";
const LOGIN = "login";

export const uploadImage = (image) => {
	post("/images/upload", { image });
}

export const getImageKeys = (dispatch) => {
  get("/images").then((res) => {
    let imageKeys = [];
    if(res && res.data && res.data.imageKeys) {
      imageKeys = res.data.imageKeys;
    }
    dispatch({ type: GET_IMAGE_LIST_SUCCESS, payload: imageKeys });
  });
}

export const getImage = async (dispatch, key) => {
  get(`/images`).then((res) => { 
    const resp = res.data || [];
    dispatch({ type: GET_IMAGE_SUCCESS, payload: resp });
  })
}

export const login = (dispatch, loginCreds) => {
  console.log("LOGIN", loginCreds);
  post(`/login`, loginCreds).then((res) => {
    const resp = res.data || {}; 
    console.log("DATA", resp);
    dispatch({ type: LOGIN, payload: resp });
  }).catch(e => console.log("LOGIN ERROR", e));
}


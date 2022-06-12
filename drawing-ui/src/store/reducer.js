const GET_IMAGES_SUCCESS = "getImageSuccess";
const LOGIN = "login";

export const initialState = {
  images: [],
  userId: ""
}
export const reducer = (state, {type, payload}) => {
  switch(type) {
    case GET_IMAGES_SUCCESS: {
      const { images } = payload;
      return { ...state, images};
    }
    case LOGIN: {
      return { ...state, userId: payload} 
    }
    default: return state;
  }
}
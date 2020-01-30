import Axios from 'axios';

export const authSignUp = (URL_STRING, data) => {
  console.log(data);
  return {
    type: 'POST_REGISTER',
    payload: Axios.post(URL_STRING, data),
  };
};

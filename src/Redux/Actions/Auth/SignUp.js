import Axios from 'axios';

const URL_STRING = 'https://hiring-channel-app.herokuapp.com/auth/register';

export const authSignUp = data => {
  console.log(data);
  return {
    type: 'POST_REGISTER',
    payload: Axios.post(URL_STRING, data),
  };
};

import Axios from 'axios';

const URL_STRING = 'https://hiring-channel-app.herokuapp.com/api/engineer/get/';

export const getEngineer = (config, username) => {
  console.log(config);
  return {
    type: 'GET_ENGINEER',
    payload: Axios.get(URL_STRING + username, config),
  };
};

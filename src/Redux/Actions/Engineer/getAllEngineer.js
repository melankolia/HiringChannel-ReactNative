import Axios from 'axios';

const URL_STRING = 'https://hiring-channel-app.herokuapp.com/api/engineer';

export const getAllEngineer = config => {
  return {
    type: 'GET_ALL_ENGINEER',
    payload: Axios.get(URL_STRING, config),
  };
};

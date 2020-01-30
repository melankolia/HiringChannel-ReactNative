import Axios from 'axios';

export const getAllEngineer = (URL_STRING, config) => {
  return {
    type: 'GET_ALL_ENGINEER',
    payload: Axios.get(URL_STRING, config),
  };
};

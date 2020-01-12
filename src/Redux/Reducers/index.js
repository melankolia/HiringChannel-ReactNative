import {combineReducers} from 'redux';
import Engineer from './Engineer/getEngineer';
import Company from './Company/getCompany';
import authSignUp from './Auth/SignUp';
import getAllEngineer from './Engineer/getAllEngineer';

const reducers = combineReducers({
  Engineer,
  Company,
  authSignUp,
  getAllEngineer,
});

export default reducers;

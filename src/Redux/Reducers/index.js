import {combineReducers} from 'redux';
import Engineer from './Engineer/getEngineer';
import Company from './Company/getCompany';
import authSignUp from './Auth/SignUp';

const reducers = combineReducers({
  Engineer,
  Company,
  authSignUp,
});

export default reducers;

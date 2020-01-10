import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Detail, Home, SignIn, Started} from '../Pages/Index';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
    Started: {
      screen: Started,
    },
    SignIn: {
      screen: SignIn,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
  },
);

export default createAppContainer(Router);

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Detail, Home, SignIn, Started, SignUp} from '../Pages/Index';

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
    SignUp: {
      screen: SignUp,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Started',
  },
);

export default createAppContainer(Router);

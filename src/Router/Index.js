import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../Pages/Index';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Router);

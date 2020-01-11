import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Detail, Home, SignIn, Started, SignUp, Engineer} from '../Pages/Index';

const HomeStack = createStackNavigator(
  {
    Home,
    Detail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);
const EngineerStack = createStackNavigator(
  {
    Engineer,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Engineer',
  },
);
const OuterStack = createStackNavigator(
  {
    Started,
    SignIn,
    SignUp,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Started',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    EngineerStack,
    OuterStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'OuterStack',
  },
);
export default createAppContainer(Router);

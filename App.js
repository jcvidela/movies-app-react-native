import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import {Auth, AuthLoading, Books, Home, Detail} from './src/screens/index';

const OnBoardingNavigator = createStackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Books: {
      screen: Books,
      navigationOptions: {
        headerShown: false,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

/**
 * Switch between: 
 * AuthLoading(We determine if there is an active session), 
 * OnBoarding(Login), 
 * Application
 */
const BaseStack = createSwitchNavigator(
  {
    AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(BaseStack);

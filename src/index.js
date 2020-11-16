import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// screens
import {Auth, AuthLoading, Books, Home, Detail, WishlistScreen, AddNew, Rentals, Settings} from './screens/index';

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

const BottomTabNavigator = createBottomTabNavigator(
  {
    Library: {
      screen: AppNavigator,
      navigationOptions: {
        headerShown: false,
        tabBarIcon:({focused}) => 
        <Image source={focused ? require('../assets/toolbar/ic_library_active.png') : require('../assets/toolbar/ic_library.png')} style={{width: 30, height: 30}}/>
      },
    },
    Wishlist: {
      screen: WishlistScreen,
      navigationOptions: {
        headerShown: false,
        tabBarIcon:({focused}) => 
        <Image source={focused ? require('../assets/toolbar/ic_wishlist_active.png') : require('../assets/toolbar/ic_wishlist.png')} style={{width: 30, height: 30}}/>
      },
    },
    AddNew: {
      screen: AddNew,
      navigationOptions: {
        headerShown: false,
        tabBarIcon:({focused}) => 
        <Image source={focused ? require('../assets/toolbar/ic_add_new_active.png') : require('../assets/toolbar/ic_add_new.png')} style={{width: 30, height: 30}}/>
      },
    },
    Rentals: {
      screen: Rentals,
      navigationOptions: {
        headerShown: false,
        tabBarIcon:({focused}) => 
        <Image source={focused ? require('../assets/toolbar/ic_myrentals.png') : require('../assets/toolbar/ic_myrentals.png')} style={{width: 30, height: 30}}/>
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerShown: false,
        tabBarIcon:({focused}) => 
        <Image source={focused ? require('../assets/toolbar/ic_settings_active.png') : require('../assets/toolbar/ic_settings.png')} style={{width: 30, height: 30}}/>
      },
    },
  },
  {
    initialRouteName: 'Library'
  },
);

const BaseStack = createSwitchNavigator(
  {
    AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: BottomTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(BaseStack);

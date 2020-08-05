import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/screens/Login';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import AccountScreen from './src/screens/AccountScreen';
import Matriminial from './src/screens/Matriminial';
import KidsScreen from './src/screens/KidsScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const navigator = createSwitchNavigator({
  Loading: LoadingScreen,
  LoginFlow: createStackNavigator({
    Login:Login,
    Signup: SignupScreen
  }),
  MainFlow:createDrawerNavigator({
    DashBoard: createBottomTabNavigator({
      Home:HomeScreen,
      Quiz: QuizScreen,
      Matrimonial:Matriminial,
      Kids:KidsScreen
    }),
    Account: AccountScreen
  })
})

var App = createAppContainer(navigator);

export default ()=>{
  console.disableYellowBox = true;
  return <App />
}
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Image} from 'react-native';
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
import Verify from './src/screens/Verify';

const navigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Verify:Verify,
  LoginFlow: createStackNavigator({
    Login:Login,
    Signup: SignupScreen
  }),
  MainFlow:createDrawerNavigator({
    DashBoard: createBottomTabNavigator({
      Quiz: {screen : QuizScreen, navigationOptions: {
        tabBarLabel:"Quiz",
        tabBarIcon: ({ tintColor }) => (
          <Image
          source={require('./src/images/sample.png')}
          style={[{ tintColor },{height:30, width:30}]}
      />
        ),
        tabBarOptions:{
          //other properties
          pressColor: 'white',//for click (ripple) effect color
          style: {
            backgroundColor: '#93278f',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'black',
      }
      }
      
      },
      Home:{screen : HomeScreen, navigationOptions: {
        tabBarLabel:"Education",
        tabBarIcon: ({ tintColor }) => (
          <Image
          source={require('./src/images/education.png')}
          style={[{ tintColor },{height:30, width:30}]}
      />
        ),
        tabBarOptions:{
          //other properties
          pressColor: 'white',//for click (ripple) effect color
          style: {
            backgroundColor: '#93278f',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'black',
      }
      }
    },
    
      Matrimonial:{screen : Matriminial, navigationOptions: {
        tabBarLabel:"Matrimonial",
        tabBarIcon: ({ tintColor }) => (
          <Image
          source={require('./src/images/matri.png')}
          style={[{ tintColor },{height:30, width:30}]}
      />
        ),
        tabBarOptions:{
          //other properties
          pressColor: 'white',//for click (ripple) effect color
          style: {
            backgroundColor: '#93278f',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'black',
      }
      }, 
      },
      Kids:{screen : KidsScreen, navigationOptions: {
        tabBarLabel:"Childern's Corner",
        tabBarIcon: ({ tintColor }) => (
          <Image
          source={require('./src/images/child.png')}
          style={[{ tintColor },{height:30, width:30}]}
      />
        ),
        tabBarOptions:{
          //other properties
          pressColor: 'white',//for click (ripple) effect color
          style: {
            backgroundColor: '#93278f',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'black',
      }
      }
      }
    }),
    Account: AccountScreen
  })
})

var App = createAppContainer(navigator);

export default ()=>{
  console.disableYellowBox = true;
  return <App />
}
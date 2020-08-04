import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Account from './Account';
import Sample from './Sample';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Children from './Children';
import Matriminial from './Matriminial';
import Education from './Education';

export default class Quiz extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
       title: 'DashBoard',
       headerStyle: {
          backgroundColor: '#93278f'
       }
    }
 }

    render(){
    return (
        <Tab />
        );
  }
}

const TabNavigator = createBottomTabNavigator({  
 
  Profile:{screen : Sample, navigationOptions: {
    tabBarLabel:"BPL",
    tabBarIcon: ({ tintColor }) => (
      <Image
      source={require('../images/sample.png')}
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
Children:{screen : Children, navigationOptions: {
  tabBarLabel:"Childern's Corner",
  tabBarIcon: ({ tintColor }) => (
    <Image
    source={require('../images/child.png')}
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
Matri:{screen : Matriminial, navigationOptions: {
  tabBarLabel:"Matrimonial",
  tabBarIcon: ({ tintColor }) => (
    <Image
    source={require('../images/matri.png')}
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
Education:{screen : Education, navigationOptions: {
  tabBarLabel:"Education",
  tabBarIcon: ({ tintColor }) => (
    <Image
    source={require('../images/education.png')}
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
});  
 
const Tab = createAppContainer(TabNavigator); 

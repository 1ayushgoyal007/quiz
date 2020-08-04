import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Notch from '../components/Notch';

var bg = require('../images/bg.png');
var logo = require('../images/logo.png');
export default class Splash extends React.Component{
  constructor(props){
      super(props);
      // setTimeout(() => {this.props.navigation.navigate('Login')},5000);
  };
  
    render(){
    return (
      <ImageBackground source={bg} style={{height:'100%', width:'100%'}}>
          <StatusBar style="light"  />
          <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
          <Image 
          source={logo}
          style={{height:100, width:100}}
          />
          </View>
          </ImageBackground>
  );
}
}
 

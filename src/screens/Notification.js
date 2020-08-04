import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


export default class Notification extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
       title: 'Notification',
       headerStyle: {
          backgroundColor: '#93278f'
       }
    }
 }

    render(){
    return (
    <View style={{flex:1}}>
      </View>
  );
}
}
 

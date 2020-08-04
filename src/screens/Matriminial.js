import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
// import Header from '../components/Header';
// import Card from '../components/Card';

export default class Matriminial extends React.Component{

//   static navigationOptions = ({ navigation }) => {
//     return {
//        title: 'Account',
//        headerStyle: {
//           backgroundColor: '#93278f'
//        }
//     }
//  }

    render(){
    return (
    <View style={{paddingTop:30, backgroundColor:'#f0f0f0', flex:1}}>
         <StatusBar style="dark"  />
         {/* <Header headerText="Account"/> */}
         <ScrollView>
         {/* <Card />
         <Card />
         <Card />
         <Card />
         <Card /> */}
         </ScrollView>
      </View>
  );
}
}
 

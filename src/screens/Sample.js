import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

export default class Sample extends React.Component{
  SampleFunction=()=>{
 
    Alert.alert("Floating Button Clicked");

}


    render(){
    return (
    // <View style={{flex:1, paddingTop:30}}>
      <View style={{flex:1, paddingTop:30}}>
{/*  
 <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >

   <Image source={require('../images/matri.png')} 
   
          style={styles.FloatingButtonStyle} />

 </TouchableOpacity> */}


      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        </ScrollView>
</View>
        //  {/* <StatusBar style="dark"  />
        //  {/* <Header headerText="Sample"/> */}
        //  <ScrollView>
        //    <Card />
        //    <Card />
        //    <Card />
        //    </ScrollView>
      // </View> */}
  );
}
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#F5F5F5'
  },
 
  TouchableOpacityStyle:{
 
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 30,
    zIndex: 1000
  },
 
  FloatingButtonStyle: {
 
    resizeMode: 'contain',
    width: 70,
    height: 70,
  }
});
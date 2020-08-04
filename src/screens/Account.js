import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Button } from 'react-native';

export default class Account extends React.Component{

    render(){
    return (
    <View style={{paddingTop:30, backgroundColor:'#f0f0f0', flex:1,}}>
         <StatusBar style="dark"  />
             <View style={{ flexDirection:"row"}}>
              <Text style={styles.text}>Welcome John</Text>     
              <Image 
              source={require('../images/account.png')}
              style={{width:60, height:60, marginTop:30, marginLeft:60}}
              /> 
              </View>
              <View style={{marginLeft:10, marginTop:30}}>
              <View style={{height:150, width:310, backgroundColor:"lightgrey", marginLeft:10, borderRadius:10}}>
                <Text style={{fontSize:20, paddingTop:20, paddingLeft:10, fontWeight:"bold"}}>Points : 50</Text>
             <View style={{matginTop:40}}>
               <View style={{backgroundColor:"purple", width:150, height:50, marginTop:40, marginLeft:70, borderRadius:20}}>
                 <Text style={{marginTop:10, color:"white", fontSize:20, marginLeft:15}}>Redeem Now</Text>
               </View>
             </View>
                </View>
                </View>
      </View>
  );
}
}
 
const styles = StyleSheet.create({
  text:{
    marginLeft: 20,
    marginTop:50,
    fontSize:30,
    fontWeight:"bold"
  }
})
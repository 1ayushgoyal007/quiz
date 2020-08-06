import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import firebase from '../firebase';
const LoadingScreen = ({ navigation}) =>{

    const isLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log('email verfication',user.emailVerified);
                if(user.emailVerified){
                    console.log('going to main')
                    navigation.navigate('MainFlow');
                }else{
                    console.log('gonna verify');
                    navigation.navigate('Verify');
                }
            }else{
                console.log('Going to login flow');

                navigation.navigate('LoginFlow');
            }
        })
    }

    useEffect(()=>{
        isLoggedIn();
    })

    return <View style={styles.container} >
        <View style={styles.main} >
        <BarIndicator color='purple' />
        </View>
    </View>
}

var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default LoadingScreen;
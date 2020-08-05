import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from '../firebase';
const LoadingScreen = ({ navigation}) =>{

    const isLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log('Going or main flow');
                navigation.navigate('MainFlow');
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
            <ActivityIndicator size='large' />
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
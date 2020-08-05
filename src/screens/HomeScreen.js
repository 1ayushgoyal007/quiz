import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from '../firebase';

const HomeScreen = ({ navigation}) =>{

    if(firebase.auth().currentUser){
        console.log('present');
    }else{
        console.log('not present');
    }

    const signOut = () =>{
        firebase.auth().signOut();
    }

    return <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={()=> signOut() } >
            <Text>Sign put</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;
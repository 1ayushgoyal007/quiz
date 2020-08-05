import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from '../firebase';
import Notch from '../components/Notch';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation}) =>{

    if(firebase.auth().currentUser){
        console.log('present');
    }else{
        console.log('not present');
    }

    const signOut = () =>{
        firebase.auth().signOut();
    }


    const getData = () =>{
        console.log('starts frm here',firebase.auth().currentUser.emailVerified);
    }

    const verifyMail = () =>{
        firebase.auth().currentUser.sendEmailVerification().then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return <View>
        <Notch />
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={()=> signOut() } >
            <Text>Sign out</Text>
        </TouchableOpacity>
        <Spacer />
        <TouchableOpacity  onPress={()=> getData()} >
            <Text>check console  to check</Text>
        </TouchableOpacity>
        <Spacer />
        <TouchableOpacity  onPress={()=> verifyMail() } >
            <Text>Verify your mail</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;
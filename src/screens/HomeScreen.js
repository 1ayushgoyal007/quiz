import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from '../firebase';
import Notch from '../components/Notch';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation}) =>{


    const [status, setStatus] = useState(true);

    const signOut = () =>{
        firebase.auth().signOut();
    }

    const getData = () =>{
        
        console.log('starts frm here',firebase.auth().currentUser.emailVerified);
    }

    const verifyMail = () =>{
        firebase.auth().currentUser.sendEmailVerification().then((data)=>{
            status? setStatus(false):setStatus(true);
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const pushData = () =>{
        firebase.database().ref(`'users/12`).set({
            name:'aysuh',
            email:'email.com',
            created:Date.now()
        })

        console.log('pushed');
    }

    useEffect(()=>{
        console.log('hereis your sata')
        getData();
    })

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
        <Spacer />
        <TouchableOpacity onPress={()=> pushData() } >
            <Text>push data</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;
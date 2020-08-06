import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from '../firebase';
import Spacer from '../components/Spacer';
import Notch from '../components/Notch';

const Verify = ({ navigation }) =>{

    const [msg, setMsg] = useState('');
    const [btn, setBtn] = useState(false);

    const sendEmail = () =>{
        firebase.auth().currentUser.sendEmailVerification().then(()=>{
            setMsg('Email Has Been Send to Verify your Account');
            setBtn(true);
        }).catch(()=>{
            setMsg('Error Occured white Send Verification link');
        })
    }

    const signOut = () =>{
        firebase.auth().signOut().then(()=>{
            navigation.navigate('LoginFlow',{loginMsg:'Account Successfully Created, Now Login'} );
        })
    }

    return <View>
        <Notch />
        <Spacer />
        <Text style={{fontSize:20, textAlign:'center'}} >Verify Your Email</Text>
        <Spacer />
        <TouchableOpacity onPress={()=> sendEmail() } >
            <Text style={{textAlign:'center', fontSize:18}} >Click Here to verify your Email.</Text>
        </TouchableOpacity>
        <Spacer />
        <Text style={{fontSize:16, color:'blue', textAlign:'center'}} >{msg}</Text>
        <Spacer />
        {btn?<View>
            <Text style={{fontSize:18, textAlign:'center'}} >After Completing Email Verification, Click Submit to Complete Account Setup. and Login.</Text>
            <Spacer />
            <TouchableOpacity onPress={()=> signOut() } style={styles.submit} >
                <Text style={{color:'white'}} >Submit</Text>
            </TouchableOpacity>
        </View>:null}
    </View>

}

const styles = StyleSheet.create({
    submit:{
        alignSelf:'center',
        backgroundColor:'purple',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10
    }
});

export default Verify;
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import firebase from '../../firebase';

const KidsScreen = ({ navigation}) =>{

    // if(firebase.auth().currentUser){
    //     console.log('present');
    // }else{
    //     console.log('not present');
    // }

    return <View>
        <Text>Kids Screen</Text>
        <TouchableOpacity  >
            <Text>open</Text>
        </TouchableOpacity>
    </View>
}

export default KidsScreen;
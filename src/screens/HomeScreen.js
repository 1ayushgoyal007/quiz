import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation}) =>{
    return <View>
        <Text>Home Screen</Text>
        <TouchableOpacity  >
            <Text>open</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;
import React from 'react';
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

const Spinner = (  ) =>{
    return <View style={styles.spinner} >
         <BarIndicator color='purple' />
    </View>
}

const styles = StyleSheet.create({
    spinner:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center'
    }
});

export default Spinner;
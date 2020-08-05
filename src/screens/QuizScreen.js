import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Card from '../components/Card';

const QuizScreen = () =>{
    return <View style={{paddingTop:30, backgroundColor:'#f0f0f0', flex:1}}>
    <StatusBar style="dark"  />
    {/* <Header headerText="Account"/> */}
    <ScrollView>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </ScrollView>
 </View>
}

export default QuizScreen;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from '../navigation/Drawer';
import {View, Text} from 'react-native';
export default class Connector extends React.Component{
 render(){ 
    console.log('Navigate to drawer!!') 
    return       <NavigationContainer>
      <Text>Hello</Text>
    </NavigationContainer>
  };
};

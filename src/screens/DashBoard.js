import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems, DrawerContentScrollView} from 'react-navigation-drawer';  
import {  
    createSwitchNavigator,  
    createAppContainer 
} from 'react-navigation';  
import Quiz from './Quiz';
import Account from './Account';

export default class DashBoard extends Component {  
    constructor(props){
        super(props);
    };
    render() {  
        return <AppContainer />;  
    }  
}  
  

 
const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: Quiz  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            ) ,
            headerRight: (  
              <Image 
              source={require('../images/notification.png')}
              style={{height:30, width:30, marginRight:10}}
              />  
          )
        };  
        }  
    }  
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: Account  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                ) ,
                headerRight: (  
                    <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
                  <Image 
                  source={require('../images/notification.png')}
                  style={{height:30, width:30, marginRight:10}}
                  /> 
                  </TouchableOpacity>
              ) 
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },  
    Welcome: {  
        screen: WelcomeStackNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    Welcome: { screen: Account },  
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  


const DrawerContent = props => {
    return (
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
        <View>
          <View flex={0.4} margin={20} bottom>
            <Image
              source={{
                uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
                height: 60,
                width: 60,
                scale: 0.5,
              }}
              resizeMode="center"
              style={styles.avatar}
            />
            <Text white title>
              React UI Kit
            </Text>
            <Text white size={9}>
              contact@react-ui-kit.com
            </Text>
          </View>
          <View>
            <DrawerItem
              label="Dashboard"
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              onPress={() => props.navigation.navigate('Quiz')}
              icon={() => <AntDesign name="dashboard" color="white" size={16} />}
            />
            <DrawerItem
              label="Messages"
              labelStyle={{ color: 'white', marginLeft: -16 }}
              style={{ alignItems: 'flex-start', marginVertical: 0 }}
              onPress={() => props.navigation.navigate('Account')}
              icon={() => <AntDesign name="message1" color="white" size={16} />}
            />
           
          </View>
        </View>
  
        <View flex={false}>
          <DrawerItem
            label="Logout"
            labelStyle={{ color: 'white' }}
            icon={() => <AntDesign name="logout" color="white" size={16} />}
            onPress={() => alert('Are your sure to logout?')}
          />
        </View>
      </DrawerContentScrollView>
    );
  };
  


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    },
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
        // overflow: 'scroll',
        // borderWidth: 1,
      },
      drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
      drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
      drawerLabel: { color: 'white', marginLeft: -16 },
      avatar: {
        borderRadius: 60,
        marginBottom: 16,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
      },  
});
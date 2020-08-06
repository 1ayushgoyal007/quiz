import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Animated, Dimensions, TouchableOpacity} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email_typing : false,
      password_typing : false,
      animation_login : new Animated.Value(width-40),
      enable: true
    }
  }

  _foucus(value){
    if(value == "email"){
      this.setState({
        email_typing : true,
        password_typing : false
      })
    }
    else{
      this.setState({
        email_typing : false,
        password_typing : true
      })
    }
  }

  _animation(){
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 250,
      }
    ).start();

    setTimeout(() => {
      this.setState({enable : false,
      email_typing: false,
      password_typing: false
      })
    }, 15);
    
  }
 
  render(){
    const width = this.state.animation_login; 
    return (
      <View style={styles.container}>
         <StatusBar style="light" />
         <View style={styles.header}>
           
             <Text style={{color:"white", fontWeight:"bold", fontSize:30}}>Welcome</Text>
             <Text style={{color:"yellow"}}>Sign In To Continue</Text>
           </View>
           <View style={styles.footer}>
             <Text style={[styles.title,{
               marginTop:50,
            }]}>Email</Text>
             <View style={styles.action}>
                <TextInput 
                placeholder="your email..."
                style={styles.TextInput}
                onFocus={()=>this._foucus("email")}
                />
                {this.state.email_typing ? <TypingAnimation dotColor="#93278f" style={{marginRight:25}}/> : null}
             </View>
             <Text style={[styles.title, {marginTop:20 }]}>Password</Text>
             <View style={styles.action}>
                <TextInput 
                secureTextEntry
                placeholder="your password..."
                style={styles.TextInput}
                onFocus={()=>this._foucus("password")} 
                />
                {this.state.password_typing ? <TypingAnimation dotColor="#93278f" style={{marginRight:25}}/> : null}
             </View>
              <TouchableOpacity
              onPress={()=>this._animation()}
              >
                  <View style={styles.button_container}>
                    <Animated.View style={[styles.animation,{width}]}>
                      {this.state.enable ?
                      <Text style={styles.textButton}>Login</Text>
                      :
                      <Animatable.View
                      animation="bounceIn"
                      delay={50}
                      >
                      <FontAwesome 
                      name="check"
                      color="white"
                      size= {20}
                      />
                       {this.props.navigation.navigate('Connector')}
                      </Animatable.View>
                      
                      }
                      </Animated.View>
                  </View>
             </TouchableOpacity>
             <View style={styles.signUp}>
                      <Text style={{color:"black"}}>New User?</Text>
                      <Text style={{color:"blue"}}>SignUp?</Text>
               </View>
             </View>
          </View>
  );
}
}
 const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:"center"
  },
  header:{
    flex:1,
  },
  footer:{
    flex:2,
    padding: 20,
  },
  ImageBackground:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:Dimensions.get("screen").width,
    height:'100%',
  },
  title:{
    color:"black",
    fontWeight:"bold"
  },
  action:{
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor:"#f2f2f2"
  },
  TextInput:{
    flex:1,
    marginTop:5,
    paddingBottom:5,
    color:"grey"
  },
  button_container:{
    justifyContent:"center",
    alignItems:"center"
  },
  animation:{
    backgroundColor:"#93278f",
    paddingVertical:10,
    marginTop:30,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  },
  textButton:{
    color:"white",
    fontWeight:"bold",
    fontSize:18
  },
  signUp:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20
  }
})
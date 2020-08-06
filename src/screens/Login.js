import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Animated, Dimensions, TouchableOpacity, Alert} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import firebase from '../firebase';
import Spinner from '../components/Spinner';
import Spacer from '../components/Spacer';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email_typing : false,
      password_typing : false,
      animation_login : new Animated.Value(width-40),
      enable: true,
      email:'',
      password:'',
      status: false,
      msg:''
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

  

  _animation(email, password){
  
    this.setState({status:true, msg:''})
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log('User Signed In');
      }).catch((err)=>{
        this.setState({status:false, msg:'Invalid Username or password'})
        console.log(err);
        
      })
    }catch(err){
      console.log('did not Signed in',err);

    }
  }
 
  render(){
    const loginMsg = this.props.navigation.getParam('loginMsg');

    console.log('here is the message which should be displayed', loginMsg);

    const width = this.state.animation_login; 
    return (
      <View style={styles.container}>
         <StatusBar style="light" />
         <View style={styles.header}>
           <ImageBackground
           source={require('../images/sample1.png')}
           style={styles.ImageBackground}
           >
             <Text style={{color:"white", fontWeight:"bold", fontSize:30}}>Welcome</Text>
             <Text style={{color:"yellow"}}>Sign In To Continue</Text>
             </ImageBackground>
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
                value={this.state.email}
                onChangeText={(email)=> this.setState({email})}
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
                value={this.state.password}
                onChangeText={(password)=>this.setState({password})}
                />
                {this.state.password_typing ? <TypingAnimation dotColor="#93278f" style={{marginRight:25}}/> : null}
             </View>
            {this.state.status? 
            <View style={{marginTop:30}} >
              <Spinner />
            </View>:
              <TouchableOpacity
                onPress={()=>this._animation(this.state.email, this.state.password)}
              >
                  <View style={styles.button_container}>
                      <Text style={styles.textButton}>Login</Text>
                  </View>
              </TouchableOpacity>}
              <Spacer />
              <Text style={{textAlign:'center', color:'red', fontSize:18}} >{this.state.msg}</Text>
              <View style={styles.signUp}>
                      <Text style={{color:"black", fontSize:18}}>New User?</Text>
                      <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Signup')} >
                        <Text style={{color:"blue",  fontSize:18}}>SignUp?</Text>
              </TouchableOpacity>
               </View>
             </View>
          </View>
  );
}
}



Login.navigationOptions = () =>{
  return {
      headerShown: false
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
    alignItems:"center",
    backgroundColor:"#93278f",
    paddingVertical:10,
    marginTop:30,
    borderRadius:100,
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
    justifyContent:"space-around",
    marginTop:20
  }
})
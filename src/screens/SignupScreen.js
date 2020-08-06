


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Animated, Dimensions, TouchableOpacity} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import firebase from '../firebase';
import Spinner from '../components/Spinner';

export default class SignupScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name_typing:false,
      email_typing : false,
      password_typing : false,
      animation_login : new Animated.Value(width-40),
      enable: true,
      name:'',
      email:'',
      password:'',
      msg:'',
      status:false
    }
  }

  _foucus(value){
    if(value == "email"){
      this.setState({
        email_typing : true,
        password_typing : false,
        name_typing:false
      })
    }
    else if(value=="name"){
      this.setState({
        email_typing : false,
        password_typing : false,
        name_typing:true
      })
    }
    else{
      this.setState({
        email_typing : false,
        password_typing : true,
        name_typing:false
      })
    }
  }

  _animation(name,email, password ){
    this.setState({status:true, msg:''})

    if(!email.length || !name.length || !password.length ){
      this.setState({msg:'Invalid Credentials', status:false});
    }else{
    console.log('name', name, email, password);

    try{

     firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
      console.log('User Created', user.user.uid );
      firebase.database().ref(`/users/${user.user.uid}`).set({
        name:name,
        email:email,
        created_at: Date.now()
      }).then(()=>{
        console.log('entering db');
        // this.props.navigation.navigate('Verify');
        this.setState({msg:'Account Created'});
      });

    }).catch((err)=>{
      this.setState({status:false, msg:err.message })
      console.log(err, typeof(err), err.message, typeof(err.message) );
      
    })
    
  }
  catch(err){
      console.log('Failed creating User', err);
      this.setState({msg:'Could not create User'});
  }
}
}
  render(){
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
             <Text style={{color:"yellow"}}>Create Your Account</Text>
             </ImageBackground>
           </View>
           <View style={styles.footer}>
             <Text style={[styles.title,{
               marginTop:50,
            }]}>Full Name</Text>
             <View style={styles.action}>
                <TextInput 
                placeholder="Enter Name "
                style={styles.TextInput}
                onFocus={()=>this._foucus("name")}
                value={this.state.name}
                onChangeText={(name)=> this.setState({name})}
                />
                {this.state.name_typing ? <TypingAnimation dotColor="#93278f" style={{marginRight:25}}/> : null}
             </View>
             <Text style={[styles.title,{
               marginTop:20,
            }]}>Email</Text>
             <View style={styles.action}>
                <TextInput 
                placeholder="your email..."
                style={styles.TextInput}
                onFocus={()=>this._foucus("email")}
                value={this.state.email}
                onChangeText={(email)=>this.setState({email})}
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
                onChangeText={(password)=> this.setState({password:password})}
                />
                {this.state.password_typing ? <TypingAnimation dotColor="#93278f" style={{marginRight:25}}/> : null}
             </View>
             {this.state.status? 
             <View style={{marginTop:30}} >
                <Spinner />
             </View>:
              <TouchableOpacity
              onPress={()=>this._animation(this.state.name, this.state.email, this.state.password)}
              >
                  <View style={styles.button_container}>
                      <Text style={styles.textButton}>Create Account</Text>
                  </View>
              </TouchableOpacity>}
              <View >
                    <Text style={{fontSize:18, marginTop:20, color:'red', textAlign:'center'}} >{this.state.msg}</Text>
              </View>
              <View style={styles.signUp}>
                      <Text style={{color:"black", fontSize:18}}>Already Have an Account?</Text>
                      <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Login') } >
                        <Text style={{color:"blue",  fontSize:18}}>Sign In</Text>
              </TouchableOpacity>
               </View>
             </View>
          </View>
  );
}
}



SignupScreen.navigationOptions = () =>{
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
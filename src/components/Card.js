import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';


const Card  = () => {
    return <View style = {styles.container} >

        <View style={styles.head} >
            <View style={styles.image} >
            </View>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20}} >Multi Processor Quiz</Text>
        </View>
        <View>
            <Text style={{textAlign:'center',marginBottom:20 }} >Micro Processor Applications</Text>
        </View>
        <View style={styles.mid} >
            <View style={styles.head} >
                <FontAwesome name="user-circle" color="purple" size={24} />
                <Text style={{fontWeight:'bold', fontSize:16, marginLeft:5}} >Anurag Dixit</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}} >
                <MaterialIcons name="timelapse" size={16} color='gray' />
                <Text style={{ fontSize:14}} >10 Minutes</Text>
            </View>
        </View>
        <View style={styles.last} >
            <TouchableOpacity>
                <View style={styles.leaderBoard}>
                    <SimpleLineIcons name="badge" color="purple" size={18} />
                    <Text style={{color:'purple', paddingLeft:10}} >LeaderBoard</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.start} >
                    <Text style={{color:'white', fontSize:16, paddingRight:10}} >Start</Text>
                    <AntDesign name="arrowright" color="white" size={20} />
                </View>
            </TouchableOpacity>
        </View>


    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        margin:20,
        borderRadius:5
    },
    head:{
        flexDirection:'row'
    },
    image:{
        width:50,
        height:50,
        borderRadius:5100,
        backgroundColor:'purple',
        margin:20
    },
    mid:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20
    },
    leaderBoard:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'purple',
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:5,
    },
    start:{
        flexDirection:'row',
        backgroundColor:'purple',
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:5
    },
    last:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20
    }
}
);

export default Card;
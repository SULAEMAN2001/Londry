import {StatusBar} from 'expo-status-bar'; 
import { StyleSheet, Text, TextInput, View, Button, Image}
from 'react-native';

import tandaPanah from './assets/Vector.png'
import facebook from './assets/facebook.png'
import google from './assets/google.png'

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View>
      <Text style={{
      fontSize:34,
      fontWeight:'bold'
      }}>Sign Up</Text>
    <TextInput style={{
      height:64,
      widht:343,
      borderColor:'gray',
      borderWidth:1,
      marginTop:20,
      borderRadius:10,
      paddingLeft:10
    }}placeholder="Name"/>
    <TextInput style={{
      height:64,
      widht:343,
      borderColor:'gray',
      borderWidth:1,
      marginTop:20,
      borderRadius:10,
      paddingLeft:10
    }}placeholder="Email"/>
    <TextInput style={{
      height:64,
      widht:343,
      borderColor:'gray',
      borderWidth:1,
      marginTop:20,
      borderRadius:10,
      paddingLeft:10
    }}placeholder="Password"/>
    <View>
    <Text style={{
      marginTop:10,
     marginBottom:20,
     textAlign:'right'
    }}>Already have a account?<Image source={tandaPanah} style = {{ widht: 40, height: 5}} /></Text></View>
    <Button style={{
      marginTop:40,
    }}title="Sign in"/>
    <Text style={{
      marginTop:20,
      textAlign:'center',
    }}>Or sing up with account sosial media</Text>
    <View style={{
      flexDirection:'row',
      marginTop:20,
      justifyContent:'space-around',
      alignItems:'center'
    }}>
      <Image source={facebook} style={{
        width: 25, height :25}}/>
      <Image source={google} style={{
        width: 25, height :25}}/>
    </View>
    </View>
    </View>
      );
}
 const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingTop:100,
    paddingLeft:20,
  },
});
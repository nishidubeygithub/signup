import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, textStyle, Image, TextInput, placeholder, setState, onPress, TouchableOpacity} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
  return (
    //<View style={styles.container}>
    <View style= {{flex: 1, paddingHorizontal:20, backgroundColor:"lightblue"}}>
    <View style={{flexDirection:"row"}}>
    <Image source={require("/Users/indianic/Desktop/nishicoding/registrationpage/signup/AssetImage/3596080.png")} style={styles.image}/>
    <Text style= {{fontSize: 30, padding:30, fontStyle:'normal', fontWeight: 'bold'}}>Register</Text>
    </View>
    <View style={styles.underline}>
    <TextInput placeholder ="Full Name" style={styles.placeholder}>Full Name</TextInput>
    <TextInput placeholder ="Email" style={styles.placeholder}>Email</TextInput>
    <TextInput placeholder ="Password" style={styles.placeholder}>Password</TextInput>
    <TextInput placeholder ="Mobile Number" style={styles.placeholder}>Mobile Number</TextInput>
    </View>
    <TouchableOpacity style={styles.btn} onPress={this.register}><Text>Register</Text></TouchableOpacity>
   <Text style={{fontSize:14}}>Already have an Account?Login here</Text>
  </View>
  )
}}
 
 
const styles = StyleSheet.create({
   TextInput: {
    height: 40,
    borderWidth: 1,
    borderColor:"black"
  },
  placeholder:{
    margin:12, 
    width:340,
    borderRadius:5,
    borderLeftColor:"white",
    borderRightColor:"white",
    borderTopColor:"white",
    textDecorationLine:"underline"
 },
 btn:{
  alignSelf: 'stretch',
  backgroundColor: '#01c853',
  padding: 10,
  margin:10,
  marginLeft:100,
  marginRight:100,
  alignItems: 'center'
},
image:{
  height:20,
  width:20,
  marginTop:50
}
});



    
    

export default App;
  

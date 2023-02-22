import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Hello() {
  return (
    // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <MaterialCommunityIcons name="home" color={'black'} size={100}/>
    </View>
    // </LinearGradient>

  )
}
const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:'white',
    },
    text:{
      color:'black',
        fontFamily:'Mynerve-Regular',
        fontSize:100,
        // fontStyle:'italic'
        
    }
})
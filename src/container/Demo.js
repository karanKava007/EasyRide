import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Demo({navigation}) {
  return (
    <View>
      <Text>Demo</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Hello')}>
      <Text style={{color:'black'}}>Next</Text>
    </TouchableOpacity>
    </View>
  )
}
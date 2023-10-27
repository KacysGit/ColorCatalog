import React from "react"
import {Text, View} from "react-native";
import {ActivityIndicator, Button} from "react-native"
// activity indicator creates a buffer indicator 

export default function App(){
  return (
    <View style={{padding:50}}>
      <Text> Hello World </Text>
      <Text> Red </Text>
      <Text> Blue </Text>
      <Button title="Click Me" />
      <ActivityIndicator size="large" color="61DBFB" />

    </View>
  )
}
import React, { useState } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import ColorButton from "./Components/ColorButton";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "blue"
  );
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="green" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="orange" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

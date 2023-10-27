import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default function App(){
  return (
    <View style={styles.page}>
      <Text style={styles.text}> Red </Text>
      <Text style={[styles.text, styles.selectedText]}> Green </Text>
      <Text style={styles.text}> Blue </Text>
    </View>
  );
}

// add styles
const styles = StyleSheet.create({
  // add margin at the top of the view
  page: {
    marginTop: 40,
    backgroundColor: "#DDD",
    margin: 10, 
    padding: 5
  },
  text: {
    fontSize: 22,
    color: "blue",
    backgroundColor: "grey",
    margin: 10, // the area around each text element
    padding: 5 // space to the inside of each text element
  },
  selectedText: {
    backgroundColor: "white",
    color: "black"
  }
})
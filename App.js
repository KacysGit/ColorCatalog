import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";

// import picture
import picDevil from "./assets/JasmanianDevil.jpg"
import jasmine from "./assets/Jasmine.jpg"

export default function App(){
  return (
    <View style={styles.page}>
      <Text style={styles.text}> Red </Text>
      <Text style={[styles.text, styles.selectedText]}> Green </Text>
      <Text style={styles.text}> Blue </Text>
      <Image style={styles.image} source={picDevil} />
      <Image style={styles.image} source={jasmine} />
    </View>
  );
}

// add styles
const styles = StyleSheet.create({
  // add margin at the top of the view
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around", // spaces the elements within a container
    alignItems: "flex-start",
    marginTop: 40,
    backgroundColor: "#DDD",
    margin: 10, 
    padding: 5
  },
  image: {
   // resizeMode: "center"
   flex: 1,
   borderRadius: 50,
   margin:10,
   width: Dimensions.get("window").width -10

  },
  text: {
    //flex: 1, // evenly distribute box across whole row
    fontSize: 22,
    textAlign: "center",
    color: "blue",
    backgroundColor: "grey",
    margin: 10, // the area around each text element
    padding: 5 // space to the inside of each text element
  },
  selectedText: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    color: "black"
  }
})
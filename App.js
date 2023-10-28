import React, { useState} from "react"; // useState is called a hook
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableHighlight 
        style={styles.button}
        onPress={() => setBackgroundColor("yellow")}
        underlayColor="orange"
      >
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor: "yellow"}]} />
          <Text> Yellow </Text>
        </View>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,.8" // .8 is transparency
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width:20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  }
});

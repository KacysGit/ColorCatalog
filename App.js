import React, { useState } from "react";
import {
  FlatList, // scrollable list of content
  StyleSheet,
  Alert
} from "react-native";
import ColorButton from "./Components/ColorButton";
import defaultColors from "./data/defaultColors.json"
import ColorForm from "./Components/ColorForm"

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "blue"
  );
  return (
    <>
      <ColorForm onNewColor={newColor => Alert.alert(`TODO: add color ${newColor}`)}
      />
      <FlatList style={[styles.container, { backgroundColor }]}
        data={defaultColors}
        renderItem={({ item }) => {
          return (
            <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor} />
          ) // the key property is always required by react when working with lists
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  }
});

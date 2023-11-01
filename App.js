import React, { useState } from "react";
import {
  FlatList, // scrollable list of content
  StyleSheet
} from "react-native";
import ColorButton from "./Components/ColorButton";
import defaultColors from "./data/defaultColors.json"


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "blue"
  );
  return (
    <FlatList style={[styles.container, { backgroundColor }]}
      data={defaultColors}
      renderItem={({ item }) => {
        return (
          <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor} />
        ) // the key property is always required by react when working with lists
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  }
});

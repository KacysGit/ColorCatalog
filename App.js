import React, { useState } from "react";
import {
  FlatList, // scrollable list of content
  StyleSheet
} from "react-native";
import ColorButton from "./Components/ColorButton";
import ColorForm from "./Components/ColorForm"
import {generate} from "shortid";

const useColors = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = {id: generate(), color}
    setColors([newColor, ...colors]); // ... takes all the colors in the array and adds them to the end of the new array
  };
  return {colors, addColor}
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "blue"
  );
  const {colors, addColor} = useColors();
  
  return (
    <>
      <ColorForm onNewColor={addColor}/>
      <FlatList style={[styles.container, { backgroundColor }]}
        data={colors}
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

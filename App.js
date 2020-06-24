import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Header from "./components/Header";
import ListItem from './components/ListItem';

const App = () => {

  const genId = () => {
    return Math.floor(Math.random()*10000000)
  }

  const [items, setItems] = useState([
    {
      id: genId(),
      text: "Milk",
    },
    {
      id: genId(),
      text: "Cheese",
    },
    {
      id: genId(),
      text: "Eggs",
    },
    {
      id: genId(),
      text: "Juice",
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item = {item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

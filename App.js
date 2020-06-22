import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Header from "./components/Header";
import ListItem from './components/ListItem';
import { uuid } from "uuidv4";

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: "Milk",
    },
    {
      id: uuid(),
      text: "Cheese",
    },
    {
      id: uuid(),
      text: "Eggs",
    },
    {
      id: uuid(),
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

import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, FlatList, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const genId = () => {
    return Math.floor(Math.random() * 10000000);
  };

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

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (item) => {
    let found = items.find((element) => element.text === item);

    if (!item) {
      Alert.alert("Error", "Please enter an item", { text: "Ok" });
    } else if (found) {
      Alert.alert("Error", "Item already exists", { text: "Ok" });
    } else {
      setItems((prevItems) => {
        return [...prevItems, { id: genId(), text: item }];
      });
    }
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title="Shopping List" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

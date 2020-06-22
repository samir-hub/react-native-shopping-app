import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {},
});

export default ListItem;

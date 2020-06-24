import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title}) => {
  return (
    <View>
        <TextInput placeholder="Add Item..." style={styles.input}/>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}><Icon name="plus" size={20} />Add Item</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
      height: 60, 
      padding: 8, 
      fontSize: 16
  },
  btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5
  },
  btnText: {
      
  }
});

export default AddItem;

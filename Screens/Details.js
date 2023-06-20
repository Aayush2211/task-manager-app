import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
  const navigation = useNavigation();

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          alert("Updated Successfully!");
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Textfield cannot be empty!");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update TODO</Text>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update TODO"
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          updateTodo();
        }}
      >
        <Text>Update TODO</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
  textField: {
    marginBottom: 10,
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonUpdate: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#788eec",
  },
  heading: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center",
    backgroundColor: "#788eec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 15,
  },
});

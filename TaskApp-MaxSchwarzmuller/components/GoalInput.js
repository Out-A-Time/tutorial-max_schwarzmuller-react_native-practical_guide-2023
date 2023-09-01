import {
  View,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import React from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function handleGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function handleCancel() {
    props.onCancel();
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          value={enteredGoalText}
          onChangeText={handleGoalInput}
          placeholder="Add your task here"
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonAdd}>
            <Button onPress={addGoalHandler} title="Add task" color="#b180f0" />
          </View>
          <View style={styles.buttonCancel}>
            <Button onPress={handleCancel} title="Cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "90%",
    // marginRight: 2,
    padding: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonAdd: {
    width: "40%",
    marginHorizontal: 8,
  },
  buttonCancel: {
    width: "20%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    // borderColor: "black",
    // borderWidth: 1,
  },
});

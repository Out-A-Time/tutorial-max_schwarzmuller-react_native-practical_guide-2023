import { View, Text, TextInput, Button, StyleSheet } from "react-native";
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

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        onChangeText={handleGoalInput}
        placeholder="Add your task here"
        style={styles.textInput}
      />
      <Button onPress={addGoalHandler} title="Add task" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    // marginRight: 2,
    padding: 8,
  },
});

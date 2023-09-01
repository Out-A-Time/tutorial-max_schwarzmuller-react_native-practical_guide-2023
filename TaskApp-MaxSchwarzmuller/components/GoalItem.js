import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  //bind() pre-configure the function for future execution
  // 'this' doesn't matter in this case, just id is important
  //style/pressedItem is for effect on iOS
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

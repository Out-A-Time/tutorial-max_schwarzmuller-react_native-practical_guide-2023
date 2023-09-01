import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#fff",
  },
});

import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function handleGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    console.log("you are adding: ", enteredGoalText);
    console.log(courseGoals);

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={handleGoalInput}
          placeholder="Add your task here"
          style={styles.textInput}
        />
        <Button onPress={handleAddGoal} title="Add task" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of tasks:</Text>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
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

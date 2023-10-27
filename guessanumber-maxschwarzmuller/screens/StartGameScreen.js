import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
    console.log("HERE ", enteredText, enteredNumber);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert("Invalid number", "Please enter a number between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    console.log("Valid number, add more game logic later");
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressButton={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressButton={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    // Android only
    elevation: 5,
    // iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

// Dimensions.get("screen" or "window") - on iOS makes no difference.
// On Android "screen" is the entire height/width of the screen including status bar
// "window" is the entire height/width excluding status bar
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 20 : 36,
    color: Colors.accent500,
  },
});

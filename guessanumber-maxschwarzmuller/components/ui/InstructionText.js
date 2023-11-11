import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children, styleProp }) => {
  //overwriting style properties with styleProp, it is imitating cascading behavior
  return <Text style={[styles.instructionText, styleProp]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});

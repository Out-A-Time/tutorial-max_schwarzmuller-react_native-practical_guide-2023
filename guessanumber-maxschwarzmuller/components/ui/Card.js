import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 5 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android only
    elevation: 5,
    // iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

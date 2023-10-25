import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressButton }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressButton}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressediOS]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressediOS: {
    opacity: 0.75,
  },
});

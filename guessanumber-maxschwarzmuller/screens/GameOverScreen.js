import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y</Text>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

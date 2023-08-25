import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>Another text1</Text>
        <Text style={styles.headerText}>Another text2</Text>
      </View>
      <Text>"hello_world"</Text>
      <Text
        style={{
          backgroundColor: "green",
          padding: 10,
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        I'm inline styling that has background color green
      </Text>
      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    padding: 10,
    backgroundColor: "pink",
  },
  headerText: {
    padding: 10,
    backgroundColor: "yellow",
  },
});

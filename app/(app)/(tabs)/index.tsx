import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/messages/adonis" style={styles.text}>
        I am Adons
      </Link>
      <Link href="/messages/chardonay" style={styles.text}>
        I am Chardonnay
      </Link>

      <Link href="/profile" style={styles.text}>
        Profile
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

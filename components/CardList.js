import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import Card_front from "./card_front";
const data = require("../data.json");
export default function CardList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList data={data} contentContainerStyle={{
        paddingTop: 20,
        flexGrow: 1,
      }} renderItem={({ item }) => (
        <View style={styles.card}>
          <Card_front data={item} onPress={() => navigation.push("Details", {
            id: item.Name,
          })
          }
          />
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    paddingTop: 30,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import Card_front from "./card_front";
const data = require("../data.json");
export default function CardList({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FlatList data={data} contentContainerStyle={{
          paddingTop: 20,
          flexGrow: 1,
        }} renderItem={({ item }) => (
          <View style={styles.card}>
            <Card_front data={item} onPress={() => navigation.push("地點資訊", {
              id: item.Name,
            })
            }
            />
          </View>
        )} />
      </View>
    </TouchableWithoutFeedback>
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

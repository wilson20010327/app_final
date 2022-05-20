import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import CardList from "./components/CardList";
import Card_Navigation from "./routes/card";

export default function App() {
  return (
    <Card_Navigation/>
    
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
    paddingTop:30,
    paddingBottom:20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

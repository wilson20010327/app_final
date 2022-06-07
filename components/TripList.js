import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import Card_front from "./card_front";
var data = require("../data.json");
export default function TripList({ route, navigation }) {
  data = route.params.data
  return (
    <View style={styles.container}>
      <FlatList data={data} contentContainerStyle={{
        paddingTop: 20,
        flexGrow: 1,
      }} renderItem={({ item }) => (<View>
        
        <View style={styles.card}>
          <Text style={styles.type}>{""+item.type}</Text>
          <Card_front data={item} onPress={() => navigation.push("地點資訊", {
            id: item.Name,
          })
          }
          />
        </View>
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
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  type:{
    width:"90%",
    //backgroundColor:'pink',
    paddingTop:5,
    textAlign:'right',
    color:'black',
    fontWeight:'bold',
    textShadowColor:'#C0C0C0',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
  }
});

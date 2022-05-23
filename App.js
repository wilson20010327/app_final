import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons,MaterialIcons  } from '@expo/vector-icons'; 
import Card_Navigation from "./routes/card";
import Map from "./routes/map";
import Trip from "./routes/trip";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Map') {
              iconName = focused
                ? 'ios-map'
                : 'ios-map-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Item') {
              iconName = focused ? 'map-marker-multiple' : 'map-marker-multiple-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color}  />
            }
            else if(route.name === 'Trip'){
              iconName = focused ? 'tour' : 'tour';
              return <MaterialIcons  name={iconName} size={size} color={color}  />
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Map" component={Map} options={{ headerShown: false } } />
        <Tab.Screen name="Item" component={Card_Navigation} options={{ headerShown: false }} />
        <Tab.Screen name="Trip" component={Trip} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
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

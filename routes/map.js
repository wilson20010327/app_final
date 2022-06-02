import Map_card from "../components/Map_card";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function Map() {
    return (
    <Stack.Navigator initialRouteName="CardList">
        <Stack.Screen name="地點清單" component={Map_card} options={{ headerShown: false } }/>
    </Stack.Navigator>
    );
}

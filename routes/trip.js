import Card_back from "../components/card back";
import TripList from "../components/TripList"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Card_Navigation() {
    return (
        <Stack.Navigator initialRouteName="CardList">
            <Stack.Screen name="地點清單" component={TripList} options={{ headerShown: false } }/>
            <Stack.Screen name="地點資訊" component={Card_back}/>
        </Stack.Navigator>


    );
}

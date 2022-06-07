import Card_back from "../components/card back";
import TripSearch from "../components/TripSearch"
import TripList from "../components/TripList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Card_Navigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="地點搜尋" component={TripSearch} options={{ headerShown: false } }/>
            <Stack.Screen name="地點列表" component={TripList}/>
            <Stack.Screen name="地點資訊" component={Card_back}/>
        </Stack.Navigator>


    );
}

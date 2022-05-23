import Card_back from "../components/card back";
import CardList from "../components/CardList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Card_Navigation() {
    return (
        <Stack.Navigator initialRouteName="CardList">
            <Stack.Screen name="地點清單" component={CardList} />
            <Stack.Screen name="地點資訊" component={Card_back} />
        </Stack.Navigator>


    );
}

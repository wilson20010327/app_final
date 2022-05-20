import Card_back from "../components/card back";
import CardList from "../components/CardList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Card_Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CardList">
                <Stack.Screen name="CardList" component={CardList} />
                <Stack.Screen name="Details" component={Card_back} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

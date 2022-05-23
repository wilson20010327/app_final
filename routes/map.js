import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import PagerView from 'react-native-pager-view';
export default function Map() {
    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View style={styles.container} key="1">
                <Text>First page</Text>
            </View>
            <View style={styles.container} key="2">
                <Text>Second page</Text>
            </View>
        </PagerView>
    );
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
       
    },
    container: {
        flex: 1,
        backgroundColor: "pink",
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
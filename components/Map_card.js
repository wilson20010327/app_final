import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { Image } from 'react-native'
import PagerView from 'react-native-pager-view';
export default function Map_card({navigation}) {
    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View style={styles.container} key="1">
                <Image  style={styles.pagerView} source={require('../assets/map_L.jpg')}/>
            </View>
            <View style={styles.container} key="2">
            <Image style={styles.pagerView} source={require('../assets/map_M.jpg')}/>
            </View>
            <View style={styles.container} key="3">
            <Image style={styles.pagerView} source={require('../assets/map_R.jpg')}/>
            </View>
        </PagerView>
    );
}

const styles = StyleSheet.create({
    pagerView: {
        width:'100%',
        flex: 1,
    },
    container: {
        flex: 1,
        
        backgroundColor:'#E9E5DB',
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
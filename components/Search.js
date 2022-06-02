import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList } from 'react-native';
import Card_front from "./card_front";
const data = require("../data.json");

const distinct = (value, idx, self) => {
    return self.indexOf(value) === idx;
}

function search_in_data(text) {
    let result = []
    for (let i = 0; i < data.length; ++i) {
        let str = data[i].Name;
        let idx = str.indexOf(text);
        if (idx != -1) result.push(i);
    }
    for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[i].nickname.length; j++) {
            let str = data[i].nickname[j];
            let idx = str.indexOf(text);
            if (idx != -1) result.push(i);
        }
    }
    for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[i].tag.length; j++) {
            let str = data[i].tag[j];
            let idx = str.indexOf(text);
            if (idx != -1) result.push(i);
        }
    }
    for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[i].type.length; j++) {
            let str = data[i].type[j];
            let idx = str.indexOf(text);
            if (idx != -1) result.push(i);
        }
    }
    for (let i = 0; i < data.length; ++i) {
        let str = data[i].location;
        let idx = str.indexOf(text);
        if (idx != -1) result.push(i);
    }
    for (let i = 0; i < data.length; ++i) {
        let str = data[i].description;
        let idx = str.indexOf(text);
        if (idx != -1) result.push(i);
    }
    result = result.filter(distinct);
    let result_array = []
    for (let i = 0; i < result.length; ++i) {
        result_array.push(data[result[i]]);
        console.log(data[result[i]])
    }
    return result_array;
}


export default function CardList({navigation}) {
    const [Input,SetInput]=React.useState (data)
    let search_result = [];
    let search_text = "";
    const setSearch = (val) => {
        search_text = val;
    }
    const onPress = () => {
        //console.log("Typed :", search_text);
        search_result = search_in_data(search_text);
        SetInput(search_result);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' ,paddingTop:50}}>
                <TextInput
                    style={styles.search_box}
                    onChangeText={(val) => setSearch(val)}
                    placeholder={"Search Text"}
                />
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.search_button}>
                        <Text style={{ color: 'white' }}>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <FlatList data={Input} contentContainerStyle={{
                paddingTop: 20,
                flexGrow: 1,
            }} renderItem={({ item }) => (
                <View style={styles.card}>
                    <Card_front data={item} onPress={() => navigation.push("地點資訊", {
                        id: item.Name,
                    })
                    }
                    />
                </View>
            )} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search_box: {
        width: "70%",
        padding: 10,
    },
    search_button: {
        alignItems: "center",
        backgroundColor: "#88b",
        padding: 10,
    },
    result_box: {
        width: '100%',
        height: '70%',
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

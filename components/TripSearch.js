import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList } from 'react-native';
import Card_front from "./card_front";
import SelectDropdown from 'react-native-select-dropdown'

const data = require("../data.json");
const tags = ["-- Select Here --", "美食之旅", "五妃廟", "台南孔廟", "綜合"]

const distinct = (value, idx, self) => {
  return self.indexOf(value) === idx;
}

function range(start, end) {
  return Array(end - start).fill().map((_, idx) => start + idx)
}

const chooseRandom = (pickfrom, store_in) => {
  if (pickfrom.length == 0) return store_in;
  let idxs = range(0, pickfrom.length);
  idxs = idxs.sort((a, b) => 0.5 - Math.random());
  for (let i = 0; i < idxs.length; i++) {
    if (store_in.indexOf(pickfrom[idxs[i]]) == -1) {
      store_in.push(pickfrom[idxs[i]]);
      break;
    }
  }
  return store_in;
};

function search_in_data_or(keywords) {
  let keyword = keywords.split(" ")
  let result = []
  for (let k = 0; k < keyword.length; k++) {
    let text = keyword[k];
    for (let i = 0; i < data.length; i++) {
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
  }
  result = result.filter(distinct);
  console.log(result);
  let result_array = []
  for (let i = 0; i < result.length; ++i)
    result_array.push(data[result[i]]);
  return result_array;
}

function search_in_type(keyword, subdata) {
  let text = keyword;
  let result_array = []
  for (let i = 0; i < subdata.length; ++i) {
    for (let j = 0; j < subdata[i].type.length; j++) {
      let str = subdata[i].type[j];
      let idx = str.indexOf(text);
      if (idx != -1) result_array.push(subdata[i]);
    }
  }
  return result_array;
}

export default function TripSearch({ navigation }) {
  let search_result = [];
  let route_result = [];
  let search_text = "";
  const [Input, SetInput] = React.useState(data)
  const SearchClick = (val) => {
    if (val != null) {
      navigation.push("地點列表", {
        data: val,
      });
    }
  }
  const setSearch = (val) => {
    search_text = val;
  }

  const onPress = () => {
    console.log("Typed :", search_text);
    search_result = search_in_data(search_text);
    search_text = search_text;
    console.log("Typed :", search_text);
  };


  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <SelectDropdown
          data={tags}
          defaultValueByIndex={0}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            route_result = []
            let subdata = [];
            if (index == 0) subdata = data
            else {
              // "-- Select Here --", "美食之旅", "五妃廟", "台南孔廟", "綜合"
              let keyword = ""
              switch (index) {
                case 1: keyword = "美食"; break;
                case 2: keyword = "五妃"; break;
                case 3: keyword = "孔廟 開山 府中"; break;
                case 4: keyword = "景點"; break;
                default: keyword = selectedItem; break;
              }
              subdata = search_in_data_or(keyword)
              if (index == 4) {
                route_result = chooseRandom(subdata, route_result);
                subdata = search_in_data_or("美食");
              }
              let break_first, snack, lunch, dinner, night_snack;
              break_first = search_in_type("早餐", subdata)
              lunch = search_in_type("午餐", subdata)
              snack = search_in_type("下午茶", subdata)
              dinner = search_in_type("晚餐", subdata)
              night_snack = search_in_type("宵夜", subdata)
              if (index == 2 || index == 3) route_result.push(subdata[0])
              route_result = chooseRandom(break_first, route_result)
              route_result = chooseRandom(lunch, route_result)
              route_result = chooseRandom(snack, route_result)
              route_result = chooseRandom(dinner, route_result)
              route_result = chooseRandom(night_snack, route_result)

            }
            if (index == 4 ||index == 3 ||index == 2||index == 1) {
              SearchClick(route_result);
              console.log(route_result)
              console.log("len :", route_result.length)
            }


          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          buttonTextStyle={{ color: 'white', fontSize: 20 }}
          buttonStyle={styles.search_button}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
      </View>
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
  search_button: {
    alignItems: "center",
    backgroundColor: "#88b",
    padding: 10,
    borderRadius: "8px",
  },
});
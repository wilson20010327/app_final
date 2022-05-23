import ImagedCardView from "react-native-imaged-card-view";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useState } from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
const data = require("../data.json");
export default function Card_back({ route, navigation }) {
  const { id } = route.params;
  const data_filter = data.filter((x) => x.Name === id);
  const subtitle = id + "\n" + "開放時間0:00 ~ 24:00";
  return (
    <View style={styles.container}>
      {data_filter.map((item) => (
        <Card>
          <CardImage
            source={{ uri: item.img_path }}
            title={""+item.type}
          />
          <CardTitle title={item.Name} subtitle={item.location+"\n開放時間"+item.opentime+" ~ "+item.closetime} />
          <CardTitle
            subtitle={"tag : "+item.tag}
            style={{
              flex: 0.1,
              width: "100%",
              backgroundColor: "#eee",
              borderStyle: "dotted", // 虚线 效果
              borderWidth: 0.75, //虚线 线宽
              borderColor: "#e8e8e8", // 虚线颜色
              borderTopLeftRadius: 20, //设置 圆角
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />

          <CardContent text={item.description} />
        </Card>
      ))}
    </View>
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
    width: Dimensions.get("window").width - 20,
    height: 150,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 20,
  },
  Content_order: {
    flex: 1,
    flexDirection: "row",
  },
  Content_pic: {
    flex: 1,
    backgroundColor: "red",
  },
  Content: {
    flex: 2,
    backgroundColor: "pink",
  },
  title_font: {
    fontSize: 30,
  },
});

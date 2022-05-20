import ImagedCardView from "react-native-imaged-card-view";
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const Card_front = ({ data,onPress} ) => {
  return (
    <View >
    <ImagedCardView
        stars={5}
        ratings={data.star}
        title={data.Name}
        rightSideValue={data.closetime}
        subtitle={data.location}
        leftSideValue={data.opentime}
        backgroundColor="#ff6460"
        source={{url:data.img_path}}
        onPress={onPress}
      />
      </View>
  );
}
export default Card_front;
const styles = StyleSheet.create({
 
});
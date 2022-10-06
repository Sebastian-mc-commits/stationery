import React from "react";
import { View, Text, FlatList } from "react-native";
import { Item } from "../../constants/data";
import { ItemsStationery } from "../../components";
import { styles } from "./style";

const StationeryItem = ({ route }) => {

  const { name, idI } = route.params;

  const content = Item.find((item) => item.idI === idI);

  return (

    <View style={styles.container}>
      <ItemsStationery name={name} item={content} />
    </View>
  );
}
export default StationeryItem;
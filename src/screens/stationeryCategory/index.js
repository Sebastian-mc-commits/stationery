import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Search, SourceStationery } from "../../components";
import { Category } from "../../constants/data";
import { styles } from "./style";

const StationeryCategory = ({ navigation, route }) => {

  const [filterListSearch, setFilterListSearch] = useState([]);

  const filterSearch = (content) => {

    setFilterListSearch(content);
  }

  const onSelected = (item) => navigation.navigate("StationeryItems", { name: item.name, idC: item.id, background: item.background });

  const renderItem = ({ item }) => (

    <SourceStationery item={item} onSelected={onSelected}>

      {/*<Image
        source={require("../../../assets/images/" + item.image)}
        style={{ width: "95%", height: "80%", opacity: 0.7 }}
        blurRadius />*/}
        <Text>Image no working, whyy?</Text>
    </SourceStationery>
  );
  return (

    <View style={styles.container}>

      <Search dataList={Category} filterSearch={filterSearch} />
      <FlatList

        data={filterListSearch.length > 0 ? filterListSearch : Category}
        renderItem={renderItem}
        keyExtractor={content => content.id}
        style={styles.container} />
    </View>
  );
}
export default StationeryCategory;
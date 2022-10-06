import React from "react";
import { View, Text } from "react-native";
import Card from "../card";
import { styles } from "./style";

const ItemsStationery = ({ name, item }) => {
    return (

        <View style={styles.container}>

            <Card style={styles.card}>
                <Text>{name}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.color}</Text>
            </Card>
        </View>
    );
}
export default ItemsStationery;
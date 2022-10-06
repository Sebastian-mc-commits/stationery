import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Card from "../card";
import { styles } from "./style";

const SourceStationery = ({ item, onSelected, children }) => {
    return (

        <View style={styles.container}>

            <Card style={{...styles.contentTitle, backgroundColor: item.background}}>

                {children}

                <TouchableOpacity onPress={() => onSelected(item)}>
                    <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
            </Card>
        </View>
    );
}
export default SourceStationery;
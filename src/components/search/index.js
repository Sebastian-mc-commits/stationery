import React,{ useState } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const Search = ({ dataList, filterSearch }) => {

    const [textInput, setTextInput] = useState("");
    const [activeInput, setActiveInput] = useState(false);


    const onHandleText = (text) => {

        const filterList = dataList.filter((item) => {

            return item.name.toLowerCase().includes(text);
        });

        filterSearch(filterList);
        return setTextInput(text);
    }

    return (

        <View style={styles.container}>

            {activeInput && <TextInput
                value={textInput}
                onChangeText={(text) => onHandleText(text)}
                style={styles.input}
                autoCapitalize="none"
            />}

            <Ionicons
                name="search"
                size={22}
                color="black"
                onPress={() => setActiveInput(!activeInput)} />

        </View>
    );
}
export default Search;
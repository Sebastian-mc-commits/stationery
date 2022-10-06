import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({

    container: {

        height: 130,
        marginVertical: "3%",
        marginHorizontal: 30,
    },

    contentTitle: {

        justifyContent: "center",
        alignItems: "center",
        padding: width * 0.04,
        flex: 1,
    },
    
    title: {

        fontSize: 20
    }
});
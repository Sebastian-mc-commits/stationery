import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("screen");
export const styles = StyleSheet.create({

    container: {

        flexDirection: "row",
        marginVertical: width * 0.04,
        alignItems: "center",
        justifyContent: "center"
    },

    input: {

        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: width * 0.5
    }
});
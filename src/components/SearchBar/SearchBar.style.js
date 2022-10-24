import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    input: {
        height: 45,
        width: Dimensions.get("window").width / 1.15,
        borderWidth: 0.5,
        margin: 25,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
        backgroundColor: "#f5f5ee",
        borderColor: "#f5f5ee",
    }
})
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        width: Dimensions.get("window").width / 2.2,
        flex: 1,
        backgroundColor: "#E1E7E7",
    },
    image: {
        height: 250,
        width: Dimensions.get("window").width/2.5,
        resizeMode: "contain",
        overflow: "visible",
        /* margin: 10, */
        alignSelf: "center",
        borderColor: "white",
        borderWidth: 0.5,
        borderRadius: 10,
    },
    item:
    {
        margin: 10
    },
    text: {
        padding: 10,
        paddingBottom: 3,
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
        flexWrap: "wrap",
    },
    price: {
        padding: 10,
        paddingTop: 3, 
        fontSize: 14,
        fontWeight: "300",
    },
    stock: {
        color: "red",
        fontSize: 16,
        margin: 10,
        
        
    }
})

export default styles;
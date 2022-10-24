import React from "react";
import { TextInput, View } from "react-native";
import styles from "./SearchBar.style";

function Search() {
    return(
        <View>
            <TextInput placeholder="Ara..." style={styles.input}/>
        </View>
    )
}

export default Search;
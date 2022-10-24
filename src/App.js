import React from "react";
import { FlatList, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import product_data from "./product_data.json";

function App() {
  if (Platform.OS === "android"){
    const notch = StatusBar.currentHeight > 24;
  };
  const renderProduct = ({item}) => <ProductCard product={item} />
  return(
    <View>
      <StatusBar></StatusBar>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar/>
      <FlatList
        contentContainerStyle={{paddingBottom: 200}}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={product_data}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 25,
  },
});

export default App;
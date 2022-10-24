import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({product}) => {
    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Image style={styles.image}source={{uri: product.imgURL}}/>
                
            </View> 
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.stock}>{product.inStock === true ? "" : "STOKTA YOK"}</Text>
        </View>
        
    );
};

export default ProductCard;
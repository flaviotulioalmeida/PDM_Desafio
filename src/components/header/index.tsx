import React from "react";
import { View, Text, Image } from "react-native";
import imagemHeader from "../../assets/burger-home.png";
import styles from "./style";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={imagemHeader} style={styles.headerImage} />
      <Text style={styles.headerText}>IFPB-Delivery</Text>
    </View>
  );
};

export default Header;

import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ItemCardProps {
  itemImage: ImageSourcePropType; 
  itemName: string;
  itemPrice: string;
}

const CardItem: React.FC<ItemCardProps> = ({ itemImage, itemName, itemPrice }) => {
  return (
    <View style={styles.card}>
      <Image source={itemImage} style={styles.image} />

      <Text style={styles.itemName}>{itemName}</Text>

      <Text style={styles.itemPrice}>R$ {itemPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    margin: 10,
    width: 150, 
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default CardItem;

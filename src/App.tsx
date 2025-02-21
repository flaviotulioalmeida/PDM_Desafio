import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardItem from './components/CardItem';
import imagem from './assets/burger-home.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <CardItem itemImage={imagem} itemName='teste' itemPrice='123'  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

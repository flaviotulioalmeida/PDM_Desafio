import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const BurgerInput: React.FC = () => {
  const [burgerName, setBurgerName] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Imagem ao lado do Input */}
      <Image
        source={require('../../assets/Frame.png')} // Caminho da imagem
        style={styles.image}
      />
      {/* Campo de Entrada */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Burger"
        value={burgerName}
        onChangeText={setBurgerName}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinha a imagem e o input horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 24, // Largura da imagem
    height: 24, // Altura da imagem
    marginRight: 10, // Espaço entre a imagem e o input
  },
  input: {
    flex: 1, // Ocupa o espaço restante
    fontSize: 16,
  },
});

export default BurgerInput;
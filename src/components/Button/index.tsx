import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
  outlined?: boolean; // Nova propriedade para definir o estilo do botão
};

const ButtonSolid: React.FC<ButtonProps> = ({ title, onPress, color = '#4CAF50', outlined = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outlined
          ? { backgroundColor: 'white', borderColor: color, borderWidth: 2 }
          : { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, outlined ? { color: color } : { color: 'white' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonSolid;
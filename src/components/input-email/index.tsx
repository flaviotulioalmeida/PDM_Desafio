import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const EmailInput = ({ placeholder = "Digite seu e-mail" }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    padding: 10,
  },
});

export { EmailInput };

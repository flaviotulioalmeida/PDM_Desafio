import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('Fábio Abrantes Diniz');
  const [email, setEmail] = useState('fad@email.com');
  const [password, setPassword] = useState('nova senha');
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => {
    // Implementar navegação de volta
  };

  const handleUpload = () => {
    // Implementar lógica de upload
  };

  const handleEdit = () => {
    // Implementar lógica de edição
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Feather name="arrow-left" size={24} color="#FF8C00" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <View style={styles.imageContainer}>
            <Feather name="user" size={50} color="#999" />
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nome"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.passwordIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Feather 
                name={showPassword ? "eye" : "eye-off"} 
                size={20} 
                color="#999" 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.uploadText}>Upload da imagem</Text>
            <TouchableOpacity 
              style={styles.uploadButton}
              onPress={handleUpload}
            >
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.editButton}
            onPress={handleEdit}
          >
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
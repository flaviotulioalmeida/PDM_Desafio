import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { EmailInput } from '../components/input-email/index';
import { PasswordInput } from '../components/input-senha/index';
import React, { useState } from 'react';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#F5A623" />
            </TouchableOpacity>

            <Text style={styles.title}>
                IFPB <Text style={styles.highlight}>•</Text> Delivery
            </Text>

            <Text style={styles.subtitle}>
                Use suas credenciais para realizar o login.
            </Text>

            <View style={styles.separator} />

            <EmailInput value={email} onChangeText={setEmail} />
            <PasswordInput value={senha} onChangeText={setSenha} />

            <View style={styles.separator} />

            <TouchableOpacity>
                <Text>Esqueceu sua senha? </Text>
                <Text style={styles.link}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    highlight: {
        color: '#F5A623',
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 10,
    },
    separator: {
        height: 20,
    },
    link: {
        color: '#F5A623',
        textDecorationLine: 'underline',
    },
});

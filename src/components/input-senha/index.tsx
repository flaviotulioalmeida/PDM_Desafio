import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';


const PasswordInput = ({ placeholder = "Digite sua senha" }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!isPasswordVisible}
                style={styles.input}
                placeholderTextColor="#A0A0A0"
            />
            <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.icon}
            >
                {isPasswordVisible ? <EyeOff size={20} color="#A0A0A0" /> : <Eye size={20} color="#A0A0A0" />}
            </TouchableOpacity>
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

export { PasswordInput };
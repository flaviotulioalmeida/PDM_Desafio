import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/register_schema";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity style={styles.backArrow}>
        <Feather name="arrow-left" size={24} color="#FF8C00" />
      </TouchableOpacity>

      <View style={styles.logo}>
        <Text style={styles.logoText}>
          IFPB<Text style={styles.dot}>•</Text>Delivery
        </Text>
      </View>

      <View style={styles.formHeader}>
        <Text style={styles.headerText}>Preencha os campos</Text>
        <Text style={styles.headerText}>para criar o seu cadastro.</Text>
      </View>

      <View style={styles.registerForm}>
        <View style={styles.formGroup}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.formInput, errors.name && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.errorMessage}>{errors.name.message}</Text>
          )}
        </View>

        <View style={styles.formGroup}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.formInput, errors.email && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorMessage}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.formGroup}>
          <View style={styles.passwordGroup}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.formInput,
                    errors.password && styles.inputError,
                  ]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                />
              )}
              name="password"
            />
            <TouchableOpacity
              style={styles.passwordToggle}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.errorMessage}>{errors.password.message}</Text>
          )}
        </View>
      </View>

      <View style={styles.loginLink}>
        <Text style={styles.loginText}>
          Já tem cadastro? <Text style={styles.loginLinkText}>Fazer Login</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  backArrow: {
    marginBottom: 32,
  },
  logo: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    color: "#FF8C00",
    marginHorizontal: 2,
  },
  formHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerText: {
    color: "#333",
    lineHeight: 24,
  },
  registerForm: {
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  formInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  inputError: {
    backgroundColor: "#FFF0F0",
    borderWidth: 1,
    borderColor: "#FF4444",
  },
  errorMessage: {
    color: "#FF4444",
    fontSize: 12,
    marginTop: 4,
  },
  passwordGroup: {
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    color: "#333",
  },
  loginLinkText: {
    color: "#FF8C00",
    fontWeight: "500",
  },
});

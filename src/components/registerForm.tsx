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
import { useNavigation } from "@react-navigation/native";
import ButtonSolid from "./Button/index";

type Props = {
  onSubmit: (data: RegisterFormData) => void;
};

export default function RegisterForm({ onSubmit }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.goBack()}
      >
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
          <View style={styles.passwordContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.passwordInput,
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

      <ButtonSolid
        title="Cadastrar"
        onPress={handleSubmit(onSubmit)}
        color="#FF8C00"
      />

      <View style={styles.loginLink}>
        <Text style={styles.loginText}>
          Já tem cadastro?{" "}
          <Text
            style={styles.loginLinkText}
            onPress={() => navigation.navigate("Login" as never)}
          >
            Fazer Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
    color: "#333",
  },
  dot: {
    color: "#FF8C00",
  },
  formHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerText: {
    fontSize: 16,
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
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#333",
  },
  passwordToggle: {
    padding: 16,
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
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    color: "#333",
    fontSize: 14,
  },
  loginLinkText: {
    color: "#FF8C00",
    fontWeight: "500",
  },
});

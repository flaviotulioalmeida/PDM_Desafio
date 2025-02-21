import { z } from "zod"

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "Nome deve ter no máximo 50 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
    .max(50, { message: "Senha deve ter no máximo 50 caracteres" }),
})

export type RegisterFormData = z.infer<typeof registerSchema>


"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<ContactResult> {
  try {
    const validatedData = contactFormSchema.parse(data);

    console.log("Mock contact form submission:", validatedData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error: any) {
    console.error("Erro ao enviar email de contato:", error);

    if (error.name === "ZodError") {
      return {
        success: false,
        error: error.errors[0]?.message || "Dados inválidos",
      };
    }

    return {
      success: false,
      error: "Erro ao enviar mensagem. Tente novamente.",
    };
  }
}

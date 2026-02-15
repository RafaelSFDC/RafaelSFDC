"use server";

import {
  newsletterSubscriptionSchema,
  type NewsletterSubscription,
} from "@/schemas/newsletter";

export interface SubscribeResult {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}

/**
 * Inscreve um usuário na newsletter (MOCK)
 * @param data Dados de inscrição (name, email, source)
 * @returns Resultado da operação
 */
export async function subscribeToNewsletter(
  data: NewsletterSubscription,
): Promise<SubscribeResult> {
  try {
    // Validar dados
    const validatedData = newsletterSubscriptionSchema.parse(data);

    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Mock subscription:", validatedData);

    return {
      success: true,
      message: "Inscrição realizada com sucesso! Aproveite o conteúdo.",
    };
  } catch (error: any) {
    console.error("Erro ao inscrever na newsletter:", error);

    if (error.name === "ZodError") {
      return {
        success: false,
        message: error.errors[0]?.message || "Dados inválidos",
      };
    }

    return {
      success: false,
      message: "Erro ao processar inscrição. Tente novamente.",
    };
  }
}

/**
 * Verifica se um email já está inscrito na newsletter (MOCK)
 * @param email Email para verificar
 * @returns true se já está inscrito, false caso contrário
 */
export async function checkNewsletterStatus(email: string): Promise<boolean> {
  // Sempre retorna falso no mock para permitir testar a inscrição
  return false;
}

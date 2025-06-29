"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validar os dados
    const validatedData = contactSchema.parse(formData)

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>", // Use seu domínio verificado
      to: ["rafaelsfdc@gmail.com"], // Seu email
      subject: `Nova mensagem de ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Nova mensagem do portfólio</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Erro ao enviar email:", error)
      return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Erro na validação ou envio:", error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors[0].message 
      }
    }
    
    return { 
      success: false, 
      error: "Erro interno. Tente novamente mais tarde." 
    }
  }
}

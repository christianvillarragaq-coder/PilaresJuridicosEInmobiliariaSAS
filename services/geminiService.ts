import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string, context: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY no configurada en los Secrets de GitHub.");
    return "Hola. Mi sistema de IA requiere una configuración técnica adicional (API_KEY) para responderte. Por ahora, puedes contactarnos directamente por WhatsApp.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Eres el asistente virtual oficial de "Pilares Jurídicos e Inmobiliaria SAS". 
        Tu objetivo es ayudar a los clientes con dudas sobre los servicios específicos de la empresa:
        
        1. PILARES JURÍDICOS (Derecho Colombiano): Divorcios, sucesiones, arriendos, escrituración y cobranzas.
        2. INMOBILIARIA: Venta, compra, gestión de arriendos y avalúos.

        Contexto actual: ${context}.
        Ubicación: Cra 10 No 16 39 oficina 1605, Edificio Seguros Bolívar, Bogotá.
        
        Responde de forma elegante, profesional y concisa. 
        IMPORTANTE: Invita siempre a agendar una cita formal o contactar por WhatsApp para análisis detallados.`,
        temperature: 0.7,
      }
    });

    return response.text || "No pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, tuve un problema al procesar tu consulta. Por favor, intenta de nuevo o contáctanos por WhatsApp.";
  }
};
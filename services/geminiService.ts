import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string, context: string) => {
  // En Vite, las variables de entorno se acceden a través de process.env si se configuran en vite.config.ts
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
  
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    console.error("❌ ERROR: API_KEY no configurada.");
    return "El asistente no está configurado. Por favor, asegúrate de tener el archivo .env configurado correctamente o contacta a soporte.";
  }

  console.log(`%c 🛡️ Pilares IA: Iniciando consulta (${apiKey.substring(0, 4)}...)`, "color: #d4af37; font-weight: bold;");

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Actúa como asesor de Pilares Jurídicos e Inmobiliaria. Usuario dice: ${prompt}. Contexto: ${context}` }] }],
      config: {
        systemInstruction: "Eres el Asesor Jurídico Virtual de Pilares Jurídicos. Tu objetivo es ser profesional, directo y muy conciso. REGLAS CRÍTICAS: 1) NO te presentes ni saludes formalmente en cada mensaje; el usuario ya sabe quién eres. 2) Evita lenguaje excesivamente adornado o de marketing. 3) Los servicios jurídicos ofrecidos son: Cobranzas, Derecho Inmobiliario, Derecho Notarial y Derecho de Familia Patrimonial (sucesiones, divorcios, liquidación de sociedad conyugal, capitulaciones, partición, venta o administración de bienes inmuebles familiares, con enfoque integral inmobiliario y legal bajo un mismo techo corporativo). 4) Responde directamente a la intención del usuario. Si pide una cita telefónica o asesoría, solicita su número de contacto o invítalo a agendar por WhatsApp (+57 310 613 5299). 5) Usa texto plano SIN asteriscos (**) y separa por párrafos con saltos de línea. 6) Sé breve: máximo 2 párrafos por respuesta.",
        temperature: 0.5,
      }
    });

    return response.text || "No pude procesar la respuesta.";
  } catch (error) {
    console.error("Error Gemini:", error);
    return "Hubo un error al conectar con la IA. Por favor intenta más tarde.";
  }
};
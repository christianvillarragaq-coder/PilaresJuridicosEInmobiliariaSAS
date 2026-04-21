import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string, context: string) => {
  // En Vite, las variables de entorno se acceden a través de process.env si se configuran en vite.config.ts
  const apiKey = process.env.API_KEY;
  
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
        systemInstruction: "Eres un asesor legal e inmobiliario elegante y profesional de Bogotá. Tu nombre es Asesor Jurídico Virtual. Importante: Genera tu respuesta en texto plano SIN usar asteriscos ni formato especial de markdown (no escribas **), pero SÍ utiliza saltos de línea para separar los párrafos.",
        temperature: 0.7,
      }
    });

    return response.text || "No pude procesar la respuesta.";
  } catch (error) {
    console.error("Error Gemini:", error);
    return "Hubo un error al conectar con la IA. Por favor intenta más tarde.";
  }
};
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string, context: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Hola. Actualmente mi sistema de inteligencia artificial requiere una configuración de seguridad adicional. Por favor, contáctanos directamente a nuestro WhatsApp +57 310 613 5299 para brindarte asesoría inmediata.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Usuario pregunta: ${prompt}. Contexto: ${context}` }] }],
      config: {
        systemInstruction: `Eres el asesor virtual de "Pilares Jurídicos e Inmobiliaria SAS". 
        Tu tono debe ser extremadamente formal, servicial y experto.
        
        INFORMACIÓN CLAVE:
        - PILARES JURÍDICOS: Especialistas en divorcios, sucesiones, cobro de cartera, derecho inmobiliario y notarial.
        - INMOBILIARIA: Venta, arriendos y avalúos en Bogotá.
        - UBICACIÓN: Cra 10 No 16 39 oficina 1605, Edificio Seguros Bolívar, Bogotá.
        - CONTACTO: WhatsApp +57 310 613 5299.
        
        Responde brevemente y siempre invita a agendar una cita para temas legales complejos.`,
        temperature: 0.7,
      }
    });

    return response.text || "No pude generar una respuesta. Por favor intenta de nuevo o llámanos.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, tuve un problema técnico. Puedes contactarnos al +57 310 613 5299.";
  }
};
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string, context: string) => {
  // En producción (Vite build), process.env.API_KEY se inyecta vía define.
  // Es fundamental que el secreto esté configurado en GitHub Actions.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "undefined") {
    console.warn("API_KEY no encontrada en el entorno.");
    return "Hola. Actualmente mi sistema de inteligencia artificial está en modo de espera técnica. Por favor, contáctanos directamente a nuestro WhatsApp +57 310 613 5299 para brindarte asesoría inmediata con uno de nuestros expertos.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Usuario pregunta: ${prompt}. Contexto actual: ${context}` }] }],
      config: {
        systemInstruction: `Eres el consultor virtual de "Pilares Jurídicos e Inmobiliaria SAS". 
        Tu objetivo es ser la cara digital de la empresa en Bogotá.
        
        PERFIL DE LA EMPRESA:
        - PILARES JURÍDICOS: Expertos en Derecho de Familia (divorcios, sucesiones), Derecho Inmobiliario, Notarial y Cobro de Cartera.
        - INMOBILIARIA: Administración de arriendos, ventas de propiedad raíz y avalúos técnicos.
        - SEDE: Bogotá, Edificio Seguros Bolívar (Cra 10 No 16 39, oficina 1605).
        - WHATSAPP: +57 310 613 5299.
        
        REGLAS DE RESPUESTA:
        1. Sé elegante, formal y profesional.
        2. Si la pregunta es sobre leyes específicas, da una orientación general y sugiere una cita.
        3. Si es sobre inmuebles, menciona que tenemos un catálogo actualizado.
        4. Sé conciso.`,
        temperature: 0.7,
      }
    });

    return response.text || "Disculpa, no pude procesar la respuesta. ¿Podrías intentar de nuevo o contactarnos por WhatsApp?";
  } catch (error) {
    console.error("Error en Gemini API:", error);
    return "Lo siento, tengo una interrupción técnica en mi procesador. Para no hacerte esperar, puedes escribirnos al WhatsApp +57 310 613 5299.";
  }
};
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
// El usuario deberá proporcionar estas llaves desde su panel de EmailJS
const SERVICE_ID = 'service_default'; // Placeholder
const TEMPLATE_ID = 'template_inquiry'; // Placeholder
const PUBLIC_KEY = 'user_your_public_key'; // Placeholder

export const emailService = {
  async sendInquiry(data: {
    userName: string;
    contactValue: string;
    contactMethod: 'whatsapp' | 'email';
    propertyCode: string;
    propertyTitle: string;
  }) {
    const templateParams = {
      from_name: data.userName,
      contact_info: data.contactValue,
      contact_method: data.contactMethod,
      property_code: data.propertyCode,
      property_title: data.propertyTitle,
      message: `El usuario ${data.userName} está interesado en el inmueble ${data.propertyTitle} (Código: ${data.propertyCode}). Desea ser contactado por ${data.contactMethod}: ${data.contactValue}`,
      to_email: 'pilaresjuridicoseinmobiliaria@gmail.com'
    };

    try {
      // Si el PUBLIC_KEY es el placeholder, no intentamos enviar para evitar errores de consola
      if (PUBLIC_KEY.includes('your_public_key')) {
        console.warn('⚠️ EmailJS no configurado. Abriendo mailto como fallback.');
        this.fallbackMailto(templateParams);
        return { success: true, fallback: true };
      }

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      console.log('✅ Correo enviado exitosamente:', response.status, response.text);
      return { success: true };
    } catch (error) {
      console.error('❌ Error enviando correo:', error);
      // Fallback a mailto si falla el servicio
      this.fallbackMailto(templateParams);
      return { success: true, fallback: true };
    }
  },

  fallbackMailto(params: any) {
    const subject = encodeURIComponent(`Interés en Inmueble ${params.property_code}: ${params.property_title}`);
    const body = encodeURIComponent(
      `Nombre: ${params.from_name}\n` +
      `Método de contacto: ${params.contact_method}\n` +
      `Dato de contacto: ${params.contact_info}\n` +
      `Inmueble: ${params.property_title}\n` +
      `Código: ${params.property_code}`
    );
    
    window.location.href = `mailto:pilaresjuridicoseinmobiliaria@gmail.com?subject=${subject}&body=${body}`;
  }
};

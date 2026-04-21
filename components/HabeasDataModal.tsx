import React from 'react';

interface HabeasDataModalProps {
  onClose: () => void;
}

const HabeasDataModal: React.FC<HabeasDataModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full my-8 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl transition-colors"
        >
          &times;
        </button>
        
        <h2 className="text-3xl font-serif mb-6 text-[#1a2e4c]">Protección de Datos Personales</h2>
        
        <div className="text-sm text-gray-600 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin">
          <p className="font-bold">Política de Tratamiento de Información - Pilares Jurídicos e Inmobiliaria SAS</p>
          
          <p>
            De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013, informamos que los datos personales 
            que usted suministre a través de este portal serán tratados con la finalidad de gestionar su solicitud 
            jurídica o inmobiliaria, enviarle información comercial sobre nuestros servicios y mantener una 
            comunicación fluida en el marco de nuestra relación comercial.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">Sus Derechos</h3>
          <p>
            Como titular de la información, usted tiene derecho a conocer, actualizar y rectificar sus datos personales, 
            ser informado sobre el uso que se les ha dado, revocar la autorización y/o solicitar la supresión de los 
            mismos cuando no se respeten los principios, derechos y garantías constitucionales y legales.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">Uso de la Información</h3>
          <p>
            La información recolectada se utilizará exclusivamente para:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Atención de consultas legales y asesoría inmobiliaria.</li>
              <li>Gestión de trámites ante notarías y entidades públicas.</li>
              <li>Envío de promociones o nuevos inmuebles en catálogo.</li>
              <li>Fines estadísticos e internos de la compañía.</li>
            </ul>
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">Contacto</h3>
          <p>
            Para ejercer sus derechos, puede contactarse con nosotros a través del correo: 
            <span className="font-semibold"> pilaresjuridicoseinmobiliaria@gmail.com</span> o directamente 
            en nuestras oficinas en Bogotá (Cra 10 No 16 39 oficina 1605).
          </p>
          
          <p className="pt-4 italic text-xs border-t">
            Al continuar navegando y utilizando nuestros formularios, usted manifiesta su consentimiento previo, 
            expreso e informado para el tratamiento de sus datos de acuerdo con esta política.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 w-full bg-[#1a2e4c] text-white py-4 rounded-2xl font-bold hover:bg-[#a6894a] transition-all shadow-md"
        >
          HE LEÍDO Y ACEPTO
        </button>
      </div>
    </div>
  );
};

export default HabeasDataModal;

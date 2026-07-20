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
        
        <h2 className="text-3xl font-serif mb-6 text-[#1a2e4c]">Autorización para el Tratamiento y Uso de Datos Personales</h2>
        
        <div className="text-xs text-gray-600 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin">
          <p className="font-bold uppercase">AUTORIZACIÓN PARA EL TRATAMIENTO Y USO DE DATOS PERSONALES.</p>
          
          <p>
            De conformidad con lo previsto en la Ley 1581 de 2012 “por la cual se dictan las disposiciones generales para la protección de datos personales” y el Decreto 1377 de 2013, que la reglamentan parcialmente, manifiesto que otorgo mi autorización expresa y clara para que pueda hacer tratamiento y uso de mis datos personales, los cuales estarán reportados en la base de datos de la que es responsable dicha organización y que han sido recolectados en las relaciones contractuales que ésta realiza en desarrollo de su objeto social.
          </p>

          <p>
            De acuerdo con la normatividad citada, <span className="font-bold">PILARES JURIDICOS E INMOBILIARIA SAS</span> queda autorizado de manera expresa e inequívoca para mantener y manejar la información suministrada, solo para aquellas finalidades para las que se encuentra facultado y respetando en todo caso, la normatividad vigente sobre protección de datos personales.
          </p>

          <p>
            No obstante la presente autorización, me reservo el derecho a ejercer en cualquier momento la posibilidad de conocer, actualizar, rectificar y solicitar la supresión de mis datos personales en la base de datos de la organización, cuando así lo estime conveniente.
          </p>

          <p>
            <span className="font-bold">PILARES JURIDICOS E INMOBILIARIA SAS</span>, acogiendo y dando cumplimiento a lo dispuesto en la ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013 y lo consignado en el artículo 15 de nuestra Constitución Política, adopta y aplica la presente Política para el tratamiento de los datos personales. Se manifiesta que garantizamos la intimidad, derechos a la privacidad, y el buen nombre de las personas, durante el proceso del tratamiento de datos personales, en todas las actividades, las cuales tendrán los principios de confidencialidad, seguridad, legalidad, acceso, libertad y transparencia.
          </p>

          <p>
            <span className="font-bold">PILARES JURIDICOS E INMOBILIARIA SAS</span> Se compromete a no revelar la información que se digita o transfiere a nuestra empresa, de acuerdo con las normas de la Ley 527 que reglamenta el Comercio Electrónico en Colombia y la Ley 1581 de 2012 sobre el uso de datos confidenciales. Con la presente Política de Tratamiento y Protección de Datos Personales para dar cumplimiento a las políticas de datos y a las obligaciones de la Ley 1581 de 2012, sus Decretos Reglamentarios y las demás normas que la complementen, adicionen, enriquezcan o modifiquen, tiene en cuenta lo siguiente para el manejo de información y datos personales:
          </p>

          <p>
            La información personal es uno de los activos más importantes, por lo tanto, el tratamiento de esta información se realiza con sumo cuidado y atendiendo lo establecido por la ley, garantizando a las personas el pleno ejercicio y respeto por su derecho del Hábeas Data.
          </p>

          <p>
            La información que se encuentra en la Base de Datos propia ha sido obtenida en desarrollo de la actividad Juridica e inmobiliaria, su recopilación se ha hecho y se hará siempre atendiendo a los criterios y normatividad legal.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">ALCANCE DE LA POLÍTICA DE PROTECCIÓN DE DATOS:</h3>
          <p>
            La Política de Protección de Datos Personales de PILARES JURIDICOS E INMOBILIARIA SAS se aplicará a todas las Bases de Datos y/o archivos que contengan Datos Personales, que para que sea objeto de Tratamiento como responsable y/o encargado del tratamiento de Datos Personales.
            Cualquier tipo de solicitud podrá dirigirse a la Carrera 10 N° 16-39 OF.16-05 de la ciudad de Bogotá, Colombia, con teléfono de contacto 3106135299 - 3507354603 y correo electrónico pilaresjuridicoseinmobiliaria@gmail.com.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">FINALIDAD DE LA RECOLECCIÓN Y TRATAMIENTO:</h3>
          <ul className="list-decimal pl-5 space-y-2">
            <li>Instrumentar los procedimientos de recolección y tratamiento de datos personales a las disposiciones de la ley.</li>
            <li>Generar un esquema organizado para salvaguardar los datos privados, semiprivados, públicos y sensibles de sus titulares.</li>
          </ul>
          <p>
            El Usuario acepta que <span className="font-bold">PILARES JURIDICOS E INMOBILIARIA SAS</span> lo contacte por diferentes canales como teléfono fijo, teléfono celular, mensajes de texto, correo electrónico y redes sociales, para ofrecerle información y beneficios.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">DATOS DE NATURALEZA SENSIBLE:</h3>
          <p>
            El Tratamiento de los Datos Personales de naturaleza sensible está prohibido por la ley, salvo que se cuente con autorización expresa. Estos incluyen origen racial, orientación política, convicciones religiosas, vida sexual y datos biométricos. Ninguna actividad podrá condicionarse a que el titular suministre datos personales sensibles.
          </p>

          <h3 className="font-bold text-[#a6894a] uppercase text-xs tracking-widest mt-6">MARCO NORMATIVO Y LEGAL:</h3>
          <p className="text-[10px] space-y-1">
            • LEY 527 DE 1999 (Comercio Electrónico)<br/>
            • LEY 1266 DE 2008 (Hábeas Data financiero)<br/>
            • LEY 1273 DE 2009 (Delitos Informáticos)<br/>
            • LEY 1581 DE 2012 (Protección de Datos Personales)<br/>
            • DECRETO 1377 DE 2013 (Reglamentario)
          </p>

          <p className="pt-4 italic text-[10px] border-t">
            PILARES JURIDICOS E INMOBILIARIA SAS garantiza el derecho de acceso, actualización y rectificación conforme a la ley 1581 de 2012. Para dudas contacte a pilaresjuridicoseinmobiliaria@gmail.com.
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

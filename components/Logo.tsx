import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  // Definimos la ruta según si queremos el logo normal o el de fondo oscuro (light text)
  const logoPath = light ? "logo_footer.jpg" : "logo_v2.png";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoPath} 
        alt="Pilares Jurídicos e Inmobiliaria SAS" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // Fallback para GitHub Pages considerando el subdirectorio
          if (target.src.indexOf('PilaresJuridicosEInmobiliariaSAS') === -1) {
             target.src = `/PilaresJuridicosEInmobiliariaSAS/${logoPath}`;
          }
        }}
      />
    </div>
  );
};

export default Logo;

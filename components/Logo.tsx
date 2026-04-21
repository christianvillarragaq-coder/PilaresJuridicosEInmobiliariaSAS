import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  // En Vite, los archivos de /public se sirven en la raíz del sitio.
  // En GitHub Pages, necesitamos considerar el subdirectorio /PilaresJuridicosEInmobiliariaSAS/
  
  // Usamos una ruta relativa simple que funcione tanto en local como en producción
  const logoPath = "logo_v2.png";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoPath} 
        alt="Pilares Jurídicos e Inmobiliaria SAS" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback robusto para GitHub Pages si la ruta anterior falla
          const target = e.target as HTMLImageElement;
          if (target.src.indexOf('PilaresJuridicosEInmobiliariaSAS') === -1) {
             target.src = '/PilaresJuridicosEInmobiliariaSAS/logo_v2.png';
          }
        }}
      />
    </div>
  );
};

export default Logo;

import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  // Usamos la imagen subida por el usuario
  // Ajustamos el estilo para que sea responsivo y mantenga buena calidad
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="./public/logo_v2.png" 
        alt="Pilares Jurídicos e Inmobiliaria SAS" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback por si la ruta relativa falla en GitHub Pages
          const target = e.target as HTMLImageElement;
          target.src = '/PilaresJuridicosEInmobiliariaSAS/public/logo_v2.png';
        }}
      />
    </div>
  );
};

export default Logo;

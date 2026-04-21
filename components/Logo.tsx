import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16", light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="./logo.jpg" 
        alt="Pilares Jurídicos e Inmobiliaria SAS" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;

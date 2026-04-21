import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  const blueColor = "#1a2e4c";
  const goldColor = "#a6894a";
  const textColor = light ? "#ffffff" : blueColor;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke={goldColor} strokeWidth="3" />
        <path d="M30 70V45H70V70M30 45L50 25L70 45" stroke={textColor} strokeWidth="6" strokeLinejoin="round"/>
        <path d="M45 45L55 45M45 55L55 55M45 65L55 65" stroke={goldColor} strokeWidth="2" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-lg tracking-tight" style={{ color: textColor }}>PILARES JURÍDICOS</span>
        <span className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: goldColor }}>E INMOBILIARIA SAS</span>
      </div>
    </div>
  );
};

export default Logo;
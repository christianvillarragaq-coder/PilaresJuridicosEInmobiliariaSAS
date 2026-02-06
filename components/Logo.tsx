
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  const blueColor = "#1a2e4c";
  const goldColor = "#a6894a";
  const greyColor = "#6b7280";
  const textColor = light ? "#ffffff" : blueColor;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke={goldColor} strokeWidth="3" />
        {/* Pillar Structure */}
        <path d="M25 75V40H75V75M25 40L50 20L75 40M35 75V45H65V75" stroke={blueColor} strokeWidth="6" strokeLinejoin="round"/>
        <path d="M42 75V55H58V75" fill={blueColor} />
        <path d="M50 35L35 50M50 35L65 50" stroke={goldColor} strokeWidth="4" strokeLinecap="round" />
        {/* Gavel */}
        <g transform="translate(35, 75) rotate(-45)">
          <rect x="0" y="0" width="12" height="6" fill={goldColor} rx="1" />
          <rect x="5" y="6" width="2" height="15" fill={goldColor} />
          <rect x="3" y="21" width="6" height="2" fill={goldColor} />
        </g>
      </svg>

      {/* Text Branding */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-bold tracking-tight text-lg md:text-xl" style={{ color: textColor, fontFamily: 'Montserrat, sans-serif' }}>
            PILARES JURIDICOS
          </span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[10px] md:text-xs tracking-[0.1em]" style={{ color: goldColor }}>
              E INMOBILIARIA
            </span>
            <div className="h-[1px] flex-grow bg-gray-300" style={{ maxWidth: '40px' }}></div>
            <span className="text-[9px] font-medium" style={{ color: greyColor }}>SAS</span>
            <div className="h-[1px] flex-grow bg-gray-300" style={{ maxWidth: '40px' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;

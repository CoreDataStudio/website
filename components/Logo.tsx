import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", color = "#ffd369", size = 40 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 248 248" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <path 
          d="M 100 40 H 40 V 124 H 208 V 208 H 148"
          stroke={color} 
          strokeWidth="30" 
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const LogoHero: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      <motion.svg 
        /* Using the exact viewBox from your SVG, but added a small buffer (-10) to prevent stroke clipping */
        viewBox="-20 -20 288 228" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[80vh] overflow-visible drop-shadow-[0_0_15px_rgba(255,201,74,0.1)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <style>
          {`
            .st0 {
              fill: none;
              stroke: #FFC94A;
              stroke-linejoin: round;
              stroke-width: 30px;
            }
            .st1 {
              font-family: 'Space Grotesk', sans-serif;
              font-size: 31.9px;
              font-weight: 700;
              fill: #E4E4E7;
            }
          `}
        </style>
        
        {/* Main Path */}
        <motion.path 
          className="st0" 
          d="M83.25,40h-43.25v60.56h121.11v60.56h-43.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Text Elements - Animated Fade In */}
        <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
        >
            <text className="st1" transform="translate(91.5 84.31)">
                <tspan x="0" y="0">ore</tspan>
            </text>
            <text className="st1" transform="translate(180.71 168.68)">
                <tspan x="0" y="0">ata</tspan>
            </text>
            {/* Note: In SVG transform order matters. Translate first, then rotate around the anchor. 
                Using the exact values provided. */}
            <text className="st1" transform="translate(34.35 122.88) rotate(90)">
                <tspan x="0" y="0">tudio</tspan>
            </text>
        </motion.g>
      </motion.svg>
    </div>
  );
};
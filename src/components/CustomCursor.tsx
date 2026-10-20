import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const mousePos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: mousePos.x,
          y: mousePos.y,
          duration: 0.08,
          ease: 'power2.out',
        });
      }
    };

    // Smooth lerp for outer ring
    const ticker = () => {
      ringPos.x += (mousePos.x - ringPos.x) * 0.15;
      ringPos.y += (mousePos.y - ringPos.y) * 0.15;

      if (ringRef.current) {
        gsap.set(ringRef.current, {
          x: ringPos.x,
          y: ringPos.y,
        });
      }
    };

    gsap.ticker.add(ticker);
    window.addEventListener('mousemove', handleMouseMove);

    // Track interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      
      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? 'scale-0' : 'scale-100'} transition-transform duration-200`}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring flex items-center justify-center font-mono text-[9px] uppercase tracking-wider text-black font-bold transition-all duration-300 ${
          isHovered
            ? 'w-16 h-16 bg-white/90 border-white text-slate-900 shadow-lg shadow-cyan-500/20'
            : 'w-9 h-9 bg-transparent border-cyan-400/50'
        }`}
      >
        {cursorText && (
          <span className="animate-fade-in font-bold text-[8px] text-slate-900 pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;

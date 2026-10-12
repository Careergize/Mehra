import React, { useEffect, useRef } from 'react';

export default function GlitterBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 65 golden glitter particles with varying sizes and twinkles
    const particleCount = 70;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.1, // gently drifting upward
      opacity: Math.random() * 0.8 + 0.2,
      opacitySpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      goldColor: Math.random() > 0.4 ? '234, 179, 8' : '250, 204, 21', // golden / amber palette
      sparkle: Math.random() > 0.7,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity > 0.95 || p.opacity < 0.15) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        // Wrap around screen
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Draw glowing gold particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.goldColor}, ${Math.max(0.1, Math.min(1, p.opacity))})`;
        ctx.shadowBlur = p.sparkle ? 10 : 4;
        ctx.shadowColor = 'rgba(234, 179, 8, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Fixed Background Gold Glitter Texture Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-90"
          style={{
            backgroundImage: `url('/images/gold-glitter-bg.jpg')`,
          }}
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* 2. Full-Page Floating Twinkling Golden Glitter Particles (over all sections) */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-30"
      />
    </>
  );
}

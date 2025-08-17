import React from 'react';

const ParallaxLayer = ({ speed = 0.1, children, style }) => {
  const ref = React.useRef(null);
  const raf = React.useRef(0);
  React.useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const translate = Math.round(y * speed);
        if (ref.current) ref.current.style.transform = `translateY(${translate}px)`;
        raf.current = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);
  return (
    <div ref={ref} style={{ willChange: 'transform', transition: 'transform 60ms linear', ...style }}>
      {children}
    </div>
  );
};

export default ParallaxLayer;


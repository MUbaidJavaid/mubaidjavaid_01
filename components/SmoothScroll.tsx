import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic easing
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis for programmatic scrolling
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}

// Hook to access Lenis instance
export function useLenis() {
  return (window as any).lenis as Lenis | null;
}

// Smooth scroll to element
export function scrollToSection(sectionId: string) {
  const lenis = (window as any).lenis as Lenis | null;
  const element = document.getElementById(sectionId);
  
  if (lenis && element) {
    lenis.scrollTo(element, { offset: -80 });
  } else if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

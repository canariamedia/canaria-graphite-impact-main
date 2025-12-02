import { useEffect, useRef, useState } from "react";

const SectionDivider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={dividerRef}
      className="w-full flex justify-center pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 px-4 bg-black"
    >
      <div
        className={`h-[3px] w-[80%] sm:w-[70%] md:w-[60%] rounded-full transition-all duration-[600ms] ease-out ${
          isVisible 
            ? 'opacity-70 scale-x-100' 
            : 'opacity-0 scale-x-0'
        }`}
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.14), rgba(191, 194, 200, 0.28), rgba(255, 255, 255, 0.14))',
          transformOrigin: 'center',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default SectionDivider;


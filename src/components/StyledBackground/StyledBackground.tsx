import  './StyledBackground.css'
import { useEffect, useState } from 'react';
const StyledBackground = () => {
  const quantity = 15;
  const [fireflyStyles, setFireflyStyles] = useState<string[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: quantity }, (_, i) => {
      const steps = Math.floor(Math.random() * 12) + 16;
      const rotationSpeed = `${Math.floor(Math.random() * 10) + 8}s`;
      const moveKeyframes = `
        @keyframes move${i} {
          ${Array.from({ length: steps }).map((_, step) => {
            const translateX = Math.random() * 100 - 50;
            const translateY = Math.random() * 100 - 50;
            const scale = Math.random() * 0.75 + 0.25;
            return `${(step * 100) / steps}% {
              transform: translateX(${translateX}vw) translateY(${translateY}vh) scale(${scale});
            }`;
          }).join('')}
        }
      `;
      return `
        .firefly-${i} {
          animation-name: move${i};
        }
        .firefly-${i}::before {
          animation-duration: ${rotationSpeed};
        }
        .firefly-${i}::after {
          animation-duration: ${rotationSpeed}, ${Math.floor(Math.random() * 6000) + 5000}ms;
          animation-delay: 0ms, ${Math.floor(Math.random() * 8000) + 500}ms;
        }
        ${moveKeyframes}
      `;
    });

    setFireflyStyles(styles);
  }, [quantity]);

  return (
    <div className="background">
      {fireflyStyles.map((style, index) => (
        <style key={index}>{style}</style>
      ))}
      {Array.from({ length: quantity }, (_, i) => (
        <div key={i} className={`firefly firefly-${i}`} />
      ))}
    </div>
  );
};

export default StyledBackground
'use client';

import { useEffect, useState } from 'react';

export function BinaryRain() {
  const [binaryStrings, setBinaryStrings] = useState<Array<{ id: string; left: number }>>([]);

  useEffect(() => {
    const generateBinary = () => {
      return Math.random() > 0.5 ? '1' : '0';
    };

    const createBinaryString = () => {
      let str = '';
      for (let i = 0; i < 12; i++) {
        str += generateBinary();
      }
      return str;
    };

    const newStrings = Array.from({ length: 8 }, (_, i) => ({
      id: `binary-${Date.now()}-${i}`,
      left: Math.random() * 100,
    }));

    setBinaryStrings(newStrings);

    const timer = setTimeout(() => {
      setBinaryStrings([]);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {binaryStrings.map((item) => (
        <div
          key={item.id}
          className="fixed pointer-events-none font-mono text-sm text-primary/60 animate-binary whitespace-nowrap"
          style={{
            left: `${item.left}%`,
            top: '0',
            zIndex: -1,
            letterSpacing: '0.5em',
            lineHeight: '1.5',
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i}>
              {Array.from({ length: 3 })
                .map(() => (Math.random() > 0.5 ? '1' : '0'))
                .join('')}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

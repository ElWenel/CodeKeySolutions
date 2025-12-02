"use client";

export function BinaryRain() {
  // Generar código binario estático para una apariencia profesional
  const binaryLines = Array.from({ length: 3 }, () => {
    return Array.from({ length: 40 }, () => (Math.random() > 0.5 ? "1" : "0")).join("");
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden">
      {/* Línea gradiente superior profesional */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* Código binario decorativo */}
      <div className="relative h-20 bg-gradient-to-b from-primary/5 to-transparent backdrop-blur-sm border-b border-primary/10 flex items-center justify-center">
        <div className="font-mono text-xs text-primary/40 overflow-hidden whitespace-nowrap max-w-full px-4">
          <div className="flex gap-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {binaryLines.map((line, i) => (
              <span key={i} className="tracking-widest">
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

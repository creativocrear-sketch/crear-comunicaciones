/*
 * WaveDivider — Separador de secciones con forma de onda
 * Colores: navy, white, pearl según la transición de sección
 */

interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  from = "#0F2044",
  to = "#FFFFFF",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 md:h-24"
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
          fill={to}
        />
        <path
          d="M0,70 C240,100 480,40 720,70 C960,100 1200,40 1440,70 L1440,100 L0,100 Z"
          fill={to}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

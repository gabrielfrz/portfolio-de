export function DataSculpture({ small = false }: { small?: boolean }) {
  return (
    <div className="sculpture-stage">
      <svg
        className={`data-sculpture ${small ? "small" : ""}`}
        viewBox="0 0 600 560"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={small ? "wire-small" : "wire"}
            x1="100"
            y1="100"
            x2="480"
            y2="520"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b7c5ac" />
            <stop offset=".6" stopColor="#65735b" />
            <stop offset="1" stopColor="#30382e" />
          </linearGradient>
        </defs>
        <g
          className="sculpture-lines"
          stroke={`url(#${small ? "wire-small" : "wire"})`}
          strokeWidth=".75"
        >
          {Array.from({ length: 26 }, (_, i) => {
            const y = 106 + i * 11;
            const bend = Math.sin((i / 25) * Math.PI) * 64;
            return (
              <path
                key={i}
                d={`M ${302 - bend} ${y - 58} L ${504 - bend * 0.5} ${y + 42} L ${302 + bend} ${y + 155} L ${100 + bend * 0.5} ${y + 49} Z`}
              />
            );
          })}
          {Array.from({ length: 19 }, (_, i) => {
            const t = i / 18;
            return (
              <g key={i}>
                <path
                  d={`M ${302 + 202 * t} ${48 + 100 * t} Q ${210 + 190 * t} ${210 + 95 * t} ${302 + 202 * t} ${323 + 100 * t}`}
                />
                <path
                  d={`M ${504 - 202 * t} ${148 + 113 * t} Q ${445 - 50 * t} ${310 + 70 * t} ${504 - 202 * t} ${423 + 113 * t}`}
                />
                <path
                  d={`M ${302 - 202 * t} ${261 - 106 * t} Q ${400 - 220 * t} ${400 - 100 * t} ${302 - 202 * t} ${536 - 106 * t}`}
                />
                <path
                  d={`M ${100 + 202 * t} ${155 - 107 * t} Q ${170 + 40 * t} ${310 - 100 * t} ${100 + 202 * t} ${430 - 107 * t}`}
                />
              </g>
            );
          })}
        </g>
        <g className="sculpture-traces" stroke="#c1ee8d" strokeWidth="1.6">
          <path pathLength="1" d="M 252 129 L 480 238 L 354 310" />
          <path pathLength="1" d="M 137 356 L 302 443 L 467 352" />
        </g>
        <g className="sculpture-packets" fill="#e3ffc8">
          <circle r="3.5">
            <animateMotion dur="4.6s" repeatCount="indefinite" path="M 252 129 L 480 238 L 354 310" />
          </circle>
          <circle r="3">
            <animateMotion dur="5.8s" begin="-2s" repeatCount="indefinite" path="M 137 356 L 302 443 L 467 352" />
          </circle>
        </g>
        <g className="sculpture-nodes" fill="#c1ee8d">
          <circle cx="252" cy="129" r="3" />
          <circle cx="354" cy="310" r="3" />
          <circle cx="137" cy="356" r="3" />
          <circle cx="467" cy="352" r="3" />
        </g>
      </svg>
    </div>
  );
}

/* Per-estate editorial SVG artwork, four bespoke compositions. */

import type { Estate } from "@/lib/data";

type Props = { artId: Estate["artId"] };

export function EstateArt({ artId }: Props) {
  const map: Record<Estate["artId"], React.ReactElement> = {
    lakefront: <Lakefront />,
    view: <ViewHome />,
    mountain: <MountainEstate />,
    heritage: <Heritage />,
  };
  return map[artId];
}

function Lakefront() {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="e1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1a20" />
          <stop offset="60%" stopColor="#0a1216" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#e1)" />
      <path
        d="M0 220 L100 160 L220 200 L340 150 L460 190 L580 140 L700 180 L800 160 L800 280 L0 280 Z"
        fill="#091418"
        opacity="0.95"
      />
      <path
        d="M0 280 L120 250 L240 275 L360 245 L480 275 L600 250 L720 275 L800 260 L800 320 L0 320 Z"
        fill="#06090b"
      />
      <rect x="0" y="320" width="800" height="180" fill="#04070a" />
      <line x1="0" y1="322" x2="800" y2="322" stroke="#b08a5b" strokeWidth="0.5" opacity="0.5" />
      {/* Long contemporary house silhouette on shore */}
      <rect x="280" y="250" width="220" height="40" fill="#1a1410" opacity="0.85" />
      <rect x="288" y="258" width="6" height="14" fill="#d4b896" opacity="0.5" />
      <rect x="304" y="258" width="6" height="14" fill="#d4b896" opacity="0.5" />
      <rect x="320" y="258" width="6" height="14" fill="#d4b896" opacity="0.5" />
      <rect x="336" y="258" width="6" height="14" fill="#d4b896" opacity="0.4" />
      <rect x="352" y="258" width="6" height="14" fill="#d4b896" opacity="0.5" />
      <rect x="368" y="258" width="6" height="14" fill="#d4b896" opacity="0.4" />
      {/* Reflection */}
      <rect x="282" y="324" width="216" height="2" fill="#d4b896" opacity="0.15" />
      <rect x="290" y="328" width="6" height="20" fill="#d4b896" opacity="0.08" />
      <rect x="322" y="328" width="6" height="22" fill="#d4b896" opacity="0.08" />
      <rect x="354" y="328" width="6" height="20" fill="#d4b896" opacity="0.08" />
    </svg>
  );
}

function ViewHome() {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="e2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d1812" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#e2)" />
      <circle cx="640" cy="120" r="50" fill="#d4b896" opacity="0.18" />
      <path
        d="M0 280 L120 210 L240 250 L360 200 L480 240 L600 195 L720 235 L800 215 L800 360 L0 360 Z"
        fill="#0c0a06"
        opacity="0.9"
      />
      <rect x="0" y="360" width="800" height="140" fill="#06070a" />
      {/* Three-storey house terraced into slope */}
      <rect x="100" y="290" width="220" height="70" fill="#181410" opacity="0.85" />
      <rect x="108" y="298" width="60" height="35" fill="#d4b896" opacity="0.28" />
      <rect x="174" y="298" width="60" height="35" fill="#d4b896" opacity="0.20" />
      <rect x="240" y="298" width="72" height="35" fill="#d4b896" opacity="0.24" />
      {/* Lower terraces */}
      <rect x="120" y="335" width="180" height="25" fill="#1f1814" opacity="0.6" />
    </svg>
  );
}

function MountainEstate() {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="e3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#161c1c" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#e3)" />
      <path
        d="M0 180 L100 100 L200 150 L320 80 L440 140 L560 90 L700 150 L800 110 L800 320 L0 320 Z"
        fill="#0c1414"
        opacity="0.95"
      />
      <path
        d="M0 200 L100 140 L210 180 L320 130 L440 170 L560 130 L700 175 L800 150 L800 360 L0 360 Z"
        fill="#0a1010"
        opacity="0.6"
      />
      <rect x="0" y="360" width="800" height="140" fill="#06070a" />
      {/* Timber and stone retreat with steep gable */}
      <rect x="280" y="300" width="180" height="60" fill="#1a1612" />
      <polygon points="280,300 370,260 460,300" fill="#0d0a07" />
      <rect x="300" y="320" width="20" height="30" fill="#d4b896" opacity="0.35" />
      <rect x="330" y="320" width="20" height="30" fill="#d4b896" opacity="0.45" />
      <rect x="370" y="320" width="20" height="30" fill="#d4b896" opacity="0.35" />
      <rect x="400" y="320" width="20" height="30" fill="#d4b896" opacity="0.30" />
      {/* Pines */}
      <polygon points="120,360 138,320 156,360" fill="#0c1208" />
      <polygon points="640,360 656,310 672,360" fill="#0c1208" />
      <polygon points="700,360 712,330 724,360" fill="#0c1208" />
    </svg>
  );
}

function Heritage() {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="e4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1610" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#e4)" />
      {/* Symmetrical heritage facade */}
      <rect x="180" y="220" width="440" height="220" fill="#0e0a06" opacity="0.92" />
      {/* Roof line */}
      <polygon points="170,220 400,170 630,220" fill="#070504" />
      {/* Windows, three rows */}
      <rect x="220" y="240" width="60" height="80" fill="#d4b896" opacity="0.24" />
      <rect x="310" y="240" width="60" height="80" fill="#d4b896" opacity="0.18" />
      <rect x="400" y="240" width="80" height="80" fill="#d4b896" opacity="0.30" />
      <rect x="510" y="240" width="60" height="80" fill="#d4b896" opacity="0.20" />
      <rect x="220" y="340" width="60" height="60" fill="#d4b896" opacity="0.18" />
      <rect x="310" y="340" width="60" height="60" fill="#d4b896" opacity="0.14" />
      <rect x="400" y="340" width="80" height="60" fill="#d4b896" opacity="0.22" />
      <rect x="510" y="340" width="60" height="60" fill="#d4b896" opacity="0.16" />
      {/* Walled garden / front step */}
      <rect x="160" y="430" width="480" height="10" fill="#1a1410" />
      <rect x="0" y="440" width="800" height="60" fill="#06070a" />
      {/* Lamp posts */}
      <rect x="190" y="400" width="2" height="30" fill="#1a1612" />
      <circle cx="191" cy="398" r="3" fill="#d4b896" opacity="0.5" />
      <rect x="608" y="400" width="2" height="30" fill="#1a1612" />
      <circle cx="609" cy="398" r="3" fill="#d4b896" opacity="0.5" />
    </svg>
  );
}

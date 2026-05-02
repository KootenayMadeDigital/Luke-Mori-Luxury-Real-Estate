/* Per-area editorial SVG artwork — six bespoke compositions, no images. */

import type { Area } from "@/lib/data";

type Props = { artId: Area["artId"] };

export function AreaArt({ artId }: Props) {
  const map: Record<Area["artId"], React.ReactElement> = {
    johns: <JohnsWalk />,
    fairview: <Fairview />,
    rosemont: <Rosemont />,
    northshore: <NorthShore />,
    balfour: <Balfour />,
    kaslo: <Kaslo />,
  };
  return map[artId];
}

function JohnsWalk() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-johns" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2228" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-johns)" />
      <path
        d="M0 280 L100 220 L180 250 L260 200 L340 240 L440 190 L520 230 L600 210 L600 400 L0 400 Z"
        fill="#0e1417"
        opacity="0.9"
      />
      <path
        d="M0 320 L80 290 L160 310 L240 280 L320 300 L400 270 L480 300 L560 280 L600 290 L600 400 L0 400 Z"
        fill="#080a0c"
      />
      <rect x="0" y="320" width="600" height="80" fill="#0a1216" opacity="0.6" />
      <line x1="0" y1="322" x2="600" y2="322" stroke="#b08a5b" strokeWidth="0.4" opacity="0.4" />
      {/* Distant lights */}
      <circle cx="120" cy="328" r="1.4" fill="#d4b896" opacity="0.7" />
      <circle cx="190" cy="332" r="1.2" fill="#d4b896" opacity="0.5" />
      <circle cx="265" cy="330" r="1.6" fill="#d4b896" opacity="0.8" />
      <circle cx="350" cy="334" r="1.2" fill="#d4b896" opacity="0.6" />
    </svg>
  );
}

function Fairview() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-fairview" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f1a14" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-fairview)" />
      <circle cx="500" cy="120" r="40" fill="#d4b896" opacity="0.18" />
      <path
        d="M0 240 L120 180 L240 220 L360 160 L480 210 L600 180 L600 400 L0 400 Z"
        fill="#15110b"
        opacity="0.85"
      />
      <path
        d="M0 300 L100 270 L200 290 L300 260 L400 290 L500 270 L600 285 L600 400 L0 400 Z"
        fill="#0a0907"
      />
      {/* House silhouette */}
      <rect x="240" y="280" width="60" height="40" fill="#1a1410" />
      <rect x="245" y="288" width="6" height="10" fill="#d4b896" opacity="0.4" />
      <rect x="258" y="288" width="6" height="10" fill="#d4b896" opacity="0.4" />
      <rect x="271" y="288" width="6" height="10" fill="#d4b896" opacity="0.5" />
    </svg>
  );
}

function Rosemont() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-rose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141a1a" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-rose)" />
      <path
        d="M0 260 L80 220 L180 240 L280 210 L380 250 L480 220 L600 240 L600 400 L0 400 Z"
        fill="#0d1313"
        opacity="0.85"
      />
      <path
        d="M0 310 L150 290 L300 305 L450 285 L600 300 L600 400 L0 400 Z"
        fill="#060908"
      />
      {/* Path */}
      <path
        d="M60 380 Q200 360 300 350 Q400 340 540 320"
        fill="none"
        stroke="#b08a5b"
        strokeWidth="0.6"
        opacity="0.35"
        strokeDasharray="3 5"
      />
      {/* Trees */}
      <circle cx="80" cy="305" r="6" fill="#08100a" />
      <circle cx="120" cy="310" r="5" fill="#08100a" />
      <circle cx="500" cy="295" r="7" fill="#08100a" />
      <circle cx="540" cy="305" r="5" fill="#08100a" />
    </svg>
  );
}

function NorthShore() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-north" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1c20" />
          <stop offset="60%" stopColor="#0b1418" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-north)" />
      <path
        d="M0 200 L80 140 L160 180 L240 120 L340 170 L440 110 L540 160 L600 130 L600 270 L0 270 Z"
        fill="#0a1418"
        opacity="0.9"
      />
      <rect x="0" y="270" width="600" height="130" fill="#06090b" />
      <path
        d="M0 280 L80 260 L160 280 L240 255 L340 280 L440 255 L540 280 L600 265 L600 320 L0 320 Z"
        fill="#0a1014"
        opacity="0.7"
      />
      <line x1="0" y1="272" x2="600" y2="272" stroke="#b08a5b" strokeWidth="0.5" opacity="0.5" />
      {/* Boat lights */}
      <circle cx="180" cy="290" r="1.4" fill="#d4b896" opacity="0.8" />
      <circle cx="420" cy="295" r="1.2" fill="#d4b896" opacity="0.6" />
    </svg>
  );
}

function Balfour() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-balfour" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162026" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-balfour)" />
      <path
        d="M0 240 L100 190 L220 220 L340 180 L460 210 L600 190 L600 290 L0 290 Z"
        fill="#0d161b"
        opacity="0.9"
      />
      <rect x="0" y="290" width="600" height="110" fill="#070a0c" />
      <ellipse cx="300" cy="295" rx="240" ry="3" fill="#b08a5b" opacity="0.25" />
      {/* Dock */}
      <rect x="380" y="295" width="80" height="2" fill="#1a1612" />
      <rect x="378" y="297" width="2" height="14" fill="#1a1612" />
      <rect x="408" y="297" width="2" height="14" fill="#1a1612" />
      <rect x="438" y="297" width="2" height="14" fill="#1a1612" />
      <rect x="458" y="297" width="2" height="14" fill="#1a1612" />
    </svg>
  );
}

function Kaslo() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="size-full">
      <defs>
        <linearGradient id="g-kaslo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a14" />
          <stop offset="100%" stopColor="#0b0c0e" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g-kaslo)" />
      <path
        d="M0 220 L120 170 L240 210 L360 160 L480 200 L600 170 L600 280 L0 280 Z"
        fill="#11110b"
        opacity="0.85"
      />
      <rect x="0" y="280" width="600" height="120" fill="#06070a" />
      <line x1="0" y1="282" x2="600" y2="282" stroke="#b08a5b" strokeWidth="0.4" opacity="0.4" />
      {/* Pines */}
      <polygon points="60,290 70,260 80,290" fill="#0c1208" />
      <polygon points="100,295 112,255 124,295" fill="#0c1208" />
      <polygon points="500,288 514,250 528,288" fill="#0c1208" />
      <polygon points="540,295 550,265 560,295" fill="#0c1208" />
    </svg>
  );
}

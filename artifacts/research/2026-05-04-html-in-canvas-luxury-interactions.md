# HTML-in-canvas and Luxury Interaction Research for Luke Mori
*Date: 2026-05-04 | Confidence: High on browser readiness, Medium on final creative ROI until prototyped*

## Executive Summary
HTML-in-canvas is visually powerful but not production-ready as a live website feature. The browser API is experimental, Chrome Canary only, and behind a flag. For Luke Mori, the strongest route is to use the idea as inspiration: prototype cinematic canvas/WebGL/CSS reveal interactions that work today, while optionally using Remotion HTML-in-canvas to render premium videos or social/demo assets.

The tear-away curtain idea is viable, but it should not block access to listings or feel like a game. It should be a one-time luxury reveal layer, short, skippable, reduced-motion safe, and only used on high-value moments like featured estates, sold proof, or private listing previews.

## Key Findings

1. **HTML-in-canvas is not ready for production browser use.**
   - Remotion documents HTML-in-canvas as experimental, currently only available in Chrome Canary v149+ behind `chrome://flags/#canvas-draw-element`.
   - Source: https://www.remotion.dev/docs/html-in-canvas
   - Confidence: High

2. **The API is designed exactly for the kind of effect Warhead is imagining, but the shipping constraint is brutal.**
   - WICG describes the purpose as drawing live DOM into canvas, post-processing it with Canvas 2D, WebGL, or WebGPU, and enabling rich HTML surfaces inside 3D contexts.
   - Source: https://github.com/WICG/html-in-canvas
   - Confidence: High

3. **Remotion supports HTML-in-canvas for rendered output, not practical live site deployment.**
   - Remotion can render HTML-in-canvas locally, on Lambda, Vercel, and SSR because it ships/uses a compatible Chromium with the flag enabled.
   - That means it is useful for video exports, cinematic demos, Open Graph/social assets, or sales presentation clips.
   - Source: https://www.remotion.dev/docs/html-in-canvas
   - Confidence: High

4. **The StorePeel example proves the visual language is relevant.**
   - The Remotion example repository includes StorePeel/CubeTransitionCard, using `<HtmlInCanvas>` and WebGL shader passes for gloss/sheen over an HTML product card.
   - Source: https://github.com/remotion-dev/html-in-canvas#storepeel
   - Source code: https://raw.githubusercontent.com/remotion-dev/html-in-canvas/main/src/CubeTransitionCard/index.tsx
   - Shader source: https://raw.githubusercontent.com/remotion-dev/html-in-canvas/main/src/CubeTransitionCard/gl.ts
   - Confidence: High

5. **For live website interaction, proven primitives are safer.**
   - Canvas is broadly supported and suited for animation, photo manipulation, real-time effects, and WebGL-backed 2D/3D graphics.
   - Pointer Events provide device-neutral cursor/touch/pen handling, including pointer capture, pressure, pointer type, and touch geometry.
   - Sources:
     - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
     - https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
   - Confidence: High

6. **Performance doctrine still applies: transform and opacity first.**
   - Web.dev recommends animating transform and opacity, avoiding layout and paint-triggering properties where possible, and using `will-change` only when needed.
   - Source: https://web.dev/articles/animations-guide
   - Confidence: High

7. **Remotion licensing must be checked before commercial use.**
   - Remotion is free for individuals, nonprofits, companies up to 3 employees, and evaluation. Larger commercial organizations need a company license.
   - Source: https://www.remotion.dev/docs/license
   - Confidence: High

## Recommendation
Do not add Remotion HTML-in-canvas directly to the Luke website as a live interactive feature. Use one of these two paths:

### Path A, Production-safe luxury interactions
Build the effects with standard web tech:
- React client component
- Pointer Events
- CSS masks, `clip-path`, `transform`, opacity
- Canvas 2D for scratch/tear masks
- Optional WebGL shader only if the CSS/canvas version is not premium enough

This keeps the website fast, accessible, SEO-safe, and browser-safe.

### Path B, Remotion-powered presentation assets
Use Remotion HTML-in-canvas for rendered artifacts:
- Launch video background snippets
- Sales presentation clips for Luke
- Cinematic social videos
- Interactive-looking demos embedded as video
- OG/hero motion exports if needed

This lets us borrow the 12/10 visual style without gambling the live user experience on an experimental API.

## Best 12/10 Concepts for Luke Mori

### 1. Velvet Listing Reveal
A dark velvet or matte-black privacy veil covers three feature listings. Cursor drag pulls the veil aside with a soft fabric fold, revealing the property photo and price.

Best placement:
- Homepage featured estates
- `/listings/luxury`
- Private/off-market teaser block

Implementation:
- CSS layer with radial/linear mask following pointer
- Canvas texture overlay for fabric grain
- Optional spring drag physics

Risk:
- If overused, it feels gimmicky. Use once.

Verdict:
- Strongest concept. Build a prototype.

### 2. Wax Seal Private Access
A gold/black seal sits over a private buyer preview. Dragging or clicking cracks the seal, then the card opens.

Best placement:
- Buyer page
- Contact page
- Private buyer advisory CTA

Implementation:
- SVG seal pieces with CSS transforms
- Pointer drag optional
- Reduced-motion fallback: simple fade/open

Verdict:
- Very luxury, very brand-safe.

### 3. Frosted Glass Declassification
A listing card begins frosted and blurred. Cursor movement clears a circular inspection lens, then the card resolves fully after intent.

Best placement:
- Sold proof
- Waterfront corridor matrix
- Listing gallery teaser

Implementation:
- CSS backdrop/filter for static state
- Canvas or CSS mask reveal
- Avoid heavy blur on mobile

Verdict:
- Elegant, more Sotheby's than arcade.

### 4. Lake-Surface Gallery Reveal
A subtle Kootenay Lake ripple passes across a listing hero image when the user opens the gallery, like light moving over water.

Best placement:
- Listing detail gallery
- Waterfront page hero

Implementation:
- CSS pseudo-element with animated gradient/displacement illusion
- Optional WebGL only for hero/luxury listing detail

Verdict:
- Premium if subtle. Do not make it wavy nonsense.

### 5. Estate Card Turntable
A featured listing card tilts in 3D on pointer hover, with photo, price, and address sitting on separate depth planes.

Best placement:
- Featured listings
- Sold showcase cards

Implementation:
- Pure CSS 3D transform with pointer variables
- `prefers-reduced-motion` disables tilt

Verdict:
- Easy win, lower risk than canvas.

### 6. Private Folder Pull
Buyer or seller content appears as a private dossier/folder. User drags a tab to reveal concise route options.

Best placement:
- Buyer Route Finder
- Seller Leverage section

Implementation:
- CSS transform and clip path
- No real blocking, CTA remains visible

Verdict:
- Good, but must avoid spy-agency cosplay.

### 7. Sold Proof Curtain Raise
The sold archive starts with a quiet editorial curtain line. On scroll, the curtain rises and the sold proof stats lock into view.

Best placement:
- `/listings/sold`

Implementation:
- Scroll-linked CSS transform using IntersectionObserver
- Fallback visible immediately

Verdict:
- Strong for presentation, not necessary for conversion.

## Guardrails
- Never hide essential content behind interaction. Reveal effects are decoration, not navigation.
- One hero interaction per page max.
- Must work without JavaScript, or at least degrade to visible content.
- Must respect `prefers-reduced-motion`.
- Must avoid fake exclusivity claims.
- Must keep text selectable and readable.
- Must not hurt LCP on the homepage.
- No Remotion dependency in the website unless explicitly approved.
- If using video exports, compress aggressively and provide poster images.

## Implementation Strategy

### Prototype 1: Velvet Listing Reveal
Scope:
- One client component: `LuxuryRevealVeil.tsx`
- Use over one listing card or 3-card feature block
- Pointer drag/cursor reveal
- CSS/canvas only, no dependency
- Reduced-motion fallback

Acceptance criteria:
- Works in Chrome, Safari, Firefox, mobile Safari.
- Revealed content remains in DOM for SEO/accessibility.
- No layout shift.
- No blocking access to CTAs.
- Does not reduce Lighthouse performance materially.

### Prototype 2: Wax Seal Private Access
Scope:
- One SVG/CSS component
- Click/drag breaks the seal and reveals CTA panel
- No canvas needed unless polish demands it

Acceptance criteria:
- Feels premium in under 1 second.
- Keyboard accessible.
- Works with reduced motion.

### Prototype 3: Remotion Sales Clip
Scope:
- Separate experiment outside production Next app
- Recreate StorePeel-style luxury card reveal as a 5-8 second sales clip
- Use existing site screenshots/assets

Acceptance criteria:
- Export MP4/WebM for presentation only.
- Do not wire into production until file size and load strategy are approved.

## Final Call
HTML-in-canvas is not the production tool. The visual idea is absolutely worth stealing.

Build the live website flair with production-safe CSS/canvas/pointer effects. Use Remotion HTML-in-canvas only as a cinematic rendering lab for sales assets or future-proof experimentation. The first prototype should be the Velvet Listing Reveal, followed by a Wax Seal Private Access CTA if the first one lands.

## Sources
- Remotion HTML-in-canvas guide: https://www.remotion.dev/docs/html-in-canvas
- Remotion `<HtmlInCanvas>` API: https://www.remotion.dev/docs/remotion/html-in-canvas
- Remotion examples repository: https://github.com/remotion-dev/html-in-canvas#storepeel
- StorePeel/CubeTransitionCard source: https://raw.githubusercontent.com/remotion-dev/html-in-canvas/main/src/CubeTransitionCard/index.tsx
- StorePeel WebGL shader source: https://raw.githubusercontent.com/remotion-dev/html-in-canvas/main/src/CubeTransitionCard/gl.ts
- WICG HTML-in-canvas explainer: https://github.com/WICG/html-in-canvas
- MDN Canvas API: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- MDN Pointer Events: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- Web.dev high-performance CSS animations: https://web.dev/articles/animations-guide
- Remotion License and Pricing: https://www.remotion.dev/docs/license

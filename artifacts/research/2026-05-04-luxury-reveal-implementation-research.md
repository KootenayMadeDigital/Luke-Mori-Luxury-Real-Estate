# Luxury Reveal Implementation Research
*Date: 2026-05-04 | Confidence: High for implementation path, Medium for final creative impact until Warhead reviews prototype*

## Executive Summary
The safest 12/10 path for the Luke Mori site is not live Remotion HTML-in-canvas. It is a production-safe reveal system built with Pointer Events, CSS transforms, masks, and optional Canvas 2D only where the visual payoff justifies it. For the first test, the best page is `/listings/luxury`, using one editorial feature reveal above the listing grid so the interaction feels intentional, premium, and isolated.

## Best Test Location

### Chosen page
`/listings/luxury`

### Chosen spot
Between the SEO answer block and the Luxury Pockets section.

### Why this is the right test
- It is a high-intent page where theatrical luxury treatment makes sense.
- The audience is already evaluating upper-market properties, so a reveal does not feel random.
- It avoids touching the entire listing grid, preserving search, filters, pagination, and performance.
- It gives Warhead one clean module to judge before we spread anything site-wide.
- It uses real listing data and real photos, no fake luxury props.

## Implementation Options Researched

### 1. CSS transform curtain split
Technique:
- Put two overlay panels over the image.
- Move them with `transform: translateX()` based on a CSS variable or React state.
- Add fabric texture using layered gradients.
- Add a narrow highlight seam and bronze instruction plate.

Pros:
- Fast, GPU-friendly.
- Cross-browser.
- Easy reduced-motion fallback.
- No dependency.
- Easy to delete if Warhead hates it.

Cons:
- Less physically realistic than WebGL cloth simulation.
- Needs careful restraint to avoid theme-park energy.

Verdict:
- Best first prototype.

### 2. CSS mask spotlight reveal
Technique:
- Use `mask-image` or `-webkit-mask-image` with radial gradients that follow pointer position.
- User moves cursor to reveal image/details below a frosted layer.

Research basis:
- MDN documents `mask-image` as a way to hide/reveal parts of an element using image masks and gradients.
- Source: https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image

Pros:
- Elegant inspection-lens effect.
- Good for frosted-glass reveal.

Cons:
- Mask animation support and syntax need care across Safari/Chromium.
- The reveal can feel less like tearing and more like scratching.

Verdict:
- Strong second prototype, not first.

### 3. Clip-path reveal shapes
Technique:
- Use `clip-path: polygon()` or `inset()` to reveal content.
- Can create angular editorial wipes or folder/tab pulls.

Research basis:
- MDN documents clip-path shapes including inset, circle, ellipse, polygon, path, and xywh.
- Source: https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

Pros:
- Good for editorial cutaway effects.
- Lightweight.

Cons:
- Polygon animations can become visually noisy.
- Not as tactile as a curtain split.

Verdict:
- Good for dossier/folder interactions later.

### 4. Canvas 2D scratch or tear mask
Technique:
- Draw a texture overlay to canvas.
- Use pointer strokes with compositing to erase portions and reveal content.

Research basis:
- Canvas compositing supports masking, clearing, clipping paths, and `globalCompositeOperation`.
- Source: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing

Pros:
- Most tactile for “tear/scratch to reveal.”
- Can feel bespoke if done well.

Cons:
- More paint work.
- More accessibility/fallback burden.
- Can feel like a lottery scratch card if not art-directed carefully.

Verdict:
- Use later if the curtain prototype proves the concept deserves heavier craft.

### 5. CSS 3D tilt and depth planes
Technique:
- Use perspective, transform-origin, rotateX/rotateY, translateZ layering.
- Pointer movement gently tilts the card and separates image/text planes.

Research basis:
- MDN documents CSS transforms and 3D transform setup with perspective and transform-origin.
- Source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms

Pros:
- Useful supporting effect.
- Low code.
- Pairs well with reveal.

Cons:
- Too much tilt cheapens luxury.

Verdict:
- Add subtle depth only inside the chosen test module.

### 6. Remotion HTML-in-canvas rendered asset
Technique:
- Render a cinematic listing reveal video from DOM/canvas/WebGL.
- Use as sales demo or embedded video later.

Research basis:
- Remotion docs confirm live API support is Chrome Canary behind a flag, while Remotion rendering can use controlled Chromium.
- Source: https://www.remotion.dev/docs/html-in-canvas

Pros:
- Highest cinematic ceiling.
- Great sales artifact for Luke.

Cons:
- Not suitable for live production interaction yet.
- Licensing must be checked before commercial production use.

Verdict:
- Use for presentation assets, not the first live website test.

## Performance and Accessibility Rules
- Animate transforms and opacity first. Avoid layout-changing properties.
- Use Pointer Events for mouse, pen, and touch.
- Use pointer capture on drag so the interaction does not break when the cursor leaves the card.
- Keep listing content in normal DOM under the decorative layer.
- Add a real button for keyboard and mobile users.
- Respect `prefers-reduced-motion`. In reduced motion, content should be visible without drag choreography.
- Never make the reveal required to access a listing or CTA.
- Do not put this in every card until Warhead approves the feel.

## Recommended Test Build

Component:
`src/components/listing/LuxuryListingReveal.tsx`

Route:
`src/app/listings/luxury/page.tsx`

Behavior:
- Feature the top luxury listing from `sortByPriceDesc(luxuryListings)`.
- Large editorial module with image on one side and listing copy on the other.
- Image starts behind a dark velvet privacy veil.
- User drags across the image, taps the reveal button, or focuses keyboard button to open.
- The veil splits left/right and exposes the listing photo.
- CTAs remain available at all times.

Success criteria:
- One isolated reveal only.
- No new dependencies.
- No production build without Warhead approval.
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- Smoke check `/listings/luxury`.
- Visual screenshot for Warhead review.

## Final Recommendation
Build the first test on `/listings/luxury` as a single top-market reveal module. If Warhead likes it, the next controlled expansions are:
1. Sold proof curtain reveal on `/listings/sold`.
2. Frosted glass private preview on `/buyers`.
3. Lake-surface gallery reveal on waterfront listing detail pages.

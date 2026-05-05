# Luke Mori Luxury Signature Interaction Playbook
*Date: 2026-05-04 PT | Confidence: Medium-High*

## Executive Summary
The curtain reveal should become the first member of a controlled interaction language, not a one-off gimmick. The strongest next feature is a Wax Seal Private Access interaction because it maps directly to discretion, invitation, and seller/buyer conversion. Frosted Glass should follow for sold/private proof. Lake-light gallery motion is valuable but should be restricted to waterfront contexts only.

Core rule: every signature interaction must communicate a business truth. If it only says "cool website," kill it.

## Evidence and Design Constraints
- NN/g: UI motion should be unobtrusive, brief, subtle, and mostly used for feedback, state change, navigation metaphors, and signifiers. Motion attracts attention and can distract when not tied to the task. Source: https://www.nngroup.com/articles/animation-purpose-ux/
- NN/g heuristics: interactions should match real-world mental models, preserve user control/freedom, reduce recall burden, and maintain aesthetic/minimalist design. Source: https://www.nngroup.com/articles/ten-usability-heuristics/
- web.dev: high-performance animations should favor `transform` and `opacity`, avoid layout/paint-triggering properties, and use `will-change` sparingly. Source: https://web.dev/articles/animations-guide
- web.dev and MDN: reduced-motion support is mandatory for users who request less motion; decorative motion should be reduced or replaced. Sources: https://web.dev/articles/prefers-reduced-motion and https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

## The Signature Interaction System

### 1. Curtain Reveal: Presentation and First Impression
**Meaning:** A serious property deserves ceremony, pacing, and a memorable first look.

**Use only on:**
- Homepage seller launch preview, already implemented.
- `/listings/luxury`, already implemented.
- Future: one listing detail hero only if the listing is truly prestige and the photo earns it.

**Do not use on:** grids, sold archives, contact forms, every listing page.

**Mechanics standard:**
- Tactile cloth hover and drag.
- Ceremony props disappear early once the image earns attention.
- Direct `View property` CTA visible in the image viewport on mobile.
- Reduced-motion fallback: static premium image, simple buttons.

**Conversion job:** Make sellers think: "My home would be treated properly here." Make buyers pause before filtering mechanically.

### 2. Wax Seal Private Access: Invitation and Discretion
**Meaning:** Crossing a threshold into a quieter conversation.

**Best placement:**
1. Homepage `PrivateAccess` section, replacing the current simple CTA.
2. `/sellers` near the final seller CTA.
3. Optional: `/buyers/international`, because privacy and confidence matter for remote/high-stakes buyers.

**Recommended implementation:**
- A black/bronze Luke Mori seal sits over a private access card.
- First hover/press creates tiny pressure, specular ring shift, and wax surface indentation.
- Click or drag cracks the seal along precomputed SVG crack paths, then the seal separates into two or three pieces using transform/opacity only.
- Revealed panel contains the actual CTA: private homes, quiet sale, or confidential consult.
- On repeat visits or after activation, show it already opened or condensed so it does not annoy.

**Psychology stack:**
- Scarcity without fake urgency: private access is real because some sellers do not want public exposure.
- Endowment effect: visitor feels they are entering something selected.
- Commitment/threshold effect: opening the seal is a micro-commitment before asking for the consult.
- Status signaling: wax seal feels deliberate and private without saying "VIP nonsense."

**Copy direction:**
- Eyebrow: `Private Access`
- Headline: `Some homes should not start in public.`
- Body: `Tell Luke what you are looking for, or what you may sell. If a quieter path makes sense, he can tell you before the market gets involved.`
- CTA: `Request Private Access`
- Secondary: `Discuss a Quiet Sale`

**Anti-patterns:**
- Do not use red wax. Too wedding/invitation cliché.
- Do not animate a full parchment letter. Corny.
- Do not make it hard to access the CTA. The seal is a threshold, not a lock.
- Do not use fake secrecy like "members only" unless it is operationally true.

**Build priority:** Highest. It has the best conversion fit and lowest risk.

### 3. Frosted Glass Declassification: Proof and Controlled Disclosure
**Meaning:** Public proof is visible, client details remain protected.

**Best placement:**
1. `/listings/sold`, within a premium sold proof module.
2. A private seller section explaining quiet-sale handling.
3. Possibly a "private previews" buyer card, but only if it does not feel spy-themed.

**Recommended implementation:**
- Sold card starts as frosted glass over image/details.
- Cursor or touch creates an inspection lens that clears a circular/rounded region.
- The lens reveals only public proof: image, sold status, area, property type, offered price where already public.
- Optional click locks the reveal open.
- Mobile: tap-to-clear, not finger-follow blur if performance suffers.

**Psychology stack:**
- Curiosity gap: enough hidden detail to invite interaction.
- Authority/proof: Luke has handled serious properties.
- Privacy reassurance: the interaction demonstrates discretion instead of just claiming it.
- Cognitive fluency: the reveal must make proof easier to read, not harder.

**Copy direction:**
- Eyebrow: `Controlled Proof`
- Headline: `Public results. Private details.`
- Body: `The market can see the result. The client story stays protected.`

**Anti-patterns:**
- No "classified dossier" military styling. Wrong brand.
- No fake redactions over facts that are already public.
- No blur over every card. Use on one hero sold proof or one premium row.

**Build priority:** Second. Best for credibility after the private access seal.

### 4. Lake-Surface Gallery Reveal: Waterfront Emotion
**Meaning:** Waterfront should feel different before the buyer reads the spec sheet.

**Best placement:**
1. `/listings/waterfront` hero/listing intro.
2. `/kootenay-lake-waterfront-real-estate` page.
3. Waterfront listing detail gallery, if the page has multiple water/lake images.

**Recommended implementation:**
- On opening a waterfront gallery, a subtle band of Kootenay-lake-style reflected light travels across the image edge.
- Cursor movement creates a barely visible caustic highlight, not a literal water simulation.
- Use a static pseudo-element or WebGL/canvas overlay only over the image stage, not the whole page.
- Mobile: one tap shimmer on gallery open. No continuous effects.

**Psychology stack:**
- Sensory priming: buyer feels water before reading about it.
- Place attachment: makes Kootenay Lake emotional, not just searchable.
- Salience: waterfront pages become distinct from generic listing pages.

**Copy direction:**
- Eyebrow: `Waterfront Context`
- Headline: `The water is part of the value.`
- Body: `Shoreline, exposure, access, and privacy decide more than the photo count. Luke helps buyers read those details before they tour.`

**Anti-patterns:**
- No pool ripple effect.
- No animated waves across text.
- No looping decorative motion while reading.
- No effect on non-waterfront homes.

**Build priority:** Third. Beautiful, but narrow.

## Rollout Rules
1. **One meaning per effect.** Curtain equals presentation. Seal equals private access. Glass equals proof/discretion. Lake-light equals waterfront.
2. **One hero use per page.** A page can have one signature interaction. More than one becomes a theme park.
3. **Interaction must reveal value.** If the user interacts and only gets animation, remove it.
4. **Mobile gets simpler, not weaker.** Tap affordances must be local to the image/CTA. Drag should be optional.
5. **Reduced motion is not optional.** Decorative motion becomes static image, fade, or instant state.
6. **No new dependency by default.** CSS, SVG, Canvas 2D, raw WebGL, Pointer Events first. Three/R3F only if we need true 3D geometry and Warhead approves dependencies.
7. **Photos must earn it.** Never put a signature reveal over lots, weak interiors, or mediocre imagery.
8. **No fake exclusivity.** The copy must describe actual service behavior Luke can stand behind.

## Recommended Build Sequence
1. **Wax Seal Private Access on homepage**
   - Replace/upgrade `PrivateAccess`.
   - Keep section dark lake atmosphere.
   - Add seal threshold interaction and two CTAs.
   - Reduced-motion fallback: open premium card.

2. **Wax Seal variant on `/sellers`**
   - Use seller language: quiet sale, launch plan, privacy.
   - CTA to consult form.

3. **Frosted Glass sold proof hero**
   - One sold proof card only at first.
   - Cursor/tap inspection lens reveals public proof.

4. **Lake-light gallery on waterfront pages**
   - Add only after visual QA confirms earlier interactions do not overload the site.

## Acceptance Criteria for Any Signature Interaction
- It has a named business purpose.
- It improves comprehension, desire, or trust.
- It has an obvious exit/CTA.
- It is usable on mobile in under 2 seconds.
- It works with keyboard or has a non-motion accessible equivalent.
- It respects `prefers-reduced-motion`.
- It animates only transform/opacity or GPU-contained canvas/WebGL.
- It does not obscure the property image once the payoff begins.

## Final Recommendation
Build Wax Seal Private Access next. It is the cleanest, most Luke-compatible upgrade: premium, discreet, conversion-oriented, and safe. Frosted glass and lake-light are excellent, but they should follow once the seal proves the interaction system feels like a luxury brand language instead of a portfolio stunt.

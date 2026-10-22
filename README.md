# Keertika & Aswin · Bespoke Wedding Invitation Website

A responsive, high-fidelity reproduction of the Italian Lace wedding invitation reference website ([plantillalace.thedigitalyes.com](https://plantillalace.thedigitalyes.com/)), integrating the custom **"K & A" monogrammed opening video** with audio, animations, typography, and interactive controls.

---

## 🌟 Key Features

1. **Integrated Opening Video Experience**
   - Integrates the user-supplied opening video (`gemini_generated_video_8eb72810.mp4`).
   - Custom-generated high-resolution poster frame showing the delicate ivory lace envelope with pearls and the central **"K & A"** wax seal.
   - Interactive glassmorphic callout pill (*"Tap anywhere to open · Music will play"*) and a top-right *"Skip"* button.
   - User gesture initiates audio playback safely without browser autoplay blocking.
   - Video plays smoothly with the wax seal lifting and the envelope unfolding.
   - Seamless crossfade transition into the hero section inside the floral lace oval frame.
   - Responsive presentation across mobile (9:16 full-bleed) and desktop (centered portrait envelope with ambient blurred backdrop, preventing awkward cropping or black bars).
   - Reduced-motion accessibility support.

2. **Section Hierarchy (Matching Reference Website)**
   - **Hero Section**: Architectural villa illustration, names (*Keertika & Aswin*), date (*20.05.2027*), and venue (*Villa Aurelia, Rome, Italy*) within an embroidered lace frame.
   - **Invitation & Quote Section**: Heart-shaped interlocking swans motif with formal invitation wording.
   - **Countdown Section**: Scalloped floral lace border top and bottom, ivory ribbon bows frame, live 4-column countdown timer (Days, Hours, Minutes, Seconds) against the rich burgundy textured background.
   - **Location Section**: Monsieur La Doulaise script font for *Villa Aurelia*, description, terrace illustration, and *"Get Directions"* Google Maps button.
   - **The Day (Timeline)**: Vertical timeline with heart milestones, illustrated motifs (Welcome fountain, Ceremony floral arches, Cocktail martini glasses with bows, Dinner banquet platter, Dancing disco ball), and event times.
   - **Dress Code**: Wedding cake, candle, and cocktail table illustration at top; couple in formal evening attire within an embossed lace frame with pearls.
   - **Transportation**: Italian cypress hill road with private bus illustration, departure details, and *"View Pick-Up Point"* link.
   - **Where to Stay**: Romantic terrace balcony loop illustration, Roman numerals **I** and **II** in ornate lace headers, recommended hotel cards (*Grand Hotel del Gianicolo*, *Donna Camilla Savelli*).
   - **Wedding Gift**: Oval lace frame with direct transfer details and IBAN.
   - **RSVP Form**: Interactive attendance selection (*Joyfully accepts / Regretfully declines*), guest count, plus-one, children counter, dietary requirements, and couple message.
   - **Footer**: Top lace swag garland, interlocking wedding rings motif, couple names, and closing love message.
   - **Floating Audio Player**: Bottom-right floating round glassmorphic button with sound wave / mute icons to toggle the romantic background music (`until-were-gone-opt.mp3`) anytime.

3. **Central Configuration (`wedding-config.js`)**
   - Easily update bride & groom names, wedding date, venue, maps URL, invitation wording, and hashtags in a single configuration file without touching minified assets.

---

## 🚀 How to Run Locally

### Option A: Using Node.js
```bash
npm start
# Or directly:
node serve.js
```
Open [http://localhost:3000](http://localhost:3000) in any browser.

### Option B: Using any static HTTP server
You can serve the directory or the `public` folder using any static web server (e.g. `npx serve public`, Python `python -m http.server 3000`, etc.).

---

## 📱 Tested Viewports

Verified with automated headless Chromium across all required resolutions:
- Mobile: 360 × 800 (Samsung Galaxy / Android standard)
- Mobile: 390 × 844 (iPhone 12 / 13 / 14)
- Mobile: 430 × 932 (iPhone 14 / 15 / 16 Pro Max)
- Tablet: 768 × 1024 (iPad portrait)
- Desktop: 1366 × 768 (Standard laptop)
- Desktop: 1920 × 1080 (Full HD desktop)

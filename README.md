# Keerthy & Ashwin · Bespoke Wedding Website Clone

A high-fidelity, responsive reproduction and custom clone of the Italian Lace wedding invitation reference website, customized for **Keerthy Krishna & Ashwin Anil**.

---

## 🌟 Wedding Details & Section Architecture

### 1. Integrated Monogram Opening Experience
- **Opening Video**: Custom monogrammed **"K & A"** wax seal envelope opening video (`/opening-video.mp4`).
- **Interactive Callout**: *"Tap anywhere to open · Music will play"* glassmorphic pill and *"Skip"* button.
- **Audio Control**: Seamless audio playback initiation on user interaction without browser autoplay blocking.
- **Floating Music Player**: Bottom-right floating glassmorphic toggle with sound wave / mute icons playing background audio (`until-were-gone-opt.mp3`).

### 2. Page 1 — The Wedding Invitation
- **Introductory Text**: *"With the blessing and love of their families"*
- **Parents' Names**:
  - Mrs. Reji Murali & Mr. Murali Krishnan
  - *together with*
  - Mrs. Sherly Anil & Dr. Anil Kumar
- **Invitation**: *"Cordially invite you to celebrate the wedding of"*
- **Couple**:
  - **Keerthy Krishna**
  - &
  - **Ashwin Anil**
- **Message**: *"As they unite in marriage and begin a beautiful new chapter of their lives, surrounded by the people they love most."*
- **Wedding Date & Muhurtham**:
  - **20 JANUARY 2027**
  - **MUHURTHAM 11:00 AM**
- **Venue**:
  - Contour Backwaters Hotel Resort & Convention Centre
  - Changanassery, Keralam.
- **Closing Message**:
  - *"Two hearts, two families, one beautiful beginning."*
  - *"Your gracious presence and blessings will make this joyous occasion truly memorable."*

### 3. Page 2 — The Countdown to Forever
- **Heading**: **THE COUNTDOWN TO FOREVER**
- **Couple**: **Keerthy & Ashwin**
- **Subheading**: **THEIR BIG DAY IS ALMOST HERE!**
- **Live Countdown Timer**: [DAYS] : [HOURS] : [MINUTES] : [SECONDS]
- **Target**: **20 January 2027 at 11:00 AM IST (UTC+05:30)** (`2027-01-20T11:00:00+05:30`)
- **Message**: *"Every second brings them closer to their happily ever after."*
- **Celebration Trigger**: Displays an elegant wedding celebration message once the target is reached, prevents negative values, and cleans up timers on unmount.
- **Frame**: Ivory ribbon bows frame against rich burgundy textured background with scalloped lace borders.

### 4. Page 3 — The Wedding Reception
- **Main Heading**: **EVENING ELEGANCE** (corrected spelling)
- **Supporting Text**:
  - *"An evening of love & celebration."*
  - *"A day to celebrate, from the first hello to the last dance."*
- **Reception Invitation**: *"Together with our families, we invite you to join us for an evening of celebration, laughter and togetherness as we mark this special milestone in our lives."*
- **Couple**: **Keerthy & Ashwin**
- **Date & Time**: **22 January 2027 · 6:00 PM onwards**
- **Venue**:
  - **CHAKOLAS PAVILION CONVENTION CENTRE, KALAMASSERY**
  - Ernakulam, Keralam
- **Reception Timeline**:
  - 6:00 PM: Welcome & Aperitivo (Fountain motif)
  - 7:00 PM: Evening Celebrations & Toasts (Martini glass motif)
  - 8:00 PM: Grand Dinner Banquet (Dinner banquet platter motif)
  - 9:30 PM: Music & Dancing (Disco ball motif)
- **Closing Message**:
  - *"Good company, happy hearts and beautiful memories—let's make this evening unforgettable!"*
  - *"With love, and a thousand thank-yous in advance!"*
- **Decoration**: Scalloped top lace swag garland and animated banquet table illustration with ambient breeze effect.

### 5. Locations & Additional Sections
- **The Venues**: Dedicated Google Maps directions links for both Contour Backwaters (Muhurtham) and Chakolas Pavilion (Reception).
- **Dress Code**: Traditional & Evening Elegance with formal couple illustration on lace frame with pearls.
- **Transportation**: Travel & valet parking coordination for Changanassery & Kalamassery.
- **Where to Stay**: Curated accommodation cards with codes and map links for Changanassery and Kalamassery.
- **Wedding Gift**: *"Your presence and blessings are our greatest gift."*
- **RSVP Form**: Interactive attendance, guest count, and message submission for Muhurtham and Reception.
- **Footer**: Interlocking wedding rings, couple names, date, and closing blessings.

---

## 🛠️ Technology Stack & Framework Preservation

- **Framework**: Original React & Vite production bundle preserved exactly as provided.
- **Zero Framework Migration**: All components, stylesheets, SVG assets, animations (Framer Motion), fonts, and layouts remain in their native format.
- **Configuration**: Fully configurable via [wedding-config.js](file:///d:/Works%202026%20(Domain%20ads)/Wedding%20invite%20website/KEERTHY%20&%20ASHWIN/wedding-config.js).
- **Server**: Native Node.js HTTP server ([serve.js](file:///d:/Works%202026%20(Domain%20ads)/Wedding%20invite website/KEERTHY%20&%20ASHWIN/serve.js)) with HTTP range request support for audio and video streaming.

---

## 🚀 Running the Project

### Local Development Server
```bash
npm start
# or
node serve.js
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Automated Testing
```bash
npm test
# or
node test_edge.js
```

const fs = require('fs');

console.log('--- Applying Text Contrast and Readability Fixes ---');

// =========================================================================
// 1. CSS UPDATES (public/assets/index-tbesyw6S.css and assets/index-tbesyw6S.css)
// =========================================================================
const cssHighContrastRules = `
/* ============================================================
   HIGH-CONTRAST TYPOGRAPHY & READABILITY OVERRIDES
   ============================================================ */

:root {
  --foreground: 345 52% 12% !important;
  --card-foreground: 345 52% 12% !important;
  --popover-foreground: 345 52% 12% !important;
  --muted-foreground: 345 45% 20% !important;
  --burgundy: 345 52% 12% !important;
  --burgundy-dark: 345 55% 8% !important;
}

/* Remove stroke that erodes font stems with background ivory */
h1, h2, h3, h4, h5, h6,
.font-display,
.section-title,
.hero-title,
.invitation-couple,
.reception-couple,
.admin-stat {
  -webkit-text-stroke: 0 !important;
  text-shadow: none !important;
}

/* Cursive script stroke: strengthen font stem cleanly */
.font-ballet, .font-doulaise {
  -webkit-text-stroke: 0.35px currentColor !important;
  paint-order: stroke fill !important;
}

/* Font weight enhancements for mobile readability */
.font-helvetica {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  font-weight: 400 !important;
}

.font-body {
  font-weight: 450 !important;
}

/* Hero soft radial backdrop for text readability against video */
.hero-backdrop-soft {
  background: radial-gradient(ellipse at center, rgba(250, 247, 242, 0.88) 0%, rgba(250, 247, 242, 0.72) 60%, rgba(250, 247, 242, 0.22) 84%, transparent 100%) !important;
  border-radius: 2rem !important;
  padding: 1.25rem 0.75rem !important;
  width: 100% !important;
  max-width: 520px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

@media (min-width: 640px) {
  .hero-backdrop-soft {
    padding: 2.25rem 1.75rem !important;
  }
}

/* Fluid couple titles */
.hero-title {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(32px, 8.5vw, 62px) !important;
  line-height: 1 !important;
  color: #1b080e !important;
  word-break: normal;
  overflow-wrap: break-word;
}

.invitation-couple {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(25px, 7.2vw, 54px) !important;
  line-height: 1.05 !important;
  color: #1b080e !important;
  word-break: normal;
  overflow-wrap: break-word;
}

.reception-couple {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(24px, 6.5vw, 44px) !important;
  line-height: 1.05 !important;
  color: #1b080e !important;
}

/* Page 2: Countdown Frame Specifics */
.countdown-frame-box {
  width: 94% !important;
  max-width: 440px !important;
  aspect-ratio: 1627 / 1513 !important;
  margin-left: auto !important;
  margin-right: auto !important;
  position: relative !important;
}

.countdown-heading-text {
  font-family: 'Instrument Serif', serif !important;
  font-size: clamp(9px, 2.6vw, 13px) !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  line-height: 1.2 !important;
  color: #f5f0e8 !important;
  margin-bottom: 2px !important;
}

.countdown-couple-text {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(22px, 6.5vw, 42px) !important;
  line-height: 1 !important;
  color: #f5f0e8 !important;
  margin-top: 1px !important;
  margin-bottom: 2px !important;
}

.countdown-subheading-text {
  font-family: Inter, sans-serif !important;
  font-size: clamp(7.5px, 2.2vw, 10px) !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
  color: rgba(245, 240, 232, 0.9) !important;
  margin-bottom: clamp(3px, 1.2vw, 8px) !important;
}

.countdown-digits-text {
  font-family: 'Instrument Serif', serif !important;
  font-size: clamp(20px, 5.8vw, 44px) !important;
  line-height: 1 !important;
  color: #f5f0e8 !important;
  font-variant-numeric: tabular-nums !important;
  font-feature-settings: 'tnum' !important;
}

.countdown-labels-text {
  font-family: Inter, sans-serif !important;
  font-size: clamp(7px, 1.9vw, 9.5px) !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: rgba(245, 240, 232, 0.92) !important;
  margin-top: clamp(2px, 0.7vw, 5px) !important;
  line-height: 1.2 !important;
}

.countdown-msg-text {
  font-family: Helvetica, Arial, sans-serif !important;
  font-weight: 300 !important;
  font-style: italic !important;
  font-size: clamp(8px, 2.2vw, 11px) !important;
  line-height: 1.35 !important;
  color: rgba(245, 240, 232, 0.88) !important;
  max-width: 85% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: clamp(4px, 1.2vw, 10px) !important;
}

/* Timeline responsive adjustments */
.timeline-icon-box {
  width: clamp(38px, 11vw, 76px) !important;
  height: clamp(38px, 11vw, 76px) !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  mix-blend-mode: multiply !important;
}

.timeline-time-text {
  font-family: 'Instrument Serif', serif !important;
  font-size: clamp(16px, 4.5vw, 28px) !important;
  line-height: 1 !important;
  flex-shrink: 0 !important;
  color: #1b080e !important;
  font-weight: 600 !important;
}
`;

function updateCSS(filePath) {
  let css = fs.readFileSync(filePath, 'utf8');
  const marker = '/* ============================================================';
  const markerIdx = css.indexOf(marker);
  if (markerIdx !== -1) {
    css = css.slice(0, markerIdx).trim();
  }
  css += '\n\n' + cssHighContrastRules.trim() + '\n';
  fs.writeFileSync(filePath, css);
  console.log('Updated CSS:', filePath);
}

updateCSS('public/assets/index-tbesyw6S.css');
updateCSS('assets/index-tbesyw6S.css');


// =========================================================================
// 2. JS BUNDLE UPDATES (public/assets/index-BtxrvcwD.js and assets/index-BtxrvcwD.js)
// =========================================================================
let js = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

// --- Component 1: Hero (JI) with soft radial vignette and solid contrast ---
const upgradedJI = `function JI({name1:e,name2:t,date:n,showText:r,onVideoEnded:s}){const i=m.useRef(null),o=m.useRef(null),[a,l]=m.useState(0),c=m.useRef(!1),[d,f]=m.useState(null),[h,p]=m.useState(!1);m.useEffect(()=>{var v;if(r){(v=i.current)==null||v.play().catch(()=>{}),s==null||s();const _=setTimeout(()=>p(!0),800);return()=>clearTimeout(_)}},[r]);const b=v=>{if(v!==a||c.current)return;const _=v===0?i.current:o.current,S=v===0?o.current:i.current;!_||!S||!_.duration||_.duration-_.currentTime<=eh&&(c.current=!0,S.currentTime=0,S.play().catch(()=>{}),f(v),l(v===0?1:0),window.setTimeout(()=>{_.pause(),f(null),c.current=!1},eh*1e3+100))};return u.jsxs("section",{className:"relative min-h-[100dvh] flex flex-col overflow-hidden bg-background",children:[u.jsx("div",{className:"absolute inset-0 bg-background"}),[i,o].map((v,_)=>u.jsx("video",{ref:v,src:UI.url,className:"absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out pointer-events-none",style:{opacity:a===_||d===_?1:0,zIndex:a===_?2:1,transitionDuration:a===_?\`\${eh*1e3}ms\`:"0ms"},playsInline:!0,muted:!0,preload:"auto",onTimeUpdate:()=>b(_)},_)),u.jsx("div",{className:\`relative z-20 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 transition-opacity duration-[2000ms] ease-out \${h?"opacity-100":"opacity-0"}\`,children:u.jsxs("div",{className:"hero-backdrop-soft flex flex-col items-center justify-center",children:[u.jsx("p",{className:"font-display text-[#1b080e] text-xs sm:text-base md:text-[18px] tracking-[0.14em] uppercase leading-snug max-w-sm sm:max-w-md font-medium",children:(window.WEDDING_CONFIG?.parentsIntro||"With the blessing and love of their families")}),u.jsxs("div",{className:"mt-4 sm:mt-6 md:mt-7 flex flex-col items-center w-full px-2",children:[u.jsx("h1",{className:"hero-title",children:(window.WEDDING_CONFIG?.partnerAFull||e)}),u.jsx("p",{className:"font-display text-[#1b080e] text-base sm:text-lg md:text-xl leading-none my-1 sm:my-1.5 md:my-2 font-medium",children:"&"}),u.jsx("h1",{className:"hero-title",children:(window.WEDDING_CONFIG?.partnerBFull||t)})]}),u.jsx("p",{className:"font-display text-[#1b080e] text-sm sm:text-base md:text-xl mt-3 sm:mt-4 md:mt-5 tracking-[0.16em] uppercase font-semibold",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"font-body text-[11.5px] sm:text-xs md:text-sm text-[#240c14] tracking-[0.24em] uppercase mt-1 font-semibold",children:(window.WEDDING_CONFIG?.muhurtham||"MUHURTHAM 11:00 AM")}),u.jsx("img",{src:QI.url,alt:"","aria-hidden":"true",className:"pointer-events-none select-none w-[170px] xs:w-[200px] sm:w-[240px] md:w-[280px] max-w-[70vw] h-auto mt-3 sm:mt-4 md:mt-5"}),u.jsxs("div",{className:"mt-3 sm:mt-4 md:mt-5 flex flex-col items-center max-w-[340px] sm:max-w-md px-2",children:[u.jsx("p",{className:"font-display text-[#1b080e] text-base sm:text-lg md:text-2xl tracking-wide leading-snug font-normal",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-[#240c14] text-[11.5px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-1 font-semibold",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")})]})]})})]})};`;

const jiStart = js.indexOf('function JI({name1:e,name2:t,date:n,showText:r,onVideoEnded:s}){');
const jiEnd = js.indexOf('const XI=1,e$=', jiStart);
if (jiStart !== -1 && jiEnd !== -1) {
  js = js.slice(0, jiStart) + upgradedJI + js.slice(jiEnd);
  console.log('Upgraded JI component in JS bundle.');
} else {
  console.error('Could not locate JI boundaries!');
}


// --- Component 2: First Invitation Screen Card (I$) ---
const upgradedI$ = `function I$(){const e=ha();return u.jsx("section",{id:"invitation",className:"pt-16 sm:pt-20 md:pt-28 pb-28 sm:pb-36 md:pb-48 px-4 sm:px-6 bg-background",children:u.jsx("div",{className:"max-w-2xl mx-auto text-center",children:u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[u.jsx("div",{className:"mx-auto mb-5 w-32 sm:w-40 md:w-52",children:u.jsx(O$,{className:"pointer-events-none select-none relative w-full h-auto text-[#1b080e]","aria-hidden":"true",animateWater:!e})}),u.jsx("p",{className:"font-display text-[#1b080e] text-base sm:text-lg md:text-2xl tracking-[0.14em] uppercase leading-snug px-2 font-medium",children:(window.WEDDING_CONFIG?.parentsIntro||"With the blessing and love of their families")}),u.jsxs("div",{className:"my-5 sm:my-6 space-y-1.5 px-2",children:[u.jsx("p",{className:"font-display text-[#1b080e] text-sm sm:text-base md:text-xl tracking-wide font-normal",children:(window.WEDDING_CONFIG?.parentsBride||"Mrs. Reji Murali & Mr. Murali Krishnan")}),u.jsx("p",{className:"font-display italic text-xs sm:text-sm md:text-base text-[#34141e] my-1 font-normal",children:"together with"}),u.jsx("p",{className:"font-display text-[#1b080e] text-sm sm:text-base md:text-xl tracking-wide font-normal",children:(window.WEDDING_CONFIG?.parentsGroom||"Mrs. Sherly Anil & Dr. Anil Kumar")})]}),u.jsx("p",{className:"font-body text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-[#240c14] my-4 sm:my-5 px-2 font-semibold",children:(window.WEDDING_CONFIG?.invitationLead||"Cordially invite you to celebrate the wedding of")}),u.jsxs("div",{className:"my-5 sm:my-7 md:my-8 px-2",children:[u.jsx("h2",{className:"invitation-couple",children:(window.WEDDING_CONFIG?.partnerAFull||"Keerthy Krishna")}),u.jsx("p",{className:"font-display text-[#1b080e] text-lg md:text-2xl my-1.5 sm:my-2 leading-none font-medium",children:"&"}),u.jsx("h2",{className:"invitation-couple",children:(window.WEDDING_CONFIG?.partnerBFull||"Ashwin Anil")})]}),u.jsx("p",{className:"font-helvetica text-[#220a12] text-[13.5px] sm:text-[15px] md:text-[17px] leading-relaxed max-w-lg mx-auto my-5 px-3 sm:px-4 font-normal",children:(window.WEDDING_CONFIG?.invitationMessage||"As they unite in marriage and begin a beautiful new chapter of their lives, surrounded by the people they love most.")}),u.jsxs("div",{className:"my-6 sm:my-8 border-y border-[#1b080e]/30 py-4 sm:py-5 max-w-sm sm:max-w-md mx-auto px-2",children:[u.jsx("p",{className:"font-display text-lg sm:text-xl md:text-3xl tracking-[0.16em] uppercase text-[#1b080e] leading-tight font-semibold",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"font-body text-[11px] sm:text-xs md:text-sm tracking-[0.26em] uppercase text-[#240c14] mt-1.5 font-bold",children:(window.WEDDING_CONFIG?.muhurtham||"MUHURTHAM 11:00 AM")})]}),u.jsxs("div",{className:"my-5 sm:my-6 space-y-1 px-3 sm:px-4 max-w-md mx-auto",children:[u.jsx("p",{className:"font-display text-base sm:text-xl md:text-2xl text-[#1b080e] leading-snug font-normal",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-xs sm:text-sm md:text-base text-[#240c14] uppercase tracking-[0.15em] mt-1 font-semibold",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")})]}),u.jsxs("div",{className:"mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#1b080e]/20 max-w-lg mx-auto space-y-2 px-3 sm:px-4",children:[u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-lg text-[#1b080e] leading-relaxed font-normal",children:(window.WEDDING_CONFIG?.weddingClosing1||"Two hearts, two families, one beautiful beginning.")}),u.jsx("p",{className:"font-helvetica text-xs sm:text-[13.5px] md:text-[15px] text-[#220a12] leading-relaxed font-normal",children:(window.WEDDING_CONFIG?.weddingClosing2||"Your gracious presence and blessings will make this joyous occasion truly memorable.")})]})]})})})};`;

const iStart = js.indexOf('function I$(){');
const iEnd = js.indexOf('const $=(', iStart);
if (iStart !== -1 && iEnd !== -1) {
  js = js.slice(0, iStart) + upgradedI$ + js.slice(iEnd);
  console.log('Upgraded I$ component in JS bundle.');
} else {
  console.error('Could not locate I$ boundaries!');
}


// --- Component 3: Reception Screen & Card (sV) ---
const upgradedsV = `function sV(){const receptionTimeline=[{label:"Welcome",icon:$8.url,time:"6:00 PM",desc:"Arrival of guests to an evening of music, refreshments and warm embraces."},{label:"Celebration",icon:TL.url,time:"7:00 PM",desc:"Toasting the newlyweds as we celebrate laughter, love and togetherness."},{label:"Dinner",icon:ML.url,time:"8:00 PM",desc:"A sumptuous grand dinner banquet celebrating the union of two families."},{label:"Dancing",icon:I8.url,time:"9:30 PM",desc:"The party begins — music, dancing and making this evening unforgettable!"}];return u.jsx("section",{id:"reception",className:"py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background relative",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-8 sm:mb-12 relative",children:[u.jsx(nV,{className:"pointer-events-none select-none relative left-1/2 -translate-x-1/2 w-[116vw] max-w-none h-auto -mt-24 sm:-mt-28 md:-mt-40 -mb-4 md:-mb-6 z-0"}),u.jsx("h2",{className:"relative z-10 font-display text-3xl sm:text-5xl md:text-7xl text-[#1b080e] uppercase tracking-wide font-normal",children:(window.WEDDING_CONFIG?.receptionHeading||"EVENING ELEGANCE")}),u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-xl text-[#240c14] mt-2 sm:mt-3 px-2 font-medium",children:(window.WEDDING_CONFIG?.receptionSupport1||"An evening of love & celebration.")}),u.jsxs("p",{className:"text-[#220a12] text-xs sm:text-[13.5px] md:text-[15px] mt-1.5 font-helvetica leading-relaxed px-2 font-normal",children:["A day to celebrate,",u.jsx("br",{}),"from the first hello to the last dance."]})]}),u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"my-6 sm:my-8 max-w-lg mx-auto bg-[#faf7f2]/95 sm:bg-white/80 rounded-2xl p-5 sm:p-7 md:p-8 border border-[#1b080e]/25 text-center shadow-md",children:[u.jsx("p",{className:"reception-couple mb-2 sm:mb-3",children:(window.WEDDING_CONFIG?.coupleTitle||"Keerthy & Ashwin")}),u.jsx("p",{className:"font-helvetica text-xs sm:text-[13.5px] md:text-[15px] text-[#220a12] leading-relaxed mb-4 sm:mb-6 font-normal px-2",children:(window.WEDDING_CONFIG?.receptionInvitation||"Together with our families, we invite you to join us for an evening of celebration, laughter and togetherness as we mark this special milestone in our lives.")}),u.jsxs("div",{className:"border-y border-[#1b080e]/25 py-3 sm:py-4 my-4",children:[u.jsx("p",{className:"font-display text-lg sm:text-xl md:text-2xl tracking-[0.14em] text-[#1b080e] uppercase leading-tight font-semibold",children:(window.WEDDING_CONFIG?.receptionDateDisplay||"22 January 2027")}),u.jsx("p",{className:"font-body text-[11px] sm:text-xs md:text-sm tracking-[0.22em] text-[#240c14] uppercase mt-1 font-bold",children:(window.WEDDING_CONFIG?.receptionTime||"6:00 PM onwards")})]}),u.jsxs("div",{className:"mt-3 sm:mt-4 space-y-1 max-w-sm mx-auto px-2",children:[u.jsx("p",{className:"font-display text-sm sm:text-base md:text-lg text-[#1b080e] uppercase tracking-wider leading-snug font-medium",children:(window.WEDDING_CONFIG?.receptionVenue||"CHAKOLAS PAVILION CONVENTION CENTRE, KALAMASSERY")}),u.jsx("p",{className:"font-display text-[11.5px] sm:text-xs md:text-sm text-[#240c14] uppercase tracking-widest mt-0.5 font-semibold",children:(window.WEDDING_CONFIG?.receptionCity||"Ernakulam, Keralam")})]})]}),u.jsxs("div",{className:"relative max-w-md mx-auto my-8 sm:my-12",children:[u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-[#1b080e]/40"}),u.jsx("div",{className:"space-y-8 sm:space-y-10 md:space-y-12",children:receptionTimeline.map((item,n)=>u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.08},className:"relative grid grid-cols-[minmax(0,1fr)_14px_minmax(0,1.2fr)] items-center gap-x-2 sm:gap-x-4 md:gap-x-5",children:[u.jsxs("div",{className:"flex min-w-0 items-center justify-end gap-1.5 sm:gap-2",children:[u.jsx("div",{className:"timeline-icon-box",children:item.label==="Celebration"?u.jsx(eD,{}):item.label==="Welcome"?u.jsx(T2,{type:"fountain"}):item.label==="Dancing"?u.jsx(T2,{type:"disco"}):u.jsx("img",{src:item.icon,alt:"",className:"w-full h-full object-contain pointer-events-none select-none",loading:"lazy"})}),u.jsx("span",{className:"timeline-time-text",children:item.time})]}),u.jsx(aE,{size:10,className:"shrink-0 self-center text-[#1b080e]",fill:"currentColor",strokeWidth:0}),u.jsxs("div",{className:"min-w-0 flex-1 leading-snug pl-1.5 sm:pl-2 text-left",children:[u.jsx("span",{className:"block font-body text-[11px] sm:text-xs md:text-sm tracking-[0.16em] uppercase text-[#1b080e] font-bold",children:item.label}),u.jsx("span",{className:"block mt-0.5 font-helvetica text-[#220a12] text-[11px] sm:text-[12px] md:text-[13.5px] leading-relaxed font-normal break-words",children:item.desc})]})]},item.label))})]}),u.jsxs(ce.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mt-8 sm:mt-10 mb-4 max-w-lg mx-auto text-center px-4 space-y-2",children:[u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-lg text-[#1b080e] leading-relaxed font-normal",children:(window.WEDDING_CONFIG?.receptionClosing1||"Good company, happy hearts and beautiful memories—let's make this evening unforgettable!")}),u.jsx("p",{className:"font-helvetica text-xs sm:text-sm text-[#220a12] tracking-wide font-normal",children:(window.WEDDING_CONFIG?.receptionClosing2||"With love, and a thousand thank-yous in advance!")})]}),u.jsx(ce.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"relative left-1/2 -translate-x-1/2 w-[160%] max-w-none -mt-2 md:-mt-4",children:u.jsx(OM,{})})]})})};`;

const sStart = js.indexOf('function sV(){');
const sEnd = js.indexOf('const iV=1,oV=', sStart);
if (sStart !== -1 && sEnd !== -1) {
  js = js.slice(0, sStart) + upgradedsV + js.slice(sEnd);
  console.log('Upgraded sV component in JS bundle.');
} else {
  console.error('Could not locate sV boundaries!');
}


// --- Component 4: The Venues (mV) ---
const upgradedmV = `function mV(){return u.jsx("section",{id:"location",className:"pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 bg-background",children:u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"max-w-xl mx-auto text-center",children:[u.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-6xl text-[#1b080e] leading-none uppercase tracking-wide font-normal",children:"The Venues"}),u.jsxs("div",{className:"mt-6 sm:mt-8 p-5 sm:p-7 rounded-2xl border border-[#1b080e]/25 bg-[#faf7f2]/90 sm:bg-white/70 shadow-sm",children:[u.jsx("p",{className:"font-body text-[10.5px] sm:text-xs tracking-[0.2em] uppercase text-[#240c14] mb-1 font-bold",children:"Wedding Muhurtham · 20 January 2027 · 11:00 AM"}),u.jsx("p",{className:"font-display text-xl sm:text-2xl md:text-3xl text-[#1b080e] leading-snug mt-1 font-normal",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-[#240c14] text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] mt-1 font-semibold",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")}),u.jsx("a",{href:(window.WEDDING_CONFIG?.weddingMapsUrl||"https://www.google.com/maps/search/?api=1&query=Contour+Backwaters+Hotel+Resort+Changanassery+Kerala"),target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-4 rounded-full border border-[#1b080e]/45 px-6 sm:px-8 py-2 sm:py-2.5 text-[#1b080e] font-semibold hover:bg-[#1b080e] hover:text-[#faf7f2] transition-colors shadow-xs",children:u.jsx("span",{className:"block font-body text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase font-bold",children:"View Wedding Location"})})]}),u.jsxs("div",{className:"mt-5 sm:mt-6 p-5 sm:p-7 rounded-2xl border border-[#1b080e]/25 bg-[#faf7f2]/90 sm:bg-white/70 shadow-sm",children:[u.jsx("p",{className:"font-body text-[10.5px] sm:text-xs tracking-[0.2em] uppercase text-[#240c14] mb-1 font-bold",children:"Wedding Reception · 22 January 2027 · 6:00 PM"}),u.jsx("p",{className:"font-display text-xl sm:text-2xl md:text-3xl text-[#1b080e] leading-snug mt-1 font-normal",children:(window.WEDDING_CONFIG?.receptionVenue||"CHAKOLAS PAVILION CONVENTION CENTRE, KALAMASSERY")}),u.jsx("p",{className:"font-display text-[#240c14] text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] mt-1 font-semibold",children:(window.WEDDING_CONFIG?.receptionCity||"Ernakulam, Keralam")}),u.jsx("a",{href:(window.WEDDING_CONFIG?.receptionMapsUrl||"https://www.google.com/maps/search/?api=1&query=Chakolas+Pavilion+Convention+Centre+Kalamassery+Kochi"),target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-4 rounded-full border border-[#1b080e]/45 px-6 sm:px-8 py-2 sm:py-2.5 text-[#1b080e] font-semibold hover:bg-[#1b080e] hover:text-[#faf7f2] transition-colors shadow-xs",children:u.jsx("span",{className:"block font-body text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase font-bold",children:"View Reception Location"})})]}),u.jsx("div",{className:"relative left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[60%] max-w-none mt-8 sm:mt-10",children:u.jsx("img",{loading:"lazy",decoding:"async",src:pV.url,alt:"Terrace illustration",className:"w-full h-auto select-none pointer-events-none",draggable:!1})})]})})};`;

const mvStart = js.indexOf('function mV(){');
const mvEnd = js.indexOf('const gV=', mvStart);
if (mvStart !== -1 && mvEnd !== -1) {
  js = js.slice(0, mvStart) + upgradedmV + js.slice(mvEnd);
  console.log('Upgraded mV component in JS bundle.');
} else {
  console.error('Could not locate mV boundaries!');
}


// --- Component 5: Footer (bH) ---
const upgradedbH = `function bH({name1:e,name2:t,date:n}){return u.jsxs("footer",{className:"relative pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-20 text-center px-4 sm:px-6",children:[u.jsx("img",{loading:"lazy",decoding:"async",src:wH.url,alt:"","aria-hidden":"true",className:"pointer-events-none select-none absolute left-1/2 top-5 -translate-x-1/2 -translate-y-[calc(18%+29px)] w-[110%] md:w-[82%] max-w-none h-auto z-20"}),u.jsxs(ce.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},children:[u.jsx(xH,{className:"w-16 sm:w-24 md:w-32 h-auto mx-auto mb-6 sm:mb-8 -mt-2 text-[#1b080e] pointer-events-none select-none"}),u.jsx("p",{className:"font-display italic text-base sm:text-xl md:text-2xl text-[#1b080e] mb-2 leading-relaxed max-w-md mx-auto px-2 font-normal",children:"Two hearts, two families, one beautiful beginning."}),u.jsx("p",{className:"font-helvetica text-xs sm:text-sm md:text-base text-[#220a12] mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto leading-relaxed px-2 font-normal",children:"Your gracious presence and blessings will make this joyous occasion truly memorable."}),u.jsx("p",{className:"text-[11.5px] sm:text-[13px] text-[#240c14] font-helvetica mb-2 sm:mb-3 font-semibold",children:"With love,"}),u.jsxs("p",{className:"font-display text-3xl sm:text-4xl md:text-6xl text-[#1b080e] mb-3 sm:mb-4 leading-tight font-normal",children:[(window.WEDDING_CONFIG?.partnerA||e)," ",u.jsx("span",{className:"text-2xl sm:text-3xl md:text-4xl text-[#34141e] italic font-normal",children:"&"})," ",(window.WEDDING_CONFIG?.partnerB||t)]}),u.jsx("p",{className:"text-[11.5px] sm:text-[13px] text-[#240c14] font-helvetica tracking-wide uppercase font-semibold",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"text-[11px] sm:text-xs text-[#34141e] mt-8 sm:mt-12 font-helvetica tracking-wider font-semibold",children:(window.WEDDING_CONFIG?.hashtag||"#KeerthyAndAshwin")})]})]})};`;

const bhStart = js.indexOf('function bH({name1:e,name2:t,date:n}){');
const bhEnd = js.indexOf('const Ds=', bhStart);
if (bhStart !== -1 && bhEnd !== -1) {
  js = js.slice(0, bhStart) + upgradedbH + js.slice(bhEnd);
  console.log('Upgraded bH component in JS bundle.');
} else {
  console.error('Could not locate bH boundaries!');
}


// Validate syntax before writing
try {
  new Function(js);
  console.log('Bundle syntax validation PASSED!');
} catch (err) {
  console.error('FATAL SYNTAX ERROR IN BUNDLE:', err.message);
  process.exit(1);
}

// Save to both public/assets and assets
fs.writeFileSync('public/assets/index-BtxrvcwD.js', js);
fs.writeFileSync('assets/index-BtxrvcwD.js', js);
console.log('All updates successfully saved to both bundles!');

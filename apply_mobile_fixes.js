const fs = require('fs');

// --- PART 1: CSS ENHANCEMENTS ---
const cssAdditions = `
/* ============================================================
   MOBILE-FIRST RESPONSIVE FIXES — KEERTHY & ASHWIN
   ============================================================ */

/* Prevent horizontal scrollbars and ensure natural vertical flow */
html, body {
  overflow-x: hidden !important;
  max-width: 100vw;
}

/* Fluid responsive typography */
.hero-title {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(32px, 8.5vw, 62px) !important;
  line-height: 1 !important;
  word-break: normal;
  overflow-wrap: break-word;
}

.invitation-couple {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(25px, 7.2vw, 54px) !important;
  line-height: 1.05 !important;
  word-break: normal;
  overflow-wrap: break-word;
}

.reception-couple {
  font-family: 'Ballet Clean', Ballet, cursive !important;
  font-size: clamp(24px, 6.5vw, 44px) !important;
  line-height: 1.05 !important;
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
  color: rgba(245, 240, 232, 0.85) !important;
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
  color: rgba(245, 240, 232, 0.9) !important;
  margin-top: clamp(2px, 0.7vw, 5px) !important;
  line-height: 1.2 !important;
}

.countdown-msg-text {
  font-family: Helvetica, Arial, sans-serif !important;
  font-weight: 300 !important;
  font-style: italic !important;
  font-size: clamp(8px, 2.2vw, 11px) !important;
  line-height: 1.35 !important;
  color: rgba(245, 240, 232, 0.85) !important;
  max-width: 85% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: clamp(4px, 1.2vw, 10px) !important;
}

/* Timeline responsive adjustments */
.timeline-icon-box {
  width: clamp(40px, 12vw, 82px) !important;
  height: clamp(40px, 12vw, 82px) !important;
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
  color: hsl(var(--foreground)) !important;
}
`;

function patchCSS(filePath) {
  let css = fs.readFileSync(filePath, 'utf8');
  if (!css.includes('MOBILE-FIRST RESPONSIVE FIXES')) {
    css += '\n' + cssAdditions;
    fs.writeFileSync(filePath, css);
    console.log(`Patched CSS: ${filePath}`);
  } else {
    // Replace existing additions
    const idx = css.indexOf('/* ============================================================');
    css = css.slice(0, idx) + cssAdditions.trim();
    fs.writeFileSync(filePath, css);
    console.log(`Updated CSS: ${filePath}`);
  }
}

patchCSS('public/assets/index-tbesyw6S.css');
patchCSS('assets/index-tbesyw6S.css');


// --- PART 2: JS BUNDLE REFINEMENTS ---
let code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

// 1. Refined opening video callout for small screens (320px)
const enhancedY = `y$=({onEnter:e,onStartMusic:t,onShowHeroText:n})=>{const[r,s]=m.useState("idle"),[i,o]=m.useState(!1),[a,l]=m.useState(!1),c=m.useRef(null),d=()=>{var v;r==="idle"&&(s("envelope"),t==null||t(),(v=c.current)==null||v.play().catch(()=>{p()}))},f=m.useRef(!1),h=()=>{f.current||(f.current=!0,n==null||n())},p=()=>{h(),s(v=>v==="envelope"?"fading":v)},b=()=>{const v=c.current;if(!v||(v.currentTime>.05&&!i&&o(!0),!v.duration))return;const _=v.duration-v.currentTime;_<1.8&&h(),_<1&&p()},g=()=>p(),x=()=>{r!=="fading"||a||(l(!0),e())},w=r==="idle"||r==="envelope"&&!i,y=r!=="idle",rm=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return u.jsxs(ce.div,{className:"fixed inset-0 z-50 cursor-pointer bg-[#0e0709] overflow-hidden select-none",onClick:d,initial:{opacity:1},animate:{opacity:r==="fading"||r==="done"?0:1},transition:{duration:rm?.1:1.6,ease:"easeInOut"},onAnimationComplete:x,style:{pointerEvents:r==="fading"||r==="done"?"none":"auto"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none select-none",children:u.jsx("img",{src:S2,alt:"",className:"w-full h-full object-cover blur-3xl opacity-35 scale-110",draggable:!1})}),u.jsxs("div",{className:"relative w-full h-full flex items-center justify-center pointer-events-none",children:[u.jsx("img",{src:S2,alt:"",className:"absolute inset-0 m-auto w-full h-full object-contain pointer-events-none select-none transition-opacity duration-500",style:{opacity:w?1:0},draggable:!1}),u.jsx("video",{ref:c,src:v$,poster:S2,className:"absolute inset-0 m-auto w-full h-full object-contain pointer-events-none select-none transition-opacity duration-700 ease-in-out",style:{opacity:y?1:0},onTimeUpdate:b,onEnded:g,onError:()=>p(),playsInline:!0,muted:!0,preload:"auto"})]}),r==="idle"&&u.jsxs("div",{className:"absolute inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-opacity duration-700 px-4",style:{bottom:"clamp(36px, 8vh, 58px)"},children:[u.jsx("div",{style:{background:"rgba(20, 10, 15, 0.76)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.45)",borderRadius:"9999px",padding:"clamp(8px, 2.4vw, 11px) clamp(18px, 5vw, 30px)",color:"#ffffff",fontFamily:"'Instrument Serif', serif",letterSpacing:"clamp(0.12em, 0.5vw, 0.22em)",textTransform:"uppercase",fontSize:"clamp(11px, 3.2vw, 14px)",boxShadow:"0 10px 30px rgba(0,0,0,0.45)",display:"inline-block",maxWidth:"90vw",textAlign:"center"},children:(window.WEDDING_CONFIG?.openingPrompt||"Tap anywhere to open")}),u.jsx("span",{style:{marginTop:"6px",color:"rgba(255,255,255,0.92)",fontFamily:"Inter, sans-serif",fontSize:"clamp(9.5px, 2.5vw, 11px)",letterSpacing:"0.16em",textTransform:"uppercase",textShadow:"0 2px 4px rgba(0,0,0,0.6)"},children:(window.WEDDING_CONFIG?.openingSubPrompt||"Music will play")})]}),r!=="fading"&&r!=="done"&&u.jsx("button",{type:"button",onClick:k=>{k.stopPropagation(),p()},style:{position:"absolute",top:"clamp(14px, 3vw, 24px)",right:"clamp(14px, 3vw, 24px)",zIndex:30,background:"rgba(20, 10, 15, 0.65)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.35)",borderRadius:"9999px",padding:"clamp(5px, 1.5vw, 7px) clamp(14px, 3.5vw, 20px)",color:"#ffffff",fontFamily:"Inter, sans-serif",fontSize:"clamp(9.5px, 2.5vw, 11px)",letterSpacing:"0.16em",textTransform:"uppercase",boxShadow:"0 4px 15px rgba(0,0,0,0.3)",cursor:"pointer"},children:"Skip"})]})};`;

const yStart = code.indexOf('y$=({onEnter:e,onStartMusic:t,onShowHeroText:n})=>{');
const yEnd = code.indexOf(';function w$({isMuted:e,onToggle:t})', yStart);
if (yStart !== -1 && yEnd !== -1) {
  code = code.slice(0, yStart) + enhancedY + code.slice(yEnd);
  console.log('Replaced y$ opening with mobile-first responsiveness.');
}

// 2. Refined Hero JI
const newJI = `function JI({name1:e,name2:t,date:n,showText:r,onVideoEnded:s}){const i=m.useRef(null),o=m.useRef(null),[a,l]=m.useState(0),c=m.useRef(!1),[d,f]=m.useState(null),[h,p]=m.useState(!1);m.useEffect(()=>{var v;if(r){(v=i.current)==null||v.play().catch(()=>{}),s==null||s();const _=setTimeout(()=>p(!0),800);return()=>clearTimeout(_)}},[r]);const b=v=>{if(v!==a||c.current)return;const _=v===0?i.current:o.current,S=v===0?o.current:i.current;!_||!S||!_.duration||_.duration-_.currentTime<=eh&&(c.current=!0,S.currentTime=0,S.play().catch(()=>{}),f(v),l(v===0?1:0),window.setTimeout(()=>{_.pause(),f(null),c.current=!1},eh*1e3+100))};return u.jsxs("section",{className:"relative min-h-[100dvh] flex flex-col overflow-hidden bg-background",children:[u.jsx("div",{className:"absolute inset-0 bg-background"}),[i,o].map((v,_)=>u.jsx("video",{ref:v,src:UI.url,className:"absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out pointer-events-none",style:{opacity:a===_||d===_?1:0,zIndex:a===_?2:1,transitionDuration:a===_?\`\${eh*1e3}ms\`:"0ms"},playsInline:!0,muted:!0,preload:"auto",onTimeUpdate:()=>b(_)},_)),u.jsxs("div",{className:\`relative z-20 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 transition-opacity duration-[2000ms] ease-out \${h?"opacity-100":"opacity-0"}\`,children:[u.jsx("p",{className:"font-display text-foreground text-xs sm:text-base md:text-[18px] tracking-[0.14em] uppercase leading-snug max-w-sm sm:max-w-md",children:(window.WEDDING_CONFIG?.parentsIntro||"With the blessing and love of their families")}),u.jsxs("div",{className:"mt-5 sm:mt-7 md:mt-8 flex flex-col items-center w-full px-2",children:[u.jsx("h1",{className:"hero-title text-foreground",children:(window.WEDDING_CONFIG?.partnerAFull||e)}),u.jsx("p",{className:"font-display text-foreground text-base sm:text-lg md:text-xl leading-none my-1.5 sm:my-2 md:my-3",children:"&"}),u.jsx("h1",{className:"hero-title text-foreground",children:(window.WEDDING_CONFIG?.partnerBFull||t)})]}),u.jsx("p",{className:"font-display text-foreground text-sm sm:text-base md:text-xl mt-4 sm:mt-5 md:mt-6 tracking-[0.16em] uppercase",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"font-body text-[11px] sm:text-xs md:text-sm text-foreground/80 tracking-[0.24em] uppercase mt-1",children:(window.WEDDING_CONFIG?.muhurtham||"MUHURTHAM 11:00 AM")}),u.jsx("img",{src:QI.url,alt:"","aria-hidden":"true",className:"pointer-events-none select-none w-[170px] xs:w-[200px] sm:w-[240px] md:w-[280px] max-w-[70vw] h-auto mt-4 sm:mt-5 md:mt-6"}),u.jsxs("div",{className:"mt-4 sm:mt-5 md:mt-6 flex flex-col items-center max-w-md px-3",children:[u.jsx("p",{className:"font-display text-foreground text-base sm:text-lg md:text-2xl tracking-wide leading-snug",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-foreground/75 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-1",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")})]})]})]})}`;

const jiStart = code.indexOf('function JI({name1:e,name2:t,date:n,showText:r,onVideoEnded:s}){');
const jiEnd = code.indexOf('const XI=1,e$=', jiStart);
if (jiStart !== -1 && jiEnd !== -1) {
  code = code.slice(0, jiStart) + newJI + code.slice(jiEnd);
  console.log('Replaced JI with mobile-first responsiveness.');
}

// 3. Refined Invitation I$ (Page 1)
const newI$ = `function I$(){const e=ha();return u.jsx("section",{id:"invitation",className:"pt-16 sm:pt-20 md:pt-28 pb-28 sm:pb-36 md:pb-48 px-4 sm:px-6 bg-background",children:u.jsx("div",{className:"max-w-2xl mx-auto text-center",children:u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[u.jsx("div",{className:"mx-auto mb-5 w-32 sm:w-40 md:w-52",children:u.jsx(O$,{className:"pointer-events-none select-none relative w-full h-auto text-foreground","aria-hidden":"true",animateWater:!e})}),u.jsx("p",{className:"font-display text-foreground text-base sm:text-lg md:text-2xl tracking-[0.14em] uppercase leading-snug px-2",children:(window.WEDDING_CONFIG?.parentsIntro||"With the blessing and love of their families")}),u.jsxs("div",{className:"my-5 sm:my-6 space-y-1.5 text-foreground/90 px-2",children:[u.jsx("p",{className:"font-display text-sm sm:text-base md:text-xl tracking-wide",children:(window.WEDDING_CONFIG?.parentsBride||"Mrs. Reji Murali & Mr. Murali Krishnan")}),u.jsx("p",{className:"font-display italic text-xs sm:text-sm md:text-base text-foreground/60 my-1",children:"together with"}),u.jsx("p",{className:"font-display text-sm sm:text-base md:text-xl tracking-wide",children:(window.WEDDING_CONFIG?.parentsGroom||"Mrs. Sherly Anil & Dr. Anil Kumar")})]}),u.jsx("p",{className:"font-body text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/75 my-4 sm:my-5 px-2",children:(window.WEDDING_CONFIG?.invitationLead||"Cordially invite you to celebrate the wedding of")}),u.jsxs("div",{className:"my-5 sm:my-7 md:my-8 px-2",children:[u.jsx("h2",{className:"invitation-couple text-foreground",children:(window.WEDDING_CONFIG?.partnerAFull||"Keerthy Krishna")}),u.jsx("p",{className:"font-display text-foreground text-lg md:text-2xl my-1.5 sm:my-2 leading-none",children:"&"}),u.jsx("h2",{className:"invitation-couple text-foreground",children:(window.WEDDING_CONFIG?.partnerBFull||"Ashwin Anil")})]}),u.jsx("p",{className:"font-helvetica font-light text-foreground/80 text-[13px] sm:text-[14px] md:text-[17px] leading-relaxed max-w-lg mx-auto my-5 px-3 sm:px-4",children:(window.WEDDING_CONFIG?.invitationMessage||"As they unite in marriage and begin a beautiful new chapter of their lives, surrounded by the people they love most.")}),u.jsxs("div",{className:"my-6 sm:my-8 border-y border-foreground/20 py-4 sm:py-5 max-w-sm sm:max-w-md mx-auto px-2",children:[u.jsx("p",{className:"font-display text-lg sm:text-xl md:text-3xl tracking-[0.16em] uppercase text-foreground leading-tight",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"font-body text-[10px] sm:text-xs md:text-sm tracking-[0.26em] uppercase text-foreground/75 mt-1.5 font-medium",children:(window.WEDDING_CONFIG?.muhurtham||"MUHURTHAM 11:00 AM")})]}),u.jsxs("div",{className:"my-5 sm:my-6 space-y-1 px-3 sm:px-4",children:[u.jsx("p",{className:"font-display text-base sm:text-xl md:text-2xl text-foreground leading-snug",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-xs sm:text-sm md:text-base text-foreground/70 uppercase tracking-[0.15em] mt-1",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")})]}),u.jsxs("div",{className:"mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-foreground/15 max-w-lg mx-auto space-y-2 px-3 sm:px-4",children:[u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed",children:(window.WEDDING_CONFIG?.weddingClosing1||"Two hearts, two families, one beautiful beginning.")}),u.jsx("p",{className:"font-helvetica font-light text-xs sm:text-[13px] md:text-[15px] text-foreground/75 leading-relaxed",children:(window.WEDDING_CONFIG?.weddingClosing2||"Your gracious presence and blessings will make this joyous occasion truly memorable.")})]})]})})})}`;

const iStart = code.indexOf('function I$(){');
const iEnd = code.indexOf('const $=(', iStart);
if (iStart !== -1 && iEnd !== -1) {
  code = code.slice(0, iStart) + newI$ + code.slice(iEnd);
  console.log('Replaced I$ with mobile-first responsiveness.');
}

// 4. Refined Countdown fM (Page 2) with exact classes
const newfM = `function fM({targetDate:e}){const[n,r]=m.useState(()=>M$(e));m.useEffect(()=>{const i=()=>r(M$(e));i();const o=setInterval(i,1e3);return()=>clearInterval(o)},[e]);const s=[{value:n.days,label:"Days"},{value:n.hours,label:"Hours"},{value:n.minutes,label:"Mins"},{value:n.seconds,label:"Secs"}];return u.jsxs("section",{id:"countdown",className:"relative -mt-14 py-20 sm:py-24 md:py-32 px-1 z-30 bg-[#6f2a3b]",style:{backgroundImage:\`url(\${nM.url})\`,backgroundSize:"640px",backgroundRepeat:"repeat"},children:[u.jsxs("div",{className:"countdown-frame-box text-center",children:[u.jsx("img",{loading:"lazy",decoding:"async",src:K$.url,alt:"",className:"absolute inset-0 h-full w-full -translate-x-[5px] object-contain pointer-events-none select-none"}),u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center px-[8%] sm:px-[12%]",children:[u.jsx(ce.h2,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"countdown-heading-text",children:(window.WEDDING_CONFIG?.countdownHeading||"THE COUNTDOWN TO FOREVER")}),u.jsx(ce.p,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"countdown-couple-text",children:(window.WEDDING_CONFIG?.coupleTitle||"Keerthy & Ashwin")}),u.jsx(ce.p,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.15},className:"countdown-subheading-text",children:(window.WEDDING_CONFIG?.countdownSubheading||"THEIR BIG DAY IS ALMOST HERE!")}),n.isFinished?u.jsx(ce.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"my-1.5 px-3 py-1.5 bg-black/25 rounded-lg text-center",children:u.jsxs("div",{children:[u.jsx("p",{className:"font-display text-sm sm:text-lg text-[#f5f0e8]",children:"Today is the Big Day!"}),u.jsx("p",{className:"font-ballet text-xl sm:text-2xl text-[#f5f0e8] mt-0.5",children:"Keerthy & Ashwin"}),u.jsx("p",{className:"font-body text-[8px] sm:text-[9px] tracking-widest uppercase text-[#f5f0e8]/85 mt-0.5",children:"Happily Ever After Begins!"})]})}):u.jsx(ce.div,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"grid grid-cols-4 w-full items-center gap-0.5 sm:gap-1.5 px-0.5 sm:px-1 my-0.5",children:s.map(i=>u.jsxs("div",{className:"flex min-w-0 flex-col items-center justify-center relative",children:[u.jsx("span",{className:"countdown-digits-text drop-shadow-sm",children:String(i.value).padStart(2,"0")}),u.jsx("span",{className:"countdown-labels-text",children:i.label})]},i.label))}),u.jsx(ce.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.3},className:"countdown-msg-text italic",children:(window.WEDDING_CONFIG?.countdownMessage||"Every second brings them closer to their happily ever after.")})]})]}),u.jsx("img",{loading:"lazy",decoding:"async",src:E2.url,alt:"",className:"absolute top-0 left-0 w-full -translate-y-1/2 rotate-180 z-40 pointer-events-none select-none",draggable:!1}),u.jsx("img",{loading:"lazy",decoding:"async",src:E2.url,alt:"",className:"absolute bottom-0 left-0 w-full translate-y-1/2 z-40 pointer-events-none select-none",draggable:!1})]})};`;

const fStart = code.indexOf('function fM({targetDate:e}){');
const fEnd = code.indexOf('const hM=1,pM=', fStart);
if (fStart !== -1 && fEnd !== -1) {
  code = code.slice(0, fStart) + newfM + code.slice(fEnd);
  console.log('Replaced fM with mobile-first responsiveness.');
}

// 5. Refined Reception sV (Page 3)
const newsV = `function sV(){const receptionTimeline=[{label:"Welcome",icon:$8.url,time:"6:00 PM",desc:"Arrival of guests to an evening of music, refreshments and warm embraces."},{label:"Celebration",icon:TL.url,time:"7:00 PM",desc:"Toasting the newlyweds as we celebrate laughter, love and togetherness."},{label:"Dinner",icon:ML.url,time:"8:00 PM",desc:"A sumptuous grand dinner banquet celebrating the union of two families."},{label:"Dancing",icon:I8.url,time:"9:30 PM",desc:"The party begins — music, dancing and making this evening unforgettable!"}];return u.jsx("section",{id:"reception",className:"py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background relative",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-8 sm:mb-12 relative",children:[u.jsx(nV,{className:"pointer-events-none select-none relative left-1/2 -translate-x-1/2 w-[116vw] max-w-none h-auto -mt-24 sm:-mt-28 md:-mt-40 -mb-4 md:-mb-6 z-0"}),u.jsx("h2",{className:"relative z-10 font-display text-3xl sm:text-5xl md:text-7xl text-foreground uppercase tracking-wide",children:(window.WEDDING_CONFIG?.receptionHeading||"EVENING ELEGANCE")}),u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-xl text-foreground/80 mt-2 sm:mt-3 px-2",children:(window.WEDDING_CONFIG?.receptionSupport1||"An evening of love & celebration.")}),u.jsxs("p",{className:"text-foreground/70 text-xs sm:text-[13px] md:text-[15px] mt-1.5 font-helvetica leading-relaxed px-2",children:["A day to celebrate,",u.jsx("br",{}),"from the first hello to the last dance."]})]}),u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"my-6 sm:my-8 max-w-lg mx-auto bg-foreground/[0.03] rounded-2xl p-4 sm:p-6 md:p-8 border border-foreground/15 text-center shadow-sm",children:[u.jsx("p",{className:"reception-couple text-foreground mb-2 sm:mb-3",children:(window.WEDDING_CONFIG?.coupleTitle||"Keerthy & Ashwin")}),u.jsx("p",{className:"font-helvetica font-light text-xs sm:text-[13px] md:text-[15px] text-foreground/85 leading-relaxed mb-4 sm:mb-6",children:(window.WEDDING_CONFIG?.receptionInvitation||"Together with our families, we invite you to join us for an evening of celebration, laughter and togetherness as we mark this special milestone in our lives.")}),u.jsxs("div",{className:"border-y border-foreground/20 py-3 sm:py-4 my-4",children:[u.jsx("p",{className:"font-display text-lg sm:text-xl md:text-2xl tracking-[0.14em] text-foreground uppercase leading-tight",children:(window.WEDDING_CONFIG?.receptionDateDisplay||"22 January 2027")}),u.jsx("p",{className:"font-body text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-foreground/75 uppercase mt-1 font-medium",children:(window.WEDDING_CONFIG?.receptionTime||"6:00 PM onwards")})]}),u.jsxs("div",{className:"mt-3 sm:mt-4 space-y-0.5",children:[u.jsx("p",{className:"font-display text-sm sm:text-base md:text-lg text-foreground uppercase tracking-wider leading-snug",children:(window.WEDDING_CONFIG?.receptionVenue||"CHAKOLAS PAVILION CONVENTION CENTRE, KALAMASSERY")}),u.jsx("p",{className:"font-display text-[11px] sm:text-xs md:text-sm text-foreground/70 uppercase tracking-widest mt-0.5",children:(window.WEDDING_CONFIG?.receptionCity||"Ernakulam, Keralam")})]})]}),u.jsxs("div",{className:"relative max-w-md mx-auto my-8 sm:my-12",children:[u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-foreground/50"}),u.jsx("div",{className:"space-y-8 sm:space-y-10 md:space-y-12",children:receptionTimeline.map((item,n)=>u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.08},className:"relative grid grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] items-center gap-x-2 sm:gap-x-4 md:gap-x-5",children:[u.jsxs("div",{className:"flex min-w-0 items-center justify-end gap-1.5 sm:gap-2",children:[u.jsx("div",{className:"timeline-icon-box",children:item.label==="Celebration"?u.jsx(eD,{}):item.label==="Welcome"?u.jsx(T2,{type:"fountain"}):item.label==="Dancing"?u.jsx(T2,{type:"disco"}):u.jsx("img",{src:item.icon,alt:"",className:"w-full h-full object-contain pointer-events-none select-none",loading:"lazy"})}),u.jsx("span",{className:"timeline-time-text",children:item.time})]}),u.jsx(aE,{size:10,className:"shrink-0 self-center text-foreground",fill:"currentColor",strokeWidth:0}),u.jsxs("span",{className:"leading-snug pl-1",children:[u.jsx("span",{className:"block font-body text-[10px] sm:text-xs md:text-sm tracking-[0.16em] uppercase text-foreground font-medium",children:item.label}),u.jsx("span",{className:"block mt-0.5 font-helvetica text-foreground/70 text-[10px] sm:text-[11px] md:text-[13px] leading-relaxed",children:item.desc})]})]},item.label))})]}),u.jsxs(ce.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mt-8 sm:mt-10 mb-4 max-w-lg mx-auto text-center px-4 space-y-2",children:[u.jsx("p",{className:"font-display italic text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed",children:(window.WEDDING_CONFIG?.receptionClosing1||"Good company, happy hearts and beautiful memories—let's make this evening unforgettable!")}),u.jsx("p",{className:"font-helvetica text-xs sm:text-sm text-foreground/70 tracking-wide",children:(window.WEDDING_CONFIG?.receptionClosing2||"With love, and a thousand thank-yous in advance!")})]}),u.jsx(ce.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"relative left-1/2 -translate-x-1/2 w-[160%] max-w-none -mt-2 md:-mt-4",children:u.jsx(OM,{})})]})})}`;

const sStart = code.indexOf('function sV(){');
const sEnd = code.indexOf('const iV=1,oV=', sStart);
if (sStart !== -1 && sEnd !== -1) {
  code = code.slice(0, sStart) + newsV + code.slice(sEnd);
  console.log('Replaced sV with mobile-first responsiveness.');
}

// 6. Refined Venues mV
const newmV = `function mV(){return u.jsx("section",{id:"location",className:"pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 bg-background",children:u.jsxs(ce.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"max-w-xl mx-auto text-center mix-blend-multiply",children:[u.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-6xl text-foreground leading-none uppercase tracking-wide",children:"The Venues"}),u.jsxs("div",{className:"mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl border border-foreground/20 bg-foreground/[0.02]",children:[u.jsx("p",{className:"font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-foreground/60 mb-1",children:"Wedding Muhurtham · 20 January 2027 · 11:00 AM"}),u.jsx("p",{className:"font-display text-xl sm:text-2xl md:text-3xl text-foreground leading-snug mt-1",children:(window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")}),u.jsx("p",{className:"font-display text-foreground/75 text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] mt-1",children:(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam.")}),u.jsx("a",{href:(window.WEDDING_CONFIG?.weddingMapsUrl||"https://www.google.com/maps/search/?api=1&query=Contour+Backwaters+Hotel+Resort+Changanassery+Kerala"),target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-3.5 sm:mt-4 rounded-full border border-foreground/35 px-6 sm:px-8 py-2 sm:py-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors",children:u.jsx("span",{className:"block font-body text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium",children:"View Wedding Location"})})]}),u.jsxs("div",{className:"mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl border border-foreground/20 bg-foreground/[0.02]",children:[u.jsx("p",{className:"font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-foreground/60 mb-1",children:"Wedding Reception · 22 January 2027 · 6:00 PM"}),u.jsx("p",{className:"font-display text-xl sm:text-2xl md:text-3xl text-foreground leading-snug mt-1",children:(window.WEDDING_CONFIG?.receptionVenue||"CHAKOLAS PAVILION CONVENTION CENTRE, KALAMASSERY")}),u.jsx("p",{className:"font-display text-foreground/75 text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] mt-1",children:(window.WEDDING_CONFIG?.receptionCity||"Ernakulam, Keralam")}),u.jsx("a",{href:(window.WEDDING_CONFIG?.receptionMapsUrl||"https://www.google.com/maps/search/?api=1&query=Chakolas+Pavilion+Convention+Centre+Kalamassery+Kochi"),target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-3.5 sm:mt-4 rounded-full border border-foreground/35 px-6 sm:px-8 py-2 sm:py-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors",children:u.jsx("span",{className:"block font-body text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium",children:"View Reception Location"})})]}),u.jsx("div",{className:"relative left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[60%] max-w-none mt-8 sm:mt-10",children:u.jsx("img",{loading:"lazy",decoding:"async",src:pV.url,alt:"Terrace illustration",className:"w-full h-auto select-none pointer-events-none",draggable:!1})})]})})}`;

const mvStart = code.indexOf('function mV(){');
const mvEnd = code.indexOf('const gV=', mvStart);
if (mvStart !== -1 && mvEnd !== -1) {
  code = code.slice(0, mvStart) + newmV + code.slice(mvEnd);
  console.log('Replaced mV with mobile-first responsiveness.');
}

// 7. Refined Footer bH
const newbH = `function bH({name1:e,name2:t,date:n}){return u.jsxs("footer",{className:"relative pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-20 text-center px-4 sm:px-6",children:[u.jsx("img",{loading:"lazy",decoding:"async",src:wH.url,alt:"","aria-hidden":"true",className:"pointer-events-none select-none absolute left-1/2 top-5 -translate-x-1/2 -translate-y-[calc(18%+29px)] w-[110%] md:w-[82%] max-w-none h-auto z-20"}),u.jsxs(ce.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},children:[u.jsx(xH,{className:"w-16 sm:w-24 md:w-32 h-auto mx-auto mb-6 sm:mb-8 -mt-2 text-foreground pointer-events-none select-none"}),u.jsx("p",{className:"font-display italic text-base sm:text-xl md:text-2xl text-foreground/85 mb-2 leading-relaxed max-w-md mx-auto px-2",children:"Two hearts, two families, one beautiful beginning."}),u.jsx("p",{className:"font-helvetica font-light text-xs sm:text-sm md:text-base text-foreground/75 mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto leading-relaxed px-2",children:"Your gracious presence and blessings will make this joyous occasion truly memorable."}),u.jsx("p",{className:"text-[11px] sm:text-[13px] text-foreground/60 font-helvetica mb-2 sm:mb-3",children:"With love,"}),u.jsxs("p",{className:"font-display text-3xl sm:text-4xl md:text-6xl text-foreground mb-3 sm:mb-4 leading-tight",children:[(window.WEDDING_CONFIG?.partnerA||e)," ",u.jsx("span",{className:"text-2xl sm:text-3xl md:text-4xl text-foreground/50 italic",children:"&"})," ",(window.WEDDING_CONFIG?.partnerB||t)]}),u.jsx("p",{className:"text-[11px] sm:text-[13px] text-foreground/60 font-helvetica tracking-wide uppercase",children:(window.WEDDING_CONFIG?.weddingDateDisplay||"20 JANUARY 2027")}),u.jsx("p",{className:"text-[10px] sm:text-xs text-foreground/40 mt-8 sm:mt-12 font-helvetica tracking-wider",children:(window.WEDDING_CONFIG?.hashtag||"#KeerthyAndAshwin")})]})]})}`;

const bhStart = code.indexOf('function bH({name1:e,name2:t,date:n}){');
const bhEnd = code.indexOf('const Ds=', bhStart);
if (bhStart !== -1 && bhEnd !== -1) {
  code = code.slice(0, bhStart) + newbH + code.slice(bhEnd);
  console.log('Replaced bH with mobile-first responsiveness.');
}

// Save to both public/assets and assets
fs.writeFileSync('public/assets/index-BtxrvcwD.js', code);
fs.writeFileSync('assets/index-BtxrvcwD.js', code);

console.log('Mobile-first JS fixes applied successfully!');

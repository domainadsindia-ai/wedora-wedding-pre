const fs = require('fs');

let code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

const yIdx = code.indexOf('y$=({onEnter:e,onStartMusic:t,onShowHeroText:n})=>{');
const yEndIdx = code.indexOf(';function w$({isMuted:e,onToggle:t})', yIdx);

const enhancedY = `y$=({onEnter:e,onStartMusic:t,onShowHeroText:n})=>{
  const [r,s]=m.useState("idle"),
  [i,o]=m.useState(!1),
  [a,l]=m.useState(!1),
  c=m.useRef(null),
  d=()=>{var v;r==="idle"&&(s("envelope"),t==null||t(),(v=c.current)==null||v.play().catch(()=>{p()}))},
  f=m.useRef(!1),
  h=()=>{f.current||(f.current=!0,n==null||n())},
  p=()=>{h(),s(v=>v==="envelope"?"fading":v)},
  b=()=>{const v=c.current;if(!v||(v.currentTime>.05&&!i&&o(!0),!v.duration))return;const _=v.duration-v.currentTime;_<1.8&&h(),_<1&&p()},
  g=()=>p(),
  x=()=>{r!=="fading"||a||(l(!0),e())},
  w=r==="idle"||r==="envelope"&&!i,
  y=r!=="idle",
  rm=typeof window!=="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return u.jsxs(ce.div,{
    className:"fixed inset-0 z-50 cursor-pointer bg-[#0e0709] overflow-hidden select-none",
    onClick:d,
    initial:{opacity:1},
    animate:{opacity:r==="fading"||r==="done"?0:1},
    transition:{duration:rm?0.1:1.6,ease:"easeInOut"},
    onAnimationComplete:x,
    style:{pointerEvents:r==="fading"||r==="done"?"none":"auto"},
    children:[
      u.jsx("div",{
        className:"absolute inset-0 pointer-events-none select-none",
        children:u.jsx("img",{src:S2,alt:"",className:"w-full h-full object-cover blur-3xl opacity-35 scale-110",draggable:!1})
      }),
      u.jsxs("div",{
        className:"relative w-full h-full flex items-center justify-center pointer-events-none",
        children:[
          u.jsx("img",{src:S2,alt:"",className:"absolute inset-0 m-auto w-full h-full object-contain pointer-events-none select-none transition-opacity duration-500",style:{opacity:w?1:0},draggable:!1}),
          u.jsx("video",{ref:c,src:v$,poster:S2,className:"absolute inset-0 m-auto w-full h-full object-contain pointer-events-none select-none transition-opacity duration-700 ease-in-out",style:{opacity:y?1:0},onTimeUpdate:b,onEnded:g,onError:()=>p(),playsInline:!0,muted:!0,preload:"auto"})
        ]
      }),
      r==="idle"&&u.jsxs("div",{
        className:"absolute inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-opacity duration-700",
        style:{bottom:"58px"},
        children:[
          u.jsx("div",{
            style:{background:"rgba(20, 10, 15, 0.76)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.45)",borderRadius:"9999px",padding:"11px 30px",color:"#ffffff",fontFamily:"'Instrument Serif', serif",letterSpacing:"0.22em",textTransform:"uppercase",fontSize:"14px",boxShadow:"0 10px 30px rgba(0,0,0,0.45)",display:"inline-block"},
            children:(window.WEDDING_CONFIG?.openingPrompt||"Tap anywhere to open")
          }),
          u.jsx("span",{
            style:{marginTop:"8px",color:"rgba(255,255,255,0.92)",fontFamily:"Inter, sans-serif",fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase",textShadow:"0 2px 4px rgba(0,0,0,0.6)"},
            children:(window.WEDDING_CONFIG?.openingSubPrompt||"Music will play")
          })
        ]
      }),
      r!=="fading"&&r!=="done"&&u.jsx("button",{
        type:"button",
        onClick:k=>{k.stopPropagation(),p()},
        style:{position:"absolute",top:"24px",right:"24px",zIndex:30,background:"rgba(20, 10, 15, 0.65)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.35)",borderRadius:"9999px",padding:"7px 20px",color:"#ffffff",fontFamily:"Inter, sans-serif",fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase",boxShadow:"0 4px 15px rgba(0,0,0,0.3)",cursor:"pointer"},
        children:"Skip"
      })
    ]
  })
}`;

code = code.slice(0, yIdx) + enhancedY.replace(/\s+/g, ' ') + code.slice(yEndIdx);

fs.writeFileSync('public/assets/index-BtxrvcwD.js', code);
console.log('Successfully updated opening styling in bundle!');

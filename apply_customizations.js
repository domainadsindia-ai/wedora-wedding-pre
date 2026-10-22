const fs = require('fs');

let code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

console.log('Original bundle size:', code.length);

// 1. Replace v$ and S2 with window.WEDDING_CONFIG
const vSearch = 'v$=A8.url,S2=O8.url';
const vReplace = 'v$=(window.WEDDING_CONFIG?.openingVideoUrl||"/opening-video.mp4"),S2=(window.WEDDING_CONFIG?.openingPosterUrl||"/opening-video-poster.jpg")';
if (code.includes(vSearch)) {
  code = code.replace(vSearch, vReplace);
  console.log('Replaced v$ and S2 successfully.');
} else {
  console.error('vSearch not found!');
}

// 2. Replace Ds definition
const dsSearch = 'Ds={couple_name_1:"Beatriz",couple_name_2:"Alexander",hero_name_1:"Beatriz",hero_name_2:"Alexander",wedding_date:"2027-05-20",wedding_date_2:"2027-05-20",venue_name:"Villa Aurelia",venue_address:"Rome, Italy"}';
const dsReplace = 'Ds={couple_name_1:(window.WEDDING_CONFIG?.partnerA||"Keertika"),couple_name_2:(window.WEDDING_CONFIG?.partnerB||"Aswin"),hero_name_1:(window.WEDDING_CONFIG?.partnerA||"Keertika"),hero_name_2:(window.WEDDING_CONFIG?.partnerB||"Aswin"),wedding_date:(window.WEDDING_CONFIG?.weddingDate||"2027-05-20"),wedding_date_2:(window.WEDDING_CONFIG?.weddingDate||"2027-05-20"),venue_name:(window.WEDDING_CONFIG?.venueName||"Villa Aurelia"),venue_address:(window.WEDDING_CONFIG?.venueCity||"Rome, Italy")}';
if (code.includes(dsSearch)) {
  code = code.replace(dsSearch, dsReplace);
  console.log('Replaced Ds successfully.');
} else {
  console.error('dsSearch not found!');
}

// 3. Replace Fc definition
const fcSearch = 'Fc={couple_name_1:"Beatriz",couple_name_2:"Alexander",wedding_date:"2027-05-20",venue_location:"Villa Aurelia, Rome, Italy"}';
const fcReplace = 'Fc={couple_name_1:(window.WEDDING_CONFIG?.partnerA||"Keertika"),couple_name_2:(window.WEDDING_CONFIG?.partnerB||"Aswin"),wedding_date:(window.WEDDING_CONFIG?.weddingDate||"2027-05-20"),venue_location:((window.WEDDING_CONFIG?.venueName||"Villa Aurelia")+", "+(window.WEDDING_CONFIG?.venueCity||"Rome, Italy"))}';
if (code.includes(fcSearch)) {
  code = code.replace(fcSearch, fcReplace);
  console.log('Replaced Fc successfully.');
} else {
  console.error('fcSearch not found!');
}

// 4. Replace invitation quote text in I$
const quoteSearch = 'children:"Beatriz & Alexander request the pleasure of your company as they celebrate their marriage and begin this new chapter surrounded by the people they love most."';
const quoteReplace = 'children:(window.WEDDING_CONFIG?.invitationText||"Keertika & Aswin request the pleasure of your company as they celebrate their marriage and begin this new chapter surrounded by the people they love most.")';
if (code.includes(quoteSearch)) {
  code = code.replace(quoteSearch, quoteReplace);
  console.log('Replaced quoteText successfully.');
} else {
  console.error('quoteSearch not found!');
}

// 5. Replace Alessia & Matteo in translation
const transSearch = 'Together with their families, Alessia and Matteo request the honour of your presence at the celebration of their marriage on the shores of Lake Como, Italy.';
const transReplace = 'Together with their families, Keertika and Aswin request the honour of your presence at the celebration of their marriage.';
if (code.includes(transSearch)) {
  code = code.replace(transSearch, transReplace);
  console.log('Replaced translation text successfully.');
} else {
  console.error('transSearch not found!');
}

// 6. Update background music url to be configurable
const musicSearch = 'S$="/__l5e/assets-v1/2fca3877-3b8f-4d30-80c3-ee4bab23b409/until-were-gone-opt.mp3"';
const musicReplace = 'S$=(window.WEDDING_CONFIG?.musicUrl||"/__l5e/assets-v1/2fca3877-3b8f-4d30-80c3-ee4bab23b409/until-were-gone-opt.mp3")';
if (code.includes(musicSearch)) {
  code = code.replace(musicSearch, musicReplace);
  console.log('Replaced background music URL successfully.');
} else {
  console.error('musicSearch not found!');
}

fs.writeFileSync('public/assets/index-BtxrvcwD.js', code);
console.log('Patched bundle saved! Size:', code.length);

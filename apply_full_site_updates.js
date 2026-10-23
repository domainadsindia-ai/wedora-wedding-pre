const fs = require('fs');

let code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

// 1. Timezone $$
code = code.replace('const $$="Europe/Rome";', 'const $$=(window.WEDDING_CONFIG?.timezone||"Asia/Kolkata");');

// 2. Transportation mU section updates
code = code.replace(
  'A private bus will depart at 4:00 PM from Piazza della Repubblica, taking guests directly to Villa Aurelia with plenty of time to settle in before the ceremony begins.',
  'Convenient guest transportation and valet parking are arranged at both Contour Backwaters (Changanassery) and Chakolas Pavilion (Kalamassery).'
);
code = code.replace(
  'At the end of the evening, return transportation to central Rome will',
  'Throughout both the wedding and reception celebrations, transport assistance will'
);
code = code.replace(
  'https://www.google.com/maps/search/?api=1&query=Piazza+della+Repubblica+Rome',
  'https://www.google.com/maps/search/?api=1&query=Contour+Backwaters+Hotel+Resort+Changanassery+Kerala'
);
code = code.replace(
  'View Pick-Up Point',
  'View Venue Location'
);

// 3. Where to stay LU section updates
code = code.replace(
  "close to Villa Aurelia.",
  "close to the wedding and reception venues."
);

// 4. Hotel cards array MU
const oldMUStart = code.indexOf('MU=[');
const oldMUEnd = code.indexOf(',M8=', oldMUStart);
if (oldMUStart !== -1 && oldMUEnd !== -1) {
  const newMU = `MU=[{name:"Contour Backwaters Hotel & Resort",mapsUrl:(window.WEDDING_CONFIG?.weddingMapsUrl||"https://www.google.com/maps/search/?api=1&query=Contour+Backwaters+Hotel+Resort+Changanassery+Kerala"),stay:"20 – 21 January 2027",rate:'Code "KEERTHY & ASHWIN"',parking:"Valet & guest parking available on site",description:"Located directly at the wedding venue in Changanassery, offering luxury waterfront rooms overlooking serene backwaters."},{name:"Chakolas Pavilion & Kalamassery Stays",mapsUrl:(window.WEDDING_CONFIG?.receptionMapsUrl||"https://www.google.com/maps/search/?api=1&query=Chakolas+Pavilion+Convention+Centre+Kalamassery+Kochi"),stay:"21 – 23 January 2027",rate:'Code "KEERTHY & ASHWIN"',parking:"Spacious convention parking on site",description:"Conveniently situated near Chakolas Pavilion in Kalamassery, Ernakulam, offering refined accommodations for the reception evening."}]`;
  code = code.slice(0, oldMUStart) + newMU + code.slice(oldMUEnd);
  console.log('Updated MU hotel cards successfully.');
}

// 5. Gifts translations
code = code.replace('"Your presence is our greatest gift."', '"Your presence and blessings are our greatest gift."');
code = code.replace('"Should you wish to give a gift, you may do so in cash or by bank transfer."', '"Your presence and prayers as we begin our new journey together are the greatest gifts we could ever receive."');
code = code.replace('"IBAN IT60 X054 2811 1010 0000 0123 456"', '"With love & gratitude, Keerthy & Ashwin"');

// 6. Fc object
code = code.replace(
  'Fc={couple_name_1:(window.WEDDING_CONFIG?.partnerA||"Keertika"),couple_name_2:(window.WEDDING_CONFIG?.partnerB||"Aswin"),wedding_date:(window.WEDDING_CONFIG?.weddingDate||"2027-05-20"),venue_location:((window.WEDDING_CONFIG?.venueName||"Villa Aurelia")+", "+(window.WEDDING_CONFIG?.venueCity||"Rome, Italy"))}',
  'Fc={couple_name_1:(window.WEDDING_CONFIG?.partnerA||"Keerthy"),couple_name_2:(window.WEDDING_CONFIG?.partnerB||"Ashwin"),wedding_date:(window.WEDDING_CONFIG?.weddingDate||"2027-01-20"),venue_location:((window.WEDDING_CONFIG?.weddingVenue||"Contour Backwaters Hotel Resort & Convention Centre")+", "+(window.WEDDING_CONFIG?.weddingCity||"Changanassery, Keralam."))}'
);

// 7. RSVP subtitle
code = code.replace(
  'by the twelfth of June, 2027',
  'by the twentieth of December, 2026'
);

// Save to both public/assets and assets
fs.writeFileSync('public/assets/index-BtxrvcwD.js', code);
fs.writeFileSync('assets/index-BtxrvcwD.js', code);

console.log('Saved polished bundle to public/assets and assets! New size:', code.length);

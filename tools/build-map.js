/* Builds assets/img/world-map.svg from Natural Earth geometry
   (world-atlas, ISC / public-domain source data) and emits the
   projected marker coordinates for data.js. */
const fs = require('fs');
const topo = require('world-atlas/countries-110m.json');
const { feature, mesh } = require('topojson-client');
const { geoNaturalEarth1, geoPath, geoGraticule10 } = require('d3-geo');

const W = 1600, H = 820;
const countries = feature(topo, topo.objects.countries);
const borders = mesh(topo, topo.objects.countries, (a, b) => a !== b);

const proj = geoNaturalEarth1().fitExtent([[18, 18], [W - 18, H - 18]], { type: 'Sphere' });
const rawPath = geoPath(proj);
/* round coordinates to 1dp — invisible at display size, ~3x smaller file */
const path = (o) => { const d = rawPath(o); return d ? d.replace(/-?\d+\.\d+/g, m => (+m).toFixed(1)) : d; };

const PLAYED = new Set(['Japan','United Kingdom','Germany','France','Belgium','Netherlands',
  'Denmark','Spain','Austria','Hungary','Poland','Czechia','United States of America',
  'South Korea','China']);

const land = [], lit = [];
countries.features.forEach(f => {
  const d = path(f);
  if (!d) return;
  (PLAYED.has(f.properties.name) ? lit : land).push(d);
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="World map of countries LOVEBITES have performed in">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0d12"/><stop offset="100%" stop-color="#06080b"/>
    </linearGradient>
    <linearGradient id="lit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cdd5de" stop-opacity=".30"/>
      <stop offset="100%" stop-color="#8d97a4" stop-opacity=".16"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sea)"/>
  <path d="${path({type:'Sphere'})}" fill="none" stroke="#d8dee6" stroke-opacity=".22" stroke-width="1.2"/>
  <path d="${path(geoGraticule10())}" fill="none" stroke="#d8dee6" stroke-opacity=".07" stroke-width=".6"/>
  <g fill="#141a22" fill-opacity=".9">${land.map(d => `<path d="${d}"/>`).join('')}</g>
  <path d="${path(borders)}" fill="none" stroke="#d8dee6" stroke-opacity=".16" stroke-width=".6"/>
  <g fill="url(#lit)" stroke="#d8dee6" stroke-opacity=".55" stroke-width="1.1">${lit.map(d => `<path d="${d}"/>`).join('')}</g>
</svg>`;

fs.writeFileSync('/home/user/Serverless-Test/assets/img/world-map.svg', svg);

/* ---- markers ---- */
const CITIES = [
  // [label, country, lon, lat, tier, note, years]
  // Japanese dates are labelled as the sources give them — several name the
  // prefecture rather than the city, so the prefecture is used here.
  ['Tokyo','Japan',139.69,35.69,1,'Home city. Live debut at Tsutaya O-West in 2016, every filmed concert, Tokyo Garden Theater in 2024, and the sold-out Nippon Budokan headline in March 2026.','2016 \u2192'],
  ['Osaka','Japan',135.50,34.69,3,'Eternal Phenomenon Tour, 10 February 2025, and earlier national tours.','2025'],
  ['Aichi','Japan',136.91,35.18,3,'Eternal Phenomenon Tour, 12 February 2025.','2025'],
  ['Fukuoka','Japan',130.40,33.59,3,'Opening night of the Eternal Phenomenon Tour, 26 January 2025.','2025'],
  ['Hokkaido','Japan',141.35,43.06,3,'Eternal Phenomenon Tour, 15 February 2025.','2025'],
  ['Miyagi','Japan',140.87,38.27,3,'Eternal Phenomenon Tour, 22 February 2025.','2025'],
  ['Niigata','Japan',139.02,37.92,3,'Eternal Phenomenon Tour, 6 March 2025.','2025'],
  ['Shizuoka','Japan',138.38,34.98,3,'Eternal Phenomenon Tour, 8 March 2025.','2025'],
  ['Kagawa','Japan',134.04,34.34,3,'Eternal Phenomenon Tour, 7 February 2025. Also midori\u2019s home prefecture.','2025'],
  ['London','United Kingdom',-0.13,51.51,1,'First shows outside Japan (Hyper Japan, 25\u201326 Nov 2017), first UK headline at Camden Underworld (27 Nov 2017), the Metal Hammer Golden Gods award (June 2018), and the Outstanding Tour finale (3 Aug 2026).','2017 \u2192'],
  ['Download Festival','United Kingdom',-1.37,52.83,2,'Download Festival, summer 2019 (Donington Park).','2019'],
  ['Bloodstock','United Kingdom',-1.69,52.73,2,'Bloodstock Open Air, August 2018 (Catton Park).','2018'],
  ['Wacken','Germany',9.37,54.02,1,'Wacken Open Air, 4 August 2018 \u2014 reported as the first all-female Japanese metal band at the festival. Returned on 29 July 2026.','2018 \u00b7 2026'],
  ['Hellfest','France',-1.28,47.09,2,'Hellfest main stage, 28 June 2024 (Clisson).','2024'],
  ['Paris','France',2.35,48.86,3,'Outstanding Tour, 1 August 2026.','2024 \u00b7 2026'],
  ['Graspop','Belgium',5.12,51.24,2,'Graspop Metal Meeting, summer 2019 (Dessel).','2019'],
  ['Ittre','Belgium',4.26,50.65,3,'World tour date at Zik-Zak, 15 June 2024.','2024'],
  ['Tilburg','Netherlands',5.09,51.56,3,'Outstanding Tour, 30 July 2026.','2026'],
  ['Roskilde','Denmark',12.08,55.64,2,'Roskilde Festival, summer 2024.','2024'],
  ['Madrid','Spain',-3.70,40.42,2,'Download Festival Madrid, summer 2019.','2019'],
  ['Resurrection Fest','Spain',-7.59,43.66,2,'Resurrection Fest, June 2024 (Viveiro).','2024'],
  ['Rock Imperium','Spain',-0.99,37.61,2,'Rock Imperium Festival, 2024 (Cartagena).','2024'],
  ['Barcelona','Spain',2.17,41.39,3,'Rock Fest Barcelona, 2026. Listed in festival schedules rather than confirmed by the band directly.','2026'],
  ['Vienna','Austria',16.37,48.21,2,'First-ever show in Austria, 22 July 2026.','2026'],
  ['Budapest','Hungary',19.04,47.50,2,'First-ever show in Hungary, 23 July 2026.','2026'],
  ['Warsaw','Poland',21.01,52.23,2,'First-ever show in Poland, 25 July 2026.','2026'],
  ['Prague','Czechia',14.42,50.09,2,'First-ever show in the Czech Republic, 26 July 2026.','2026'],
  ['ProgPower USA','United States',-84.39,33.75,2,'ProgPower USA, September 2024 (Atlanta).','2024'],
  ['New York','United States',-74.01,40.71,2,'Gramercy Theatre \u2014 opening night of the Eternal Phenomenon US tour, 4 November 2025.','2024 \u00b7 2025'],
  ['Baltimore','United States',-76.61,39.29,3,'Soundstage, 5 November 2025.','2025'],
  ['Lakewood, OH','United States',-81.80,41.48,3,'The Winchester Music Tavern, 7 November 2025.','2025'],
  ['West Dundee, IL','United States',-88.28,42.10,3,'RocHaus, 8 November 2025.','2025'],
  ['Lawrence, KS','United States',-95.24,38.97,3,'The Granada Theater, 10 November 2025.','2025'],
  ['Dallas','United States',-96.80,32.78,3,'Trees, 11 November 2025.','2025'],
  ['Austin','United States',-97.74,30.27,3,'Come And Take It Live, 12 November 2025.','2025'],
  ['San Luis Obispo','United States',-120.66,35.28,3,'Fremont Theater, 14 November 2025.','2025'],
  ['Los Angeles','United States',-118.24,34.05,2,'The Vermont Hollywood \u2014 closing night of the US tour, 15 November 2025, with Edge of Paradise supporting.','2024 \u00b7 2025'],
  ['San Francisco','United States',-122.42,37.77,3,'Cafe Du Nord, 12 September 2024.','2024'],
  ['South Korea','South Korea',126.98,37.57,2,'South Korean leg of the first world tour, 2024. The sources consulted name the country but not the city; the marker sits on Seoul.','2024'],
  ['Singapore','Singapore',103.82,1.35,3,'Esplanade, Outstanding Tour 2026.','2026'],
  ['China','China',116.41,39.90,3,'Supporting Arch Enemy on a Chinese run in 2019. The sources name the country but not the cities; the marker is indicative only.','2019']
];

const markers = CITIES.map(([name, country, lon, lat, tier, note, years]) => {
  const [x, y] = proj([lon, lat]);
  return { n: name, c: country, x: +(x / W * 100).toFixed(3), y: +(y / H * 100).toFixed(3), t: tier, note, years };
});

fs.writeFileSync(__dirname + '/markers.json', JSON.stringify(markers, null, 0));
console.log('map written;', markers.length, 'markers; aspect', (W / H).toFixed(4));

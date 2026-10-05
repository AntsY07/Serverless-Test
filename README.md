# LOVEBITES — A Complete History

An interactive, sourced history of the Japanese heavy metal band **LOVEBITES** (Tokyo, 2016 – present):
the Destrose origins, the 2016 formation, five studio albums, the 2021 hiatus, the return with fami,
and the road to a sold-out Nippon Budokan in 2026.

Static site. No build step, no dependencies, no framework — open `index.html` and it runs.

## Contents

| Section | What it does |
| --- | --- |
| **Overview** | Who the band is, at-a-glance facts, and how to read the confidence markers. |
| **The Story** | Ten narrative chapters: Origins, Formation, Early Releases, International Recognition, Major Albums Era, Lineup Changes, miho's Departure & the Hiatus, The Return, Recent Era, Legacy. |
| **Interactive Timeline** | 53 documented events, 2015 → 2026, filterable by nine categories (Formation, Member, Release, Tour, Festival, Award, Hiatus, Return, Milestone), with a sticky year rail, per-event member tags, release cross-links and source links. |
| **Lineup & Members** | A tenure chart (Gantt) plotting all six members across 2016–2026, with the hiatus shaded and join/departure points marked, plus full profiles for every member. |
| **Discography Explorer** | 16 releases — albums, EPs, a single, live records and a compilation — filterable by type, each opening a detail view with tracklist, lineup, formats, labels, chart peaks, historical context and sources. |
| **Legacy** | Position in Japanese metal, international standing, and the hiatus-and-recovery story. |
| **Sources & Method** | Every reference used, grouped by type, plus the confidence conventions. |

## Running it

```bash
# any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly from the filesystem also works.

## Structure

```
index.html              page shell and section scaffolding
assets/css/styles.css   design system: tokens, layout, components, responsive, print
assets/js/data.js       ALL factual content — members, chapters, timeline, releases, sources
assets/js/app.js        rendering, filtering, modals, scroll behaviour, generated artwork
```

**All content lives in `data.js`.** To correct a fact, add an event or add a release, edit that file —
nothing in `app.js` needs to change. Source ids in each entry's `src` array resolve against
`LB.sources`, so a claim and its citation stay attached.

## Sourcing and accuracy

- Facts were researched against official band and label channels (lovebites-music.com, lovebites.jp,
  Victor Entertainment, JPU Records, Napalm Records), established metal press (Metal Hammer/Louder,
  Blabbermouth, BraveWords, Angry Metal Guy, Distorted Sound, MetalTalk), Japanese and J-music
  outlets (JROCK NEWS, JaME, J-Generation, Roppongi Rocks), and reference databases
  (Wikipedia, generasia, Encyclopaedia Metallum, Discogs, Official Charts, setlist.fm) for
  cross-checking. The full list is in the Sources section and in `LB.sources`.
- Claims resting on a single secondary source, or where sources disagree on a detail, carry a visible
  amber note on the page rather than being asserted flatly. See the `flag` and `confidence` fields in
  `data.js`.
- miho's 2021 departure is covered only as far as she and the band put it in writing. No inference is
  drawn about private matters.
- Content is current as of **October 2026**.

## A note on the artwork

The square emblems in the discography are **original geometric illustrations generated in code**
(`MOTIFS` in `app.js`), one per release, in era-appropriate palettes. They are *not* the official
cover art and are not intended to resemble it. For the real sleeves, see the band's official
discography, linked from the page.

## Accessibility & performance

- No JavaScript framework and no runtime dependencies; one webfont request, with declared fallbacks.
- The wordmark is measured and fitted at runtime so it never clips, whatever font actually loads.
- Keyboard support throughout: skip link, visible focus rings, `Esc` to close detail views,
  `←`/`→` to move between them, and a focus trap while one is open.
- `prefers-reduced-motion` disables every animation and reveal transition.
- Print styles strip the chrome and expand all revealed content.

## Licence / status

An independent, fan-made history. Not affiliated with LOVEBITES, Victor Entertainment, JPU Records
or Napalm Records. All factual content belongs to the sources cited; the code and the generated
emblems were written for this project.

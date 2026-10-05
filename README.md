# LOVEBITES — A Complete History

An interactive, sourced history of the Japanese heavy metal band **LOVEBITES** (Tokyo, 2016 – present):
the Destrose origins, the 2016 formation, five studio albums, the 2021 hiatus, the return with fami,
and the road to a sold-out Nippon Budokan in 2026.

Static site. No build step, no dependencies, no framework — open `index.html` and it runs.

Visually it follows the band's own identity: platinum on obsidian, inscriptional Roman caps
(Cinzel) over a Garamond text face, heraldic framing, and a wolf mark — monochrome first, with
colour used only to separate timeline categories and member tenures.

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
assets/img/             hand-authored SVG artwork (see below)
```

### Artwork files

| File | Used for |
| --- | --- |
| `mark-wolf.svg` | The wolf mark — nav bar, hero, footer |
| `crest-wolf.svg` | Framed version of the same crest — seal above the Legacy section |
| `hero-backdrop.svg` | Cathedral arch and pentagram geometry behind the hero |
| `chapter-01…10-*.svg` | One heraldic plate per narrative chapter |
| `ornament-divider.svg` | Separator between chapters, and under the hero wordmark |
| `ornament-rule.svg` | Small rule under each section heading |

Release emblems in the discography are generated in code (`MOTIFS` in `app.js`) in the same
heraldic style, so a new release only needs a `motif` and two colours in `data.js`.

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

## The band's logo

**The official LOVEBITES logo is not in this repository**, and the site does not ship a copy of it.
The build environment had no network access to the band's or label's sites, so the real mark could
not be retrieved, and guessing at it from memory would have produced something inaccurate.

The page is wired to use it the moment you supply it. Drop the file in as:

```
assets/img/lovebites-logo.svg      (preferred)
assets/img/lovebites-logo.png      (also accepted)
```

On load the page probes for that file. If it is there, it replaces both the hero wordmark and the
mark in the navigation bar automatically — no code change needed. If it is absent (the current
state), the page falls back to the typographic wordmark set in Cinzel, and you will see two
harmless 404s in the console from the probe. See `assets/img/README-logo.txt` and the
`brandMark()` function in `app.js`.

## A note on the artwork

Every image in `assets/img/` is **original artwork drawn for this project** — heraldic plates,
the wolf mark, the ornaments and the hero backdrop — as are the release emblems generated in
`app.js`. None of it is the band's own art, none of it reproduces their cover sleeves, and the wolf
mark is an original heraldic rendering rather than a copy of the band's emblem.

There are **no photographs** on the page. Press and live photography of the band is copyrighted and
could not be licensed or retrieved here, so the design uses illustration throughout instead. For the
real sleeves and photographs, follow the official discography and label links on the page.

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

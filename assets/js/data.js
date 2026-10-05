/* ============================================================
   LOVEBITES — A Complete History
   data.js — every factual claim on the page lives here, with
   source ids pointing into LB.sources.

   confidence:
     "confirmed" (default) — corroborated by two or more of the
        reference sources listed, or stated by the band/label.
     "reported"  — found in a single secondary source, or sources
        disagree on a detail. Rendered with a visible caveat.
   ============================================================ */

const LB = {};

LB.meta = {
  asOf: 'October 2026',
  title: 'LOVEBITES — A Complete History'
};

LB.stats = [
  { n: '2016',  l: 'Formed in Tokyo' },
  { n: '5',     l: 'Studio albums' },
  { n: '4',     l: 'EPs / mini-albums' },
  { n: '6',     l: 'Members, all time' },
  { n: '14mo',  l: 'Hiatus, 2021–22' },
  { n: '2026',  l: 'Budokan headline' }
];

LB.overview = {
  lede: [
    'LOVEBITES are a five-piece heavy metal band from Tokyo, formed in 2016 out of the wreckage of another group. Within two years they had a Metal Hammer Golden Gods award, a Wacken Open Air main-bill slot and a European record deal. Within six they had almost ceased to exist. Within ten they were headlining Nippon Budokan.',
    'The band plays melodic, twin-guitar heavy and power metal — Iron Maiden and Helloween filtered through Japanese studio precision — and has sung exclusively in English from the first demo onward, a decision made by founding bassist and leader <strong>miho</strong> before the band had a singer.',
    'Their story has a clean fracture in the middle of it. In <strong>August 2021</strong>, at the band\'s commercial and critical peak, miho left and LOVEBITES went on hiatus with no announced end date. Fourteen months later they returned with <strong>fami</strong>, recruited through an audition open to the entire world, and promptly recorded their highest-charting album.',
    'What follows is that history in order: ten narrative chapters, a filterable timeline of every documented milestone, an interactive map of the lineup, and a release-by-release discography. Every claim is tied to the sources at the foot of the page.'
  ],
  facts: [
    { k: 'Origin', v: 'Tokyo, Japan' },
    { k: 'Formed', v: '2016' },
    { k: 'Genres', v: 'Heavy metal, power metal' },
    { k: 'Current lineup', v: 'asami (vocals) · midori (guitar) · miyako (guitar, keyboards) · fami (bass) · haruna (drums)' },
    { k: 'Former member', v: 'miho (bass, 2016–2021) — founder and leader' },
    { k: 'Japanese label', v: 'Victor Entertainment' },
    { k: 'International labels', v: 'JPU Records (2017–2024) · Napalm Records (2026–)' },
    { k: 'Highest chart peak', v: 'No. 5 — Oricon and Billboard Japan, Judgement Day (2023)' },
    { k: 'Lyrics', v: 'English, throughout' }
  ]
};

LB.method = [
  {
    dot: 'var(--c-formation)',
    h: 'Confirmed',
    p: 'Dates, chart positions, tracklists and lineup facts corroborated by two or more of the listed references, or stated directly by the band, its labels or its management.'
  },
  {
    dot: 'var(--gold)',
    h: 'Reported',
    p: 'Carried by a single secondary source, or sources that disagree on a detail. These are labelled inline on the page rather than smoothed over.'
  },
  {
    dot: 'var(--c-hiatus)',
    h: 'Deliberately absent',
    p: 'miho\'s reasons for leaving are covered only as far as she and the band put them in writing. No inference is drawn about private matters, and no unsourced explanation appears anywhere on this page.'
  },
  {
    dot: 'var(--c-member)',
    h: 'A note on names',
    p: 'The band styles its members\' names in lower case (asami, midori, miyako, haruna, miho, fami) and its own name in capitals. That convention is kept here.'
  }
];

LB.categories = [
  { id: 'formation', label: 'Formation', color: 'var(--c-formation)' },
  { id: 'member',    label: 'Member',    color: 'var(--c-member)'    },
  { id: 'release',   label: 'Release',   color: 'var(--c-release)'   },
  { id: 'tour',      label: 'Tour',      color: 'var(--c-tour)'      },
  { id: 'festival',  label: 'Festival',  color: 'var(--c-festival)'  },
  { id: 'award',     label: 'Award',     color: 'var(--c-award)'     },
  { id: 'hiatus',    label: 'Hiatus',    color: 'var(--c-hiatus)'    },
  { id: 'return',    label: 'Return',    color: 'var(--c-return)'    },
  { id: 'milestone', label: 'Milestone', color: 'var(--c-milestone)' }
];

LB.releaseTypes = [
  { id: 'album',       label: 'Studio album' },
  { id: 'ep',          label: 'EP / mini-album' },
  { id: 'single',      label: 'Single' },
  { id: 'live',        label: 'Live album / video' },
  { id: 'compilation', label: 'Compilation' }
];

/* ================= MEMBERS ================= */

LB.members = [
  {
    id: 'asami',
    name: 'asami',
    mono: 'A',
    color: '#d98a86',
    instrument: 'Lead vocals',
    from: '2016-01-01', to: null,
    period: '2016 – present',
    status: 'current',
    role: 'Lead vocalist; co-writes lyrics and, from the fourth album onward, music.',
    bg: [
      'asami is the only member of LOVEBITES who came to the band from outside metal entirely. She trained in classical ballet from the age of two and danced for roughly sixteen years, then moved to the United States after high school to study jazz and hip-hop dance. Her musical grounding is soul and R&B — she has named Alicia Keys and Aretha Franklin among her touchstones — and she had no heavy metal background when she joined.',
      'Before LOVEBITES she worked as a professional backing vocalist, largely for rock acts, including sessions connected to VAMPS and UVERworld. She and the band\'s founders knew each other through that demo-and-session world, which is how a recording of hers reached miho.'
    ],
    contrib: [
      'Was chosen for the band on the strength of a submitted demo alone — the four instrumentalists hired her without an in-person audition.',
      'Sings entirely in English, a constraint set before she joined.',
      'Her range is the reason the band is called LOVEBITES: Halestorm\'s "Love Bites (So Do I)" was played at rehearsal because it suited her voice, and the name stuck.',
      'Co-wrote the music for "Soul Defender" on LOVEBITES EP II (2024) with the band\'s outside collaborator Mao.'
    ],
    src: ['wiki-band', 'jgen-2017', 'generasia-band']
  },
  {
    id: 'midori',
    name: 'midori',
    mono: 'M',
    color: '#8fc9a8',
    instrument: 'Guitar',
    from: '2016-01-01', to: null,
    period: '2016 – present',
    status: 'current',
    role: 'Guitarist — the band\'s flashier, more aggressive lead voice.',
    bg: [
      'midori (Midori Tatematsu) was born on 28 May 1988 in Takamatsu, Kagawa Prefecture. Like several of her bandmates she came to the guitar late and through keyboards: piano at around two or three years old, electric organ at eight, and electric guitar only at twenty, after moving to Kyoto for university.',
      'She played in the all-female band Gekijo Metalicche from 2013 to 2016, leaving as LOVEBITES formed.'
    ],
    contrib: [
      'Takes the solos Wikipedia\'s profile characterises as the "flashy and aggressive" half of the band\'s two-guitar split.',
      'Played her first bottleneck-slide solo on "The Apocalypse", having researched the technique in part by studying Derek Trucks footage.',
      'One of the two founding guitarists, present on every LOVEBITES recording.'
    ],
    src: ['wiki-midori', 'jgen-midori', 'wiki-band']
  },
  {
    id: 'miyako',
    name: 'miyako',
    mono: 'M',
    color: '#93b2d8',
    instrument: 'Guitar, keyboards',
    from: '2016-01-01', to: null,
    period: '2016 – present',
    status: 'current',
    role: 'Guitarist and keyboardist; the band\'s most prolific composer and arranger.',
    bg: [
      'miyako began piano at three and spent her high-school years immersed in classical repertoire, naming Rachmaninoff as the composer who marked her most. She first picked up a guitar the summer she turned eighteen and got serious about it at university, teaching herself largely out of the Japanese shred primer series "Jigoku no Mechanical Training" while discovering Yngwie Malmsteen, Paul Gilbert and Metallica.',
      'At twenty she joined a band called GoDeath with an acquaintance; the group dropped its visual-kei presentation and renamed itself a DROP OF JOKER in 2013, with miyako writing and arranging its material. She has also been associated with the band 21g.'
    ],
    contrib: [
      'Writes and arranges a large share of the LOVEBITES catalogue — the classical architecture in the band\'s sound is largely hers.',
      'Covers keyboard and orchestral parts on stage as well as guitar, and played keytar live for the first time on "Spellbound" at the Tokyo Dome City Hall show filmed in March 2021.',
      'Flew to London with miho to collect the band\'s Metal Hammer Golden Gods award in 2018.'
    ],
    src: ['generasia-miyako', 'v13-miyako', 'louder-miyako', 'jame-gg']
  },
  {
    id: 'haruna',
    name: 'haruna',
    mono: 'H',
    color: '#d4bd82',
    instrument: 'Drums',
    from: '2016-01-01', to: null,
    period: '2016 – present',
    status: 'current',
    role: 'Drummer; co-founder of the band with miho.',
    bg: [
      'haruna co-founded LOVEBITES with miho, the two having met in Destrose, the all-female metal band that broke up in 2015. Her school-age favourite was B\'z; she crossed over into metal after hearing Helloween\'s "Master of the Rings", and has said her basic drumming vocabulary is modelled on Uli Kusch. Her first exposure to a live double-kick pedal at a local venue is what made her want to play.',
      'Reviewers consistently single out her economy — the ability to hold power-metal tempos for a full set without visible strain.'
    ],
    contrib: [
      'Co-founder; the only member besides miho present from the band\'s first conversation.',
      'Co-wrote, with miho, the Destrose-era song that became "Bravehearted" on the debut EP.',
      'Has played on every LOVEBITES release.'
    ],
    src: ['wiki-band', 'midlands-haruna', 'metalstorm-bio']
  },
  {
    id: 'miho',
    name: 'miho',
    mono: 'M',
    color: '#a99bd0',
    instrument: 'Bass',
    from: '2016-01-01', to: '2021-08-17',
    period: '2016 – August 2021',
    status: 'former',
    role: 'Founder, leader and bassist; set the band\'s direction, language and personnel.',
    bg: [
      'miho is the reason LOVEBITES exists. She has described hearing Steve Harris play with Iron Maiden as the moment she knew what she wanted to do with her life. She had already had a measure of success with Destrose — a band regarded as a forerunner of Japan\'s "girls metal band" wave — and when it split in 2015 she set about building the group she actually wanted.',
      'She recruited haruna from Destrose, then midori and miyako, then picked a singer she had never met from a demo. She also made the single most consequential early decision: that LOVEBITES would write and sing in English from the start.'
    ],
    contrib: [
      'Founded the band in 2016 and led it for five years as bassist and bandleader.',
      'Set the English-language policy before the band had a vocalist.',
      'Co-wrote "Bravehearted" — originally an unreleased Destrose song by her and haruna — which became the debut EP\'s closer.',
      'Accepted the Metal Hammer Golden Gods Best New Band award in London in 2018 alongside miyako.',
      'Played on three studio albums, three EPs, one single and three live albums. Her last recorded performance with the band is the Tokyo Dome City Hall show of 26 March 2021; her last recorded studio track is "Nameless Warrior".'
    ],
    src: ['louder-nbotw', 'wiki-band', 'metalstorm-bio', 'jpu-itb']
  },
  {
    id: 'fami',
    name: 'fami',
    mono: 'F',
    color: '#7fc3c6',
    instrument: 'Bass',
    from: '2022-10-21', to: null,
    period: 'October 2022 – present',
    status: 'current',
    role: 'Bassist; recruited through a global open audition to replace miho.',
    bg: [
      'fami was chosen in October 2022 from an audition that LOVEBITES had deliberately thrown open in April of that year to applicants of any nationality, any age and any gender. She was twenty when she joined.',
      'She was already a working musician — live and session work with a range of artists since her teens — and a self-produced solo artist, having written all the music and lyrics for her own album. She is also an unusually visible one: her YouTube channel, started while she was still in high school, had roughly 650,000 subscribers and over 58 million views at the time of her recruitment.'
    ],
    contrib: [
      'Ended the band\'s fourteen-month hiatus; her announcement video premiered on 21 October 2022.',
      'Debuted on record with Judgement Day (2023), which became the band\'s highest-charting album at No. 5 in Japan.',
      'Made her live debut at the two-night "WE ARE THE RESURRECTION" comeback shows in Tokyo in March 2023.',
      'Has since played the band\'s first world tour, its first US headline runs and its first Nippon Budokan headline show.'
    ],
    src: ['jpu-fami', 'metaltalk-fami', 'blab-return', 'wiki-band'],
    note: 'Her age at the time of joining (20) is reported by JPU Records and MetalTalk; the band has not published a birth date.'
  }
];

LB.hiatus = { from: '2021-08-17', to: '2022-10-21', label: 'Hiatus' };

/* ================= CHAPTERS ================= */

LB.chapters = [
  {
    id: 'ch1', num: 'I', years: 'Pre-2016', title: 'Origins',
    body: [
      'LOVEBITES did not begin with a concept. It began with a band breaking up.',
      '<strong>Destrose</strong> was an all-female Japanese metal band — one regarded in retrospect as a forerunner of the "girls metal band" wave that gave a number of Japanese acts their first overseas attention. Its bassist was <strong>miho</strong>; its drummer, for part of its life, was <strong>haruna</strong>. When Destrose dissolved in <strong>2015</strong>, miho did not treat it as an ending. She had, by her own account, known what she wanted to do since hearing Steve Harris play with Iron Maiden, and she set about assembling the band she actually had in mind.',
      'The other three came from outside that orbit, and from strikingly different places. <strong>midori</strong> — born in Takamatsu in 1988 — had come up through piano and electric organ and only started playing guitar at twenty, in Kyoto; she spent 2013 to 2016 in the all-female band Gekijo Metalicche. <strong>miyako</strong> had been a classical pianist from the age of three, deep in Rachmaninoff through high school, and taught herself guitar out of a Japanese shred primer at university before writing and arranging for a DROP OF JOKER. And <strong>asami</strong> was not a metal musician at all: a trained ballet dancer of sixteen years, a jazz and hip-hop student in the United States, a soul and R&B singer who paid the bills as a backing vocalist for rock acts.',
      'Four of them could already play this music. The fifth had to be convinced to try it.'
    ],
    pull: { q: 'miho knew what she wanted to do with the rest of her life the moment she heard Steve Harris playing with Iron Maiden.', c: 'Metal Hammer / Louder — New Band Of The Week, 2018' },
    facts: [
      { b: 'Destrose', t: 'Split 2015. Where miho and haruna met.' },
      { b: 'Gekijo Metalicche', t: 'midori\'s band, 2013–2016.' },
      { b: 'a DROP OF JOKER', t: 'miyako\'s band from 2013 — she wrote and arranged for it.' },
      { b: 'asami', t: 'Ballet from age 2, soul and R&B singer, session backing vocalist.' }
    ],
    src: ['wiki-band', 'louder-nbotw', 'wiki-midori', 'generasia-miyako', 'metalstorm-bio']
  },
  {
    id: 'ch2', num: 'II', years: '2016', title: 'Formation of LOVEBITES',
    body: [
      'The band formed in <strong>Tokyo in 2016</strong>. miho and haruna built outward: first the two guitarists, midori and miyako, then a singer.',
      'The hiring of asami is the most-told story in the band\'s history, and it is told because it is genuinely unusual. The four instrumentalists selected her <em>on the strength of a submitted demo alone</em> — a rock recording, not the soul and R&B she was known for — which reached miho through the demo-and-session circuit the three of them moved in. She had no heavy metal experience. They hired her anyway.',
      'Two decisions made in those first months defined everything that followed. The first was miho\'s: LOVEBITES would write and perform <strong>in English</strong>, from the beginning, before there was a vocalist to sing it. For a Japanese band in 2016 this was a commercially odd choice at home and a decisive one abroad.',
      'The second was the name. At a rehearsal the band ran through Halestorm\'s "Love Bites (So Do I)" — a song that happened to sit perfectly in asami\'s voice — and took their name from it.',
      'They played their first show on <strong>18 November 2016</strong> at Tsutaya O-West in Tokyo, on a bill billed as "Girls Band Next Generation". The visual identity that would follow them — monochrome, white-and-silver, formal rather than cute, closer to a crest than a costume — was in place early, and marked them out immediately from the idol-adjacent acts they were sometimes filed alongside.'
    ],
    pull: { q: 'The band took its name after playing Halestorm\'s "Love Bites (So Do I)" at rehearsal — a song that happened to fit asami\'s voice exactly.', c: 'Cross-referenced: Wikipedia, generasia' },
    facts: [
      { b: 'Formed', t: 'Tokyo, 2016, by miho (bass) and haruna (drums).' },
      { b: 'Live debut', t: '18 November 2016 — Tsutaya O-West, Tokyo.' },
      { b: 'Language', t: 'English lyrics, decided before the band had a singer.' },
      { b: 'Name', t: 'From Halestorm\'s "Love Bites (So Do I)".' }
    ],
    src: ['wiki-band', 'generasia-band', 'allfemale-about']
  },
  {
    id: 'ch3', num: 'III', years: '2017', title: 'Early Releases',
    body: [
      '<strong>The Lovebites EP</strong> arrived on <strong>24 May 2017</strong> through Victor Entertainment — four tracks, twenty-one minutes, no apologies. Its closer, "Bravehearted", was a new arrangement of an unreleased Destrose song written by miho and haruna, which makes the debut a literal bridge from the old band to the new one.',
      'miho has said the EP was really a demo, made to get the band signed. The label liked it enough to have it properly mastered and put out as a record. It reached <strong>No. 27 on the Oricon chart</strong> and No. 40 on Billboard Japan — modest numbers that undersold what happened next.',
      'The international reaction was disproportionate and fast. <strong>JPU Records</strong> released the EP in Europe on 25 August 2017 and <strong>Sliptrick Records</strong> in North America on 31 August. Five months after the Japanese release, the band\'s debut album <strong>Awakening from Abyss</strong> landed on <strong>25 October 2017</strong>: twelve tracks, including re-recorded "Awakened" versions of three of the four EP songs, peaking at <strong>No. 18 on Oricon</strong>.',
      'Then they got on a plane. At the end of November 2017 LOVEBITES played their first shows outside Japan — two nights at <strong>Hyper Japan Christmas</strong> in London on 25 and 26 November, and their first UK headline show at the <strong>Camden Underworld</strong> on the 27th, on the eve of the album\'s UK release. That first trip, barely a year after their debut gig, set the pattern for the rest of their career: a Japanese band whose audience grew abroad at least as fast as it did at home.'
    ],
    pull: { q: 'miho said the EP was more of a demo to get the band signed — but the label liked it so much they had it properly mastered and released.', c: 'Wikipedia, The Lovebites EP' },
    facts: [
      { b: 'The Lovebites EP', t: '24 May 2017 · Oricon No. 27 · Billboard Japan No. 40' },
      { b: 'Awakening from Abyss', t: '25 October 2017 · Oricon No. 18 · Billboard Japan No. 33' },
      { b: 'First overseas shows', t: 'London, 25–27 November 2017.' },
      { b: 'International labels', t: 'JPU Records (Europe), Sliptrick (North America).' }
    ],
    src: ['wiki-ep1', 'wiki-afa', 'metaltalk-london', 'jgen-camden']
  },
  {
    id: 'ch4', num: 'IV', years: '2018 – 2019', title: 'Rise to International Recognition',
    body: [
      '2018 is the year LOVEBITES stopped being a promising Japanese band and became an international one, and it happened in about ten weeks.',
      'The EP <strong>Battle Against Damnation</strong> came out in Japan on <strong>6 June 2018</strong> and in the West two days later through JPU. Three days after that, at Indigo at The O2 in London, LOVEBITES were named <strong>Best New Band at the Metal Hammer Golden Gods Awards</strong>. miho and miyako flew in from Tokyo to accept it — the band\'s two founders and arrangers collecting a British metal award for a band that had existed for less than two years.',
      'On <strong>4 August 2018</strong> they played <strong>Wacken Open Air</strong>, reported as the first all-female Japanese metal band to appear at the festival, and in the same month <strong>Bloodstock Open Air</strong> in the UK. The second album, <strong>Clockwork Immortality</strong> (<strong>5 December 2018</strong>), locked in the sound that recognition had been built on: ten new songs, mixed by <strong>Mikko Karmila</strong> and mastered by <strong>Mika Jussila</strong> at Finnvox — the Finnish engineers behind a large part of the European power metal canon. Some critics went a long way out on it; one argued it might be the finest metal album ever recorded by an all-female group.',
      '2019 was the consolidation. A Japanese tour, whose Tokyo date at Mynavi Blitz Akasaka on <strong>27 January</strong> was filmed for the band\'s first standalone concert release; a support run with <strong>Arch Enemy</strong> in China; and a European festival summer — <strong>Download Festival</strong> in the UK, <strong>Graspop Metal Meeting</strong> in Belgium, <strong>Download Madrid</strong> in Spain — plus <strong>Summer Sonic</strong> at home. <strong>Daughters of the Dawn – Live in Tokyo 2019</strong> followed on 10 July.'
    ],
    pull: { q: 'Best New Band, Metal Hammer Golden Gods Awards 2018 — accepted in London by miho and miyako, three days after the band\'s new EP reached Western shops.', c: 'JaME, Louder / Metal Hammer' },
    facts: [
      { b: 'Golden Gods 2018', t: 'Best New Band, Indigo at The O2, London.' },
      { b: 'Wacken Open Air', t: '4 August 2018 — reported as a first for an all-female Japanese metal band.' },
      { b: 'Clockwork Immortality', t: '5 December 2018 · Oricon No. 21 · mixed by Mikko Karmila, mastered by Mika Jussila.' },
      { b: '2019 festivals', t: 'Download UK, Download Madrid, Graspop, Summer Sonic.' }
    ],
    src: ['jame-gg', 'louder-gg', 'wiki-bad', 'wiki-ci', 'wiki-band', 'blab-ci']
  },
  {
    id: 'ch5', num: 'V', years: '2020 – 2021', title: 'The Major Albums Era',
    body: [
      '<strong>Electric Pentagram</strong> (<strong>29 January 2020</strong>) is the high-water mark of the original lineup: twelve songs, none of them under five minutes, and the band\'s best Japanese chart showing to that point at <strong>No. 9 on Oricon</strong> and No. 12 on Billboard Japan. JPU released it in the UK two days later; Red River Entertainment handled North America on 24 April. A physical single for <strong>"Golden Destination"</strong> followed in Japan on 19 February.',
      'What the album did not get was the tour it was built for. The years 2020 and 2021 confined LOVEBITES almost entirely to Japan, and the band\'s response was to pour its resources into filmed performance. The Zepp DiverCity show of <strong>21 February 2020</strong> became <strong>Five of a Kind – Live in Tokyo 2020</strong> (22 July), which went to <strong>No. 1 on the Oricon Blu-ray chart</strong>. The EP <strong>Glory, Glory, to the World</strong> arrived on <strong>10 March 2021</strong>, produced by Steve Jacobs, again mixed and mastered by Karmila and Jussila, and carrying "Winds of Transylvania" — the theme song to the anime <em>Vladlove</em>, directed by Mamoru Oshii and Junji Nishimura.',
      'Then, on <strong>26 March 2021</strong>, the Ride for Vengeance Tour reached Tokyo Dome City Hall, and the band played the show of its life: eighteen songs, seven of them live debuts, pillars of fire for "Set the World on Fire", snow falling through "A Frozen Serenade", and miyako on keytar for the first time on "Spellbound". It was released as <strong>Heavy Metal Never Dies – Live in Tokyo 2021</strong> on 29 September.',
      'Nobody watching knew it at the time, but that night is the last recorded performance of LOVEBITES as it had existed since 2016.'
    ],
    pull: { q: 'Eighteen songs, seven of them live debuts, fire, falling snow, and a keytar. It would turn out to be the original lineup\'s last recorded night.', c: 'Heavy Metal Never Dies — Live in Tokyo 2021' },
    facts: [
      { b: 'Electric Pentagram', t: '29 January 2020 · Oricon No. 9 · Billboard Japan No. 12' },
      { b: 'Five of a Kind', t: 'Filmed 21 Feb 2020 · No. 1 Oricon Blu-ray chart.' },
      { b: 'Glory, Glory, to the World', t: '10 March 2021 · includes the Vladlove anime theme.' },
      { b: 'Heavy Metal Never Dies', t: 'Filmed 26 March 2021 — the final recording with miho.' }
    ],
    src: ['wiki-ep', 'wiki-gd', 'wiki-ggw', 'wiki-band', 'setlist-2021']
  },
  {
    id: 'ch6', num: 'VI', years: '2016 – present', title: 'Lineup Changes',
    body: [
      'For five years LOVEBITES had no lineup changes at all. The five people who played the first show in November 2016 played every show and every note of every record through to March 2021. That stability is part of why the single change that followed was so disruptive.',
      'There have been exactly two personnel events in the band\'s history: <strong>miho\'s departure in August 2021</strong>, and <strong>fami\'s arrival in October 2022</strong>. Between them sits a fourteen-month hiatus in which LOVEBITES had four members and no activity.',
      'The chart in the <a href="#lineup">Lineup &amp; Members</a> section below maps all six tenures against the calendar, with the hiatus shaded and the join and departure points marked. Each member panel opens into a full background: what they played before, what they contribute, and what they are credited with.'
    ],
    facts: [
      { b: 'Founding five', t: 'asami, midori, miyako, miho, haruna — 2016.' },
      { b: 'Departure', t: 'miho — announced 17 August 2021.' },
      { b: 'Arrival', t: 'fami — announced 21 October 2022.' },
      { b: 'Unchanged', t: 'asami, midori, miyako and haruna — continuous since 2016.' }
    ],
    src: ['wiki-band', 'jpu-hiatus', 'jpu-fami']
  },
  {
    id: 'ch7', num: 'VII', years: '2021 – 2022', title: 'miho\'s Departure and the Hiatus',
    body: [
      'On <strong>17 August 2021</strong>, LOVEBITES announced that miho — their bassist, founder and leader — was leaving, and that the band was going on hiatus.',
      'The band\'s statement said that miho had been thinking about leaving for some months, and that although the members and the management had held several conversations with her, her decision did not change. miho issued her own statement. She described it as a very hard decision, said there was no bad blood with anyone, and wrote that she had "been self-reflecting and reconsidering how I can be myself as a musician."',
      'That is the whole of the public record, and it is where this page stops. Both parties framed the split as amicable and personal. No further explanation has been offered by the band or by miho, and none is inferred here.',
      'The practical effect was severe. LOVEBITES lost the person who had founded it, led it, written for it and decided what language it sang in, five months after releasing its best-selling EP and five months after the biggest show it had ever played. The band did not announce an end date for the hiatus.',
      'What it did do was close the first era properly. <strong>In the Beginning – The Best of 2017–2021</strong> collected twenty-one fan-voted tracks from the three albums, two mini-albums and one single of the original period, remastered by Mika Jussila at Finnvox, and added one new song: <strong>"Nameless Warrior"</strong>, written after miho\'s decision to leave and the last track ever recorded by the founding lineup. It went out digitally on 22 December 2021 and on 2CD on 14 January 2022.',
      'Then, in <strong>April 2022</strong>, the band did something that told you it intended to continue: it opened auditions for a bassist, worldwide, to applicants of <strong>any nationality, any age and any gender</strong>.'
    ],
    pull: { q: 'I have been self-reflecting and reconsidering how I can be myself as a musician.', c: 'miho, departure statement, 17 August 2021' },
    facts: [
      { b: 'Announced', t: '17 August 2021 — departure and hiatus, same statement.' },
      { b: 'Framing', t: 'Both the band and miho described the split as amicable.' },
      { b: 'Last studio track', t: '"Nameless Warrior", on In the Beginning.' },
      { b: 'Auditions opened', t: 'April 2022 — any nationality, any age, any gender.' }
    ],
    src: ['jpu-hiatus', 'jrock-hiatus', 'mg-hiatus', 'jpu-itb', 'metaltalk-fami'],
    confidence: 'confirmed'
  },
  {
    id: 'ch8', num: 'VIII', years: '2022 – 2023', title: 'The Return',
    body: [
      'On <strong>21 October 2022</strong> a video premiered on the band\'s channel and the hiatus ended. The new bassist was <strong>fami</strong>: twenty years old, Japanese, a working live and session player since her teens, a solo artist who had written every note and word of her own album, and the owner of a YouTube channel with roughly 650,000 subscribers that she had started in high school.',
      'It was, in its way, a very deliberate answer to how the band had lost its founder. miho had been the bass player as architect — the leader who assembled the group. fami was recruited by a global open call and arrived as a performer of a different generation, with an audience of her own already attached.',
      'The music came fast. <strong>Judgement Day</strong> was released in Japan on <strong>22 February 2023</strong> and in the UK two days later: ten songs, 53 minutes, opening with "We Are the Resurrection" in case anyone had missed the point. It went to <strong>No. 5 on both the Oricon and Billboard Japan charts</strong> — the band\'s highest placing, before or since, achieved on its first record without its founder.',
      'The live return was staged as a two-night event, <strong>"WE ARE THE RESURRECTION"</strong>, at EX Theater Roppongi in Tokyo in March 2023. Both nights were filmed. The first became <strong>Knockin\' at Heaven\'s Gate – Live in Tokyo 2023</strong> (23 August 2023); the second became <strong>Chapter 2</strong>, released digitally on 20 December 2023 and physically on 2 February 2024.',
      'The sound did not lurch. What changed was closer to emphasis than direction: a heavier low end, a rhythm section recorded with more front, and a band that now had something to prove rather than something to protect.'
    ],
    pull: { q: 'Judgement Day reached No. 5 on both the Oricon and Billboard Japan charts — the band\'s highest-charting record, and the first made without its founder.', c: 'Wikipedia, Judgement Day' },
    facts: [
      { b: 'fami announced', t: '21 October 2022 — hiatus ends after ~14 months.' },
      { b: 'Judgement Day', t: '22 February 2023 · No. 5 Oricon · No. 5 Billboard Japan.' },
      { b: 'Comeback shows', t: '"WE ARE THE RESURRECTION", EX Theater Roppongi, March 2023.' },
      { b: 'Both nights filmed', t: 'Knockin\' at Heaven\'s Gate, and Chapter 2.' }
    ],
    src: ['jpu-fami', 'blab-return', 'wiki-jd', 'bw-khg', 'knac-khg']
  },
  {
    id: 'ch9', num: 'IX', years: '2024 – 2026', title: 'Recent Era',
    body: [
      'With a stable five-piece again, LOVEBITES did the thing the pandemic and the hiatus had taken from them: they toured the world properly.',
      '<strong>"The Thin Line Between Love and Hate"</strong>, announced at the start of 2024 and running from June, was the band\'s <strong>first world tour</strong>. It took in the UK and Europe — including the <strong>main stage at Hellfest</strong> on 28 June, plus <strong>Resurrection Fest</strong> and <strong>Rock Imperium</strong> in Spain and <strong>Roskilde</strong> in Denmark — then the United States, with <strong>ProgPower USA</strong> in September, and South Korea, before coming home. On <strong>1 September 2024</strong> they played Tokyo Garden Theater, their biggest solo show to that date.',
      'Mid-tour they released <strong>LOVEBITES EP II</strong> (<strong>28 August 2024</strong>): five songs, produced by Steve Jacobs, with outside collaborator <strong>Mao</strong> contributing music for "Soul Defender" (with asami) and "The Bell in the Jail". The international 2CD edition paired it with the <strong>Re-LOVEBITES EP</strong> — the four songs of the 2017 debut re-recorded by the current five-piece. The band\'s own framing for the package was "LOVEBITES 2.0": the raw energy of the early material played with the technique the band now had.',
      '2025 was a touring year on both sides of the Pacific. The <strong>Eternal Phenomenon Tour</strong> ran through Japan from <strong>26 January to 13 March</strong>, nine shows ending at Zepp DiverCity in Tokyo, with a setlist built around EP II and deep cuts. In November they returned to the United States for the <strong>Eternal Phenomenon Tour US 2025</strong> — nine cities from the Gramercy Theatre in New York on the 4th to The Vermont Hollywood in Los Angeles on the 15th.',
      '2026 has been the biggest year of the band\'s life. On <strong>18 February</strong> they released their fifth album, <strong>Outstanding Power</strong>, in Japan through Victor — and simultaneously announced that they had <strong>signed with Napalm Records</strong>, the Austrian label, which put the album out digitally worldwide that day and physically on <strong>8 May</strong>. Reviews were the strongest of their career; Angry Metal Guy placed it at the top of the band\'s catalogue.',
      'Then, on <strong>29 March 2026</strong>, LOVEBITES headlined <strong>Nippon Budokan</strong> for the first time, sold it out, and streamed it worldwide. The <strong>Outstanding Tour</strong> announced afterwards is the largest Japanese tour they have ever mounted — ten shows in nine cities from <strong>29 August to 26 September</strong> — and the European leg in July and August took them to <strong>Austria, Hungary, Poland and the Czech Republic for the first time</strong>, with a return to Wacken Open Air on 29 July.'
    ],
    pull: { q: 'Outstanding Power claims the top spot in Lovebites\' catalogue so far.', c: 'Angry Metal Guy, 2026' },
    facts: [
      { b: 'First world tour', t: '2024 — "The Thin Line Between Love and Hate".' },
      { b: 'LOVEBITES EP II', t: '28 August 2024 · with the Re-LOVEBITES EP internationally.' },
      { b: 'Outstanding Power', t: '18 February 2026 · Victor (JP) / Napalm (world).' },
      { b: 'Nippon Budokan', t: '29 March 2026 — first headline show, sold out, streamed worldwide.' }
    ],
    src: ['ann-wt', 'jpu-wt', 'jpu-ep2', 'jpu-us25', 'wiki-op', 'blab-napalm', 'avo-eu26', 'amg-op', 'roppongi-budokan']
  },
  {
    id: 'ch10', num: 'X', years: 'Assessment', title: 'Legacy',
    body: [
      'LOVEBITES occupy a specific and slightly awkward position: a Japanese band that is more frequently discussed as a <em>metal</em> band than as a <em>Japanese</em> band, which is precisely what they set out to be.',
      'The lineage matters. Destrose, where the band\'s two founders met, is regarded as a forerunner of the Japanese all-female metal wave whose descendants found overseas audiences. LOVEBITES are the act from that wave that pushed furthest into the traditional European metal world on its own terms — not through crossover, novelty or an idol framing, but by playing twin-guitar power metal, in English, at festivals where that is the native language.',
      'The markers are concrete. A <strong>Metal Hammer Golden Gods award</strong> within two years of forming. The <strong>first all-female Japanese metal band at Wacken Open Air</strong>. Main stage at Hellfest. A sold-out <strong>Nippon Budokan</strong> headline in 2026, a venue that is the traditional proof of arrival for a Japanese rock act. A deal with <strong>Napalm Records</strong>, which places them on the roster of a mainstream European metal label rather than in a Japan-import niche.',
      'And there is the harder, more interesting part of the legacy: they survived. Bands that lose their founder, leader and principal architect at their commercial peak usually do not come back, and when they do they rarely come back bigger. LOVEBITES went on hiatus with no end date in 2021, reopened the bass chair to the entire world, and then made their highest-charting album and their best-reviewed one.',
      'Whatever else the band is, that recovery is now part of what it is for.'
    ],
    src: ['metalstorm-bio', 'wiki-band', 'jame-gg', 'amg-op', 'roppongi-budokan']
  }
];

/* ================= TIMELINE ================= */
/* d: ISO-ish sort key. label: human date string. */

LB.timeline = [
  { d:'2015-01-01', y:2015, label:'2015', cat:'formation', t:'Destrose disbands',
    x:'The all-female Japanese metal band where bassist miho and drummer haruna met breaks up. Destrose is regarded as a forerunner of Japan\'s "girls metal band" wave. miho immediately begins assembling the group she actually wants.',
    who:['miho','haruna'], src:['wiki-band','louder-nbotw','metalstorm-bio'] },

  { d:'2016-01-01', y:2016, label:'2016', cat:'formation', t:'LOVEBITES formed in Tokyo',
    x:'miho and haruna start a new band. Guitarists midori and miyako are recruited; vocalist asami is then chosen on the strength of a submitted demo alone, without an in-person audition. miho sets the policy that the band will write and sing in English.',
    who:['miho','haruna','midori','miyako','asami'], src:['wiki-band','generasia-band'],
    flag:'The exact month of the band\'s formation has not been published; 2016 is the year given by all sources.' },

  { d:'2016-06-01', y:2016, label:'2016', cat:'milestone', t:'The band takes its name',
    x:'At a rehearsal the group plays Halestorm\'s "Love Bites (So Do I)" — a song that sits perfectly in asami\'s voice — and names itself after it.',
    who:['asami'], src:['wiki-band','generasia-band'] },

  { d:'2016-11-18', y:2016, label:'18 Nov 2016', cat:'milestone', t:'Live debut — Tsutaya O-West, Tokyo',
    x:'LOVEBITES play their first concert as part of the "Girls Band Next Generation" event, roughly six months before any recorded music exists.',
    who:['asami','midori','miyako','miho','haruna'], src:['wiki-band'] },

  { d:'2017-05-24', y:2017, label:'24 May 2017', cat:'release', t:'The Lovebites EP',
    x:'Debut EP, four tracks, via Victor Entertainment. Reaches No. 27 on Oricon and No. 40 on Billboard Japan. miho later says it was essentially a demo intended to get the band signed — the label liked it enough to master and release it properly.',
    rel:'the-lovebites-ep', who:['asami','midori','miyako','miho','haruna'], src:['wiki-ep1'] },

  { d:'2017-08-25', y:2017, label:'25 & 31 Aug 2017', cat:'release', t:'Debut EP released in the West',
    x:'JPU Records issues The Lovebites EP in Europe on 25 August; Sliptrick Records follows in North America on 31 August. The band\'s overseas infrastructure is in place within three months of its first record.',
    rel:'the-lovebites-ep', src:['wiki-ep1'] },

  { d:'2017-10-25', y:2017, label:'25 Oct 2017', cat:'release', t:'Awakening from Abyss — debut album',
    x:'Twelve tracks including re-recorded "Awakened" versions of three debut-EP songs. No. 18 on Oricon, No. 33 on Billboard Japan. JPU handles Europe, Sliptrick North America.',
    rel:'awakening-from-abyss', who:['asami','midori','miyako','miho','haruna'], src:['wiki-afa'] },

  { d:'2017-11-25', y:2017, label:'25–26 Nov 2017', cat:'tour', t:'First shows outside Japan — Hyper Japan Christmas, London',
    x:'Two nights at the London event give LOVEBITES their live debut abroad, almost exactly a year after their first-ever concert.',
    src:['metaltalk-london','jgen-camden'] },

  { d:'2017-11-27', y:2017, label:'27 Nov 2017', cat:'tour', t:'First UK headline show — Camden Underworld',
    x:'The band headlines in London on the eve of Awakening from Abyss\'s UK release, playing a set drawn from the debut album.',
    src:['metaltalk-london','jgen-camden'] },

  { d:'2018-06-06', y:2018, label:'6 Jun 2018', cat:'release', t:'Battle Against Damnation EP',
    x:'Four new tracks. No. 20 on Oricon, No. 24 on Billboard Japan. JPU Records releases it in Europe and North America two days later.',
    rel:'battle-against-damnation', who:['asami','midori','miyako','miho','haruna'], src:['wiki-bad'] },

  { d:'2018-06-11', y:2018, label:'June 2018', cat:'award', t:'Metal Hammer Golden Gods — Best New Band',
    x:'LOVEBITES win Best New Band at the 16th Golden Gods, held at Indigo at The O2 in London and hosted by Jamey Jasta. miho and miyako fly in from Tokyo to accept. The ceremony falls three days after the band\'s new EP reaches Western shops.',
    who:['miho','miyako'], src:['jame-gg','louder-gg','jpu-gg'],
    flag:'Sources place the ceremony in June 2018, three days after the 8 June Western EP release; the exact ceremony date is not stated consistently.' },

  { d:'2018-08-04', y:2018, label:'4 Aug 2018', cat:'festival', t:'Wacken Open Air debut',
    x:'Reported as the first all-female Japanese metal band to perform at the German festival — the single most-cited line in the band\'s press history.',
    src:['wiki-band','metalstorm-bio'] },

  { d:'2018-08-10', y:2018, label:'August 2018', cat:'festival', t:'Bloodstock Open Air',
    x:'The band plays the UK festival in the same month as its Wacken debut, consolidating a European audience built largely on the strength of the debut album and EP.',
    src:['wiki-band'] },

  { d:'2018-12-05', y:2018, label:'5 Dec 2018', cat:'release', t:'Clockwork Immortality — second album',
    x:'Ten new recordings, mixed by Mikko Karmila and mastered by Mika Jussila at Finnvox in Finland. No. 21 on Oricon, No. 23 on Billboard Japan. The album that fixed the band\'s reputation abroad.',
    rel:'clockwork-immortality', who:['asami','midori','miyako','miho','haruna'], src:['wiki-ci','blab-ci'] },

  { d:'2019-01-27', y:2019, label:'27 Jan 2019', cat:'tour', t:'Tokyo show filmed at Mynavi Blitz Akasaka',
    x:'The Tokyo date of the Clockwork Immortality home tour is recorded in full and becomes the band\'s first standalone concert release.',
    rel:'daughters-of-the-dawn', src:['wiki-band','ma-band'] },

  { d:'2019-03-01', y:2019, label:'2019', cat:'tour', t:'Supporting Arch Enemy in China',
    x:'LOVEBITES open for Arch Enemy on a Chinese run — an early example of the band touring Asia in a support slot on a major metal bill.',
    src:['wiki-band'] },

  { d:'2019-06-14', y:2019, label:'June–July 2019', cat:'festival', t:'European festival summer',
    x:'Download Festival in the UK, Graspop Metal Meeting in Belgium and Download Festival Madrid in Spain, inside a few weeks.',
    src:['wiki-band'] },

  { d:'2019-07-10', y:2019, label:'10 Jul 2019', cat:'release', t:'Daughters of the Dawn – Live in Tokyo 2019',
    x:'First live album and concert video, on Blu-ray, DVD and CD, from the January show at Mynavi Blitz Akasaka.',
    rel:'daughters-of-the-dawn', who:['asami','midori','miyako','miho','haruna'], src:['ma-band','discogs'] },

  { d:'2019-08-16', y:2019, label:'2019', cat:'festival', t:'Summer Sonic, Japan',
    x:'An appearance at one of Japan\'s two biggest mainstream festivals, in the same year as the band\'s first full European festival circuit.',
    src:['wiki-band'] },

  { d:'2020-01-29', y:2020, label:'29 Jan 2020', cat:'release', t:'Electric Pentagram — third album',
    x:'Twelve tracks, no song shorter than five minutes, and the original lineup\'s commercial peak: No. 9 on Oricon, No. 12 on Billboard Japan. JPU releases it in the UK two days later; Red River Entertainment handles North America on 24 April.',
    rel:'electric-pentagram', who:['asami','midori','miyako','miho','haruna'], src:['wiki-ep','mer-ep'] },

  { d:'2020-02-19', y:2020, label:'19 Feb 2020', cat:'release', t:'"Golden Destination" — first single',
    x:'A physical single drawn from Electric Pentagram, released in Japan by Victor and internationally by JPU Records on 10 April.',
    rel:'golden-destination', src:['wiki-gd'] },

  { d:'2020-02-21', y:2020, label:'21 Feb 2020', cat:'tour', t:'Zepp DiverCity show filmed',
    x:'The Tokyo date of the Electric Pentagram tour is recorded for release — one of the last full shows the original lineup would play to a full house before touring stopped.',
    rel:'five-of-a-kind', src:['discogs','ma-band'] },

  { d:'2020-07-22', y:2020, label:'22 Jul 2020', cat:'release', t:'Five of a Kind – Live in Tokyo 2020',
    x:'Second concert film and live album, from the February Zepp DiverCity show. Reaches No. 1 on the Oricon Music Blu-ray chart — the band\'s first chart-topping release of any kind.',
    rel:'five-of-a-kind', who:['asami','midori','miyako','miho','haruna'], src:['wiki-band','discogs'] },

  { d:'2021-03-10', y:2021, label:'10 Mar 2021', cat:'release', t:'Glory, Glory, to the World EP',
    x:'Five tracks, 22:53, produced by Steve Jacobs with mixing and mastering by Mikko Karmila and Mika Jussila. Includes "Winds of Transylvania", the theme song to the anime Vladlove from directors Mamoru Oshii and Junji Nishimura. JPU releases it in the UK on 28 May.',
    rel:'glory-glory-to-the-world', who:['asami','midori','miyako','miho','haruna'], src:['wiki-ggw','jpu-ggw'] },

  { d:'2021-03-26', y:2021, label:'26 Mar 2021', cat:'tour', t:'Tokyo Dome City Hall — Ride for Vengeance Tour',
    x:'Eighteen songs, seven of them live debuts. Pillars of fire for "Set the World on Fire", snow falling through "A Frozen Serenade", and miyako playing keytar live for the first time on "Spellbound". It becomes the last recorded performance of the original lineup.',
    rel:'heavy-metal-never-dies', who:['asami','midori','miyako','miho','haruna'], src:['setlist-2021','discogs'] },

  { d:'2021-08-17', y:2021, label:'17 Aug 2021', cat:'hiatus', t:'miho departs; LOVEBITES go on hiatus',
    x:'The band announces that founder, leader and bassist miho is leaving, and that LOVEBITES are entering a hiatus with no stated end date. The band says miho had been considering it for months and that several conversations with the members and management did not change her decision. miho, in her own statement, calls it a very hard decision, says there is no bad blood, and writes that she has "been self-reflecting and reconsidering how I can be myself as a musician."',
    who:['miho'], src:['jpu-hiatus','jrock-hiatus','mg-hiatus'] },

  { d:'2021-09-29', y:2021, label:'29 Sep 2021', cat:'release', t:'Heavy Metal Never Dies – Live in Tokyo 2021',
    x:'The March concert film, released six weeks after the hiatus announcement. The original lineup\'s final document.',
    rel:'heavy-metal-never-dies', who:['asami','midori','miyako','miho','haruna'], src:['discogs','ma-band'] },

  { d:'2021-12-22', y:2021, label:'22 Dec 2021', cat:'release', t:'In the Beginning — digital release',
    x:'A 21-track fan-voted retrospective of 2017–2021, remastered by Mika Jussila, plus one new song: "Nameless Warrior", written after miho\'s decision to leave and the last track recorded by the founding five.',
    rel:'in-the-beginning', who:['asami','midori','miyako','miho','haruna'], src:['jpu-itb'] },

  { d:'2022-01-14', y:2022, label:'14 Jan 2022', cat:'release', t:'In the Beginning — 2CD release',
    x:'The physical edition of the retrospective arrives mid-hiatus, closing the band\'s first era on record.',
    rel:'in-the-beginning', src:['jpu-itb','ma-band'],
    flag:'Retailers and databases list the digital release as 22 December 2021 and the CD as 14 January 2022; both dates are given here.' },

  { d:'2022-04-01', y:2022, label:'April 2022', cat:'member', t:'Worldwide bass auditions open',
    x:'Rather than quietly recruiting a replacement, LOVEBITES open the bass chair to applicants of any nationality, any age and any gender, anywhere in the world — the clearest public signal that the band intended to continue.',
    src:['metaltalk-fami','jpu-fami'] },

  { d:'2022-10-21', y:2022, label:'21 Oct 2022', cat:'return', t:'fami joins — the hiatus ends',
    x:'After a long selection process, a video premiere announces fami as the band\'s new bassist, restoring LOVEBITES to five members after roughly fourteen months. She is twenty: a live and session player since her teens, a self-produced solo artist, and the owner of a YouTube channel started in high school with around 650,000 subscribers.',
    who:['fami'], src:['jpu-fami','metaltalk-fami','blab-return'] },

  { d:'2023-02-22', y:2023, label:'22 Feb 2023', cat:'release', t:'Judgement Day — fourth album',
    x:'Ten songs, 53:24, opening with "We Are the Resurrection". fami\'s recorded debut. It reaches No. 5 on both the Oricon and Billboard Japan charts — the band\'s highest placing to date. JPU Records releases it in the UK two days later.',
    rel:'judgement-day', who:['asami','midori','miyako','fami','haruna'], src:['wiki-jd','distorted-jd','blab-return'] },

  { d:'2023-03-11', y:2023, label:'11–12 Mar 2023', cat:'return', t:'"WE ARE THE RESURRECTION" — comeback shows',
    x:'Two nights at EX Theater Roppongi in Tokyo mark fami\'s live debut and the band\'s return to the stage. Both nights are filmed and released separately.',
    rel:'knockin-at-heavens-gate', who:['asami','midori','miyako','fami','haruna'], src:['bw-khg','knac-khg'],
    flag:'Sources differ on which night became the first release: Encyclopaedia Metallum and BraveWords give 11 March for Knockin\' at Heaven\'s Gate, while other write-ups cite 12 March. Both nights were performed and recorded.' },

  { d:'2023-08-23', y:2023, label:'23 Aug 2023', cat:'release', t:'Knockin\' at Heaven\'s Gate – Live in Tokyo 2023',
    x:'The first of the two comeback nights, on Blu-ray, DVD and 2CD.',
    rel:'knockin-at-heavens-gate', who:['asami','midori','miyako','fami','haruna'], src:['bw-khg','ma-band'] },

  { d:'2023-12-20', y:2023, label:'20 Dec 2023', cat:'release', t:'Knockin\' at Heaven\'s Gate – Chapter 2',
    x:'The second comeback night, released digitally in December 2023 and physically on 2 February 2024. Its "Swan Song" performance was issued as a video.',
    rel:'knockin-chapter-2', who:['asami','midori','miyako','fami','haruna'], src:['ma-band','discogs'] },

  { d:'2023-12-28', y:2023, label:'End of 2023', cat:'award', t:'Judgement Day in Metal Hammer\'s readers\' poll',
    x:'The album places 15th in Metal Hammer\'s end-of-year readers\' album ranking — a notable showing for a Japanese band in a British magazine\'s popular vote.',
    rel:'judgement-day', src:['jpu-livealbum24'], confidence:'reported',
    flag:'Reported by JPU Records; the full published poll table was not independently verified here.' },

  { d:'2024-01-01', y:2024, label:'January 2024', cat:'tour', t:'First world tour announced',
    x:'LOVEBITES announce "The Thin Line Between Love and Hate" — their first world tour — covering the UK, Europe, the United States, South Korea and Japan across 2024. Early shows sell out on announcement.',
    src:['ann-wt','jpu-wt','electricbloom-london'] },

  { d:'2024-02-02', y:2024, label:'2 Feb 2024', cat:'release', t:'Chapter 2 — physical release',
    x:'The second comeback concert gets its Blu-ray, DVD and CD release.',
    rel:'knockin-chapter-2', src:['ma-band','discogs'] },

  { d:'2024-06-15', y:2024, label:'June 2024', cat:'tour', t:'World tour begins in Europe',
    x:'The band opens the European leg with headline club shows across the continent and the UK before the festival run.',
    src:['jpu-wt','concerts-metal'] },

  { d:'2024-06-28', y:2024, label:'28 Jun 2024', cat:'festival', t:'Hellfest main stage',
    x:'LOVEBITES play the main stage at France\'s Hellfest — one of the largest platforms the band has reached in Europe.',
    src:['jpu-wt'] },

  { d:'2024-06-29', y:2024, label:'Summer 2024', cat:'festival', t:'Resurrection Fest, Rock Imperium, Roskilde',
    x:'Spain\'s Resurrection Fest and Rock Imperium Festival and Denmark\'s Roskilde Festival follow inside the same festival window.',
    src:['jpu-wt','wiki-band'] },

  { d:'2024-08-28', y:2024, label:'28 Aug 2024', cat:'release', t:'LOVEBITES EP II',
    x:'Five new songs, produced by Steve Jacobs, with collaborator Mao contributing music for "Soul Defender" (with asami) and "The Bell in the Jail". The international 2CD edition adds the Re-LOVEBITES EP: the four songs of the 2017 debut re-recorded by the current lineup. The band\'s own framing is "LOVEBITES 2.0".',
    rel:'lovebites-ep-ii', who:['asami','midori','miyako','fami','haruna'], src:['jpu-ep2','ma-ep2','discogs'] },

  { d:'2024-09-01', y:2024, label:'1 Sep 2024', cat:'milestone', t:'Tokyo Garden Theater — biggest solo show to date',
    x:'The Japanese climax of the world tour, and at that point the largest headline show LOVEBITES had played.',
    src:['jpu-wt'] },

  { d:'2024-09-12', y:2024, label:'September 2024', cat:'festival', t:'ProgPower USA and US dates',
    x:'The American leg of the world tour includes ProgPower USA alongside club headline shows across the country.',
    src:['jpu-wt','pollstar-2024'] },

  { d:'2025-01-26', y:2025, label:'26 Jan – 13 Mar 2025', cat:'tour', t:'Eternal Phenomenon Tour — Japan',
    x:'Nine shows across Japan — Fukuoka, Kagawa, Osaka, Nagoya, Hokkaido, Miyagi, Niigata, Shizuoka — ending at Zepp DiverCity in Tokyo on 13 March. The setlist leans on LOVEBITES EP II and pulls out songs the band had not played in years.',
    who:['asami','midori','miyako','fami','haruna'], src:['metalstorm-ep25','setlist-2025','note-ep25'] },

  { d:'2025-11-04', y:2025, label:'4–15 Nov 2025', cat:'tour', t:'Eternal Phenomenon Tour US 2025',
    x:'Nine US cities: New York (Gramercy Theatre, 4th), Baltimore (5th), Lakewood OH (7th), West Dundee IL (8th), Lawrence KS (10th), Dallas (11th), Austin (12th), San Luis Obispo (14th) and Los Angeles (The Vermont Hollywood, 15th), with Edge of Paradise supporting on dates including Los Angeles.',
    who:['asami','midori','miyako','fami','haruna'], src:['jpu-us25','bw-us25','piercing-us25'] },

  { d:'2026-02-18', y:2026, label:'18 Feb 2026', cat:'milestone', t:'Signed to Napalm Records',
    x:'LOVEBITES announce a deal with the Austrian label Napalm Records, which takes over international release duties and puts Outstanding Power out digitally worldwide the same day. The lead single "The Castaway" gets a video. It is the band\'s most significant structural change since fami joined.',
    src:['blab-napalm','napalm-op','knotfest-napalm'] },

  { d:'2026-02-18', y:2026, label:'18 Feb 2026', cat:'release', t:'Outstanding Power — fifth album',
    x:'Twelve tracks, 64:10, released in Japan by Victor Entertainment and worldwide by Napalm, with physical formats following on 8 May. Reviews are the strongest of the band\'s career; Angry Metal Guy calls it the best record in their catalogue.',
    rel:'outstanding-power', who:['asami','midori','miyako','fami','haruna'], src:['wiki-op','amg-op','bw-op'] },

  { d:'2026-03-29', y:2026, label:'29 Mar 2026', cat:'milestone', t:'LIVE AT BUDOKAN — sold out',
    x:'LOVEBITES headline Nippon Budokan for the first time, sell it out, and stream the show worldwide. For a Japanese rock band, a solo Budokan is the traditional proof of arrival; the band reached it in its tenth year and its fourth since returning from hiatus.',
    who:['asami','midori','miyako','fami','haruna'], src:['roppongi-budokan','electricbloom-budokan','wiki-op'] },

  { d:'2026-05-08', y:2026, label:'8 May 2026', cat:'release', t:'Outstanding Power — physical release worldwide',
    x:'Napalm Records issues the digipak CD and vinyl editions outside Asia, nearly three months after the digital and Japanese release.',
    rel:'outstanding-power', src:['napalm-op','wiki-op'] },

  { d:'2026-07-22', y:2026, label:'22 Jul – 3 Aug 2026', cat:'tour', t:'Outstanding Tour — EU/UK',
    x:'Vienna (22 July), Budapest (23rd), Warsaw (25th), Prague (26th), Wacken (29th), Tilburg (30th), Paris (1 August) and London (3rd). The run includes the band\'s first-ever shows in Austria, Hungary, Poland and the Czech Republic.',
    who:['asami','midori','miyako','fami','haruna'], src:['avo-eu26','apple-eu26'] },

  { d:'2026-07-29', y:2026, label:'29 Jul 2026', cat:'festival', t:'Wacken Open Air — return',
    x:'Eight years after becoming the first all-female Japanese metal band at Wacken, LOVEBITES return to the festival on the European leg of the Outstanding Tour.',
    src:['avo-eu26','frontstage-2026'] },

  { d:'2026-08-29', y:2026, label:'29 Aug – 26 Sep 2026', cat:'tour', t:'Outstanding Tour — Japan',
    x:'Announced after the Budokan show: ten performances across nine Japanese cities, the largest domestic tour the band has ever mounted.',
    who:['asami','midori','miyako','fami','haruna'], src:['wiki-op'] }
];

/* ================= DISCOGRAPHY ================= */
/* art: {motif, a, b} — motif selects a generated SVG emblem.
   These emblems are ORIGINAL artwork made for this site; they are
   not, and do not reproduce, the official cover art. */

const FIVE_ORIG = ['asami','midori','miyako','miho','haruna'];
const FIVE_NOW  = ['asami','midori','miyako','fami','haruna'];

LB.releases = [
  {
    id:'the-lovebites-ep', type:'ep', title:'The Lovebites EP',
    date:'2017-05-24', dateLabel:'24 May 2017', year:2017,
    art:{motif:'fang', a:'#c8cdd4', b:'#6b7480'},
    formats:['CD','Digital','LP (later reissue)'],
    labels:['Victor Entertainment (JP, 24 May 2017)','JPU Records (EU, 25 Aug 2017)','Sliptrick Records (NA, 31 Aug 2017)'],
    charts:'Oricon No. 27 · Billboard Japan No. 40',
    lineup:FIVE_ORIG,
    tracks:[
      {t:'Don\'t Bite the Dust', d:'4:13', n:true},
      {t:'The Apocalypse', d:'5:00', n:true},
      {t:'Scream for Me', d:'5:46'},
      {t:'Bravehearted', d:'6:10'}
    ],
    notable:['Don\'t Bite the Dust','The Apocalypse'],
    sound:'Twin-guitar traditional heavy metal with power metal tempos and a full-throated clean lead vocal — the template the band has never really abandoned.',
    context:[
      'Four songs made, by miho\'s own account, as a demo to get LOVEBITES signed. Victor liked it enough to have it properly mastered and released as a record in its own right.',
      'The closer, "Bravehearted", is a new arrangement of an unreleased song written by miho and haruna in Destrose — which makes the band\'s first release a direct bridge from the group that ended in 2015.',
      'midori played her first bottleneck-slide guitar solo on "The Apocalypse", having researched the technique partly by studying Derek Trucks footage.'
    ],
    src:['wiki-ep1','wiki-midori']
  },
  {
    id:'awakening-from-abyss', type:'album', title:'Awakening from Abyss',
    date:'2017-10-25', dateLabel:'25 October 2017', year:2017,
    art:{motif:'abyss', a:'#8fb7d9', b:'#1d2b3a'},
    formats:['CD','Digital','LP'],
    labels:['Victor Entertainment (JP)','JPU Records (EU)','Sliptrick Records (NA)'],
    charts:'Oricon No. 18 · Billboard Japan No. 33',
    lineup:FIVE_ORIG,
    tracks:[
      {t:'The Awakening'},
      {t:'The Hammer of Wrath', n:true},
      {t:'Warning Shot'},
      {t:'Shadowmaker', n:true},
      {t:'Scream for Me'},
      {t:'Liar'},
      {t:'Burden of Time'},
      {t:'The Apocalypse (Awakened Version)'},
      {t:'Inspire'},
      {t:'Don\'t Bite the Dust (Awakened Version)'},
      {t:'Edge of the World', n:true},
      {t:'Bravehearted (Awakened Version)'}
    ],
    notable:['The Hammer of Wrath','Shadowmaker','Edge of the World'],
    sound:'A debut album that behaves like a second album: an instrumental overture, three re-cut EP songs, and eight new ones ranging from straight gallop metal to the long-form "Edge of the World".',
    context:[
      'Released five months after the debut EP, with the three strongest EP tracks re-recorded as "Awakened" versions — an unusual move that effectively replaced the band\'s own first record.',
      'It arrived a month before LOVEBITES first played outside Japan; the London shows at the end of November 2017 were built around this material.',
      'The band publicly noted the album\'s No. 18 Oricon placing as a milestone at the time.'
    ],
    src:['wiki-afa','metaltalk-london']
  },
  {
    id:'battle-against-damnation', type:'ep', title:'Battle Against Damnation',
    date:'2018-06-06', dateLabel:'6 June 2018', year:2018,
    art:{motif:'cross', a:'#d9b4b4', b:'#3b1f24'},
    formats:['CD','Digital'],
    labels:['Victor Entertainment (JP, 6 Jun 2018)','JPU Records (EU/NA, 8 Jun 2018)'],
    charts:'Oricon No. 20 · Billboard Japan No. 24',
    lineup:FIVE_ORIG,
    tracks:[
      {t:'The Crusade', n:true},
      {t:'Break the Wall', n:true},
      {t:'Above the Black Sea'},
      {t:'Under the Red Sky'}
    ],
    notable:['The Crusade','Break the Wall'],
    sound:'Four tracks of increasingly dense, increasingly European-sounding power metal — the clearest step between the debut album and Clockwork Immortality.',
    context:[
      'The EP that was in Western shops three days before LOVEBITES won Best New Band at the Metal Hammer Golden Gods in London. The timing is the single luckiest piece of scheduling in the band\'s history.',
      'Its release sits two months before the band\'s Wacken Open Air debut, making 2018 the most compressed period of growth in their career.'
    ],
    src:['wiki-bad','jame-gg']
  },
  {
    id:'clockwork-immortality', type:'album', title:'Clockwork Immortality',
    date:'2018-12-05', dateLabel:'5 December 2018', year:2018,
    art:{motif:'clock', a:'#d8c7a0', b:'#2c2416'},
    formats:['CD','Digital','LP'],
    labels:['Victor Entertainment (JP)','JPU Records (EU/AU/NZ, 7 Dec 2018)'],
    charts:'Oricon No. 21 · Billboard Japan No. 23',
    lineup:FIVE_ORIG,
    tracks:[
      {t:'Addicted', n:true},
      {t:'Pledge of the Savior', n:true},
      {t:'Rising'},
      {t:'Empty Daydream'},
      {t:'Mastermind 01'},
      {t:'M.D.O.'},
      {t:'Journey to the Otherside'},
      {t:'The Final Collision'},
      {t:'We the United'},
      {t:'Epilogue'}
    ],
    notable:['Addicted','Pledge of the Savior'],
    sound:'The band\'s most Finnish-sounding record — mixed by Mikko Karmila and mastered by Mika Jussila at Finnvox, with the layered keyboard and choral detail that implies, over the fastest material they had written to that point.',
    context:[
      'Ten new recordings, with no re-cuts, arriving six months after the Golden Gods award and four months after Wacken. It is the record that converted recognition into a reputation.',
      'Some critics went a long way out on it: one argued it might be the finest metal album ever recorded by an all-female group.',
      'The Tokyo date of the supporting Japanese tour, on 27 January 2019, became the band\'s first concert film.'
    ],
    src:['wiki-ci','blab-ci','metalstorm-bio']
  },
  {
    id:'daughters-of-the-dawn', type:'live', title:'Daughters of the Dawn – Live in Tokyo 2019',
    date:'2019-07-10', dateLabel:'10 July 2019', year:2019,
    art:{motif:'sun', a:'#f0c74a', b:'#3a2a0d'},
    formats:['Blu-ray','DVD','CD'],
    labels:['Victor Entertainment'],
    charts:null,
    lineup:FIVE_ORIG,
    recorded:'Mynavi Blitz Akasaka, Tokyo — 27 January 2019',
    tracksNote:'The full setlist is not reproduced here; the release documents the complete Tokyo show from the Clockwork Immortality home tour.',
    notable:[],
    sound:'The first full document of LOVEBITES as a live band, captured at the end of their breakthrough album cycle.',
    context:[
      'The band\'s first standalone concert video and live album, recorded at the Tokyo date of the Clockwork Immortality tour and released six months later on Blu-ray, DVD and CD.',
      'It established a pattern the band has followed ever since: film the significant Tokyo show, release it as a record.'
    ],
    src:['ma-band','discogs','wiki-band']
  },
  {
    id:'electric-pentagram', type:'album', title:'Electric Pentagram',
    date:'2020-01-29', dateLabel:'29 January 2020', year:2020,
    art:{motif:'pentagram', a:'#9fd8e8', b:'#13262e'},
    formats:['CD','Digital','LP','CD + DVD (limited)'],
    labels:['Victor Entertainment (JP)','JPU Records (UK, 31 Jan 2020)','Red River Entertainment (NA, 24 Apr 2020)'],
    charts:'Oricon No. 9 · Billboard Japan No. 12',
    lineup:FIVE_ORIG,
    tracks:[
      {t:'Thunder Vengeance'},
      {t:'Holy War'},
      {t:'Golden Destination', n:true},
      {t:'Raise Some Hell'},
      {t:'Today Is the Day'},
      {t:'When Destinies Align'},
      {t:'A Frozen Serenade', n:true},
      {t:'Dancing with the Devil'},
      {t:'Signs of Deliverance'},
      {t:'Set the World on Fire', n:true},
      {t:'The Unbroken'},
      {t:'Swan Song', n:true}
    ],
    notable:['Golden Destination','A Frozen Serenade','Set the World on Fire','Swan Song'],
    sound:'Twelve songs, none shorter than five minutes and the longest close to seven — the band at maximum scale and maximum density, and their best-charting album of the original era.',
    context:[
      'The original lineup\'s commercial peak at home: No. 9 on Oricon and No. 12 on Billboard Japan, with a North American release in April through Red River Entertainment.',
      'Several of its songs became the band\'s staging centrepieces — "Set the World on Fire" with pyrotechnics, "A Frozen Serenade" performed under falling snow at Tokyo Dome City Hall in 2021.',
      'Some editions carry a bonus DVD of the band\'s 2018 Wacken Open Air performance.',
      'It is also the album that never got its tour: the band\'s activity across 2020 and 2021 stayed almost entirely inside Japan.'
    ],
    src:['wiki-ep','mer-ep','discogs']
  },
  {
    id:'golden-destination', type:'single', title:'Golden Destination',
    date:'2020-02-19', dateLabel:'19 February 2020', year:2020,
    art:{motif:'bolt', a:'#f0d070', b:'#2f2409'},
    formats:['CD single','Digital'],
    labels:['Victor Entertainment (JP, 19 Feb 2020)','JPU Records (international, 10 Apr 2020)'],
    charts:null,
    lineup:FIVE_ORIG,
    tracksNote:'Issued as a single drawn from Electric Pentagram; the band\'s first stand-alone single release.',
    notable:['Golden Destination'],
    sound:'The most immediately anthemic song on Electric Pentagram, pulled out as the album\'s flag.',
    context:[
      'LOVEBITES\' first single, released three weeks after the album it came from and internationally two and a half months later.',
      'It remains the only release the band has issued as a dedicated single rather than as an EP, album or live record.'
    ],
    src:['wiki-gd']
  },
  {
    id:'five-of-a-kind', type:'live', title:'Five of a Kind – Live in Tokyo 2020',
    date:'2020-07-22', dateLabel:'22 July 2020', year:2020,
    art:{motif:'star5', a:'#cfd6dd', b:'#1b2026'},
    formats:['Blu-ray','DVD','CD'],
    labels:['Victor Entertainment'],
    charts:'No. 1 — Oricon Music Blu-ray chart',
    lineup:FIVE_ORIG,
    recorded:'Zepp DiverCity, Tokyo — 21 February 2020',
    tracksNote:'The release documents the complete Zepp DiverCity show from the Electric Pentagram tour; the full setlist is not reproduced here.',
    notable:[],
    sound:'The Electric Pentagram material played live by the lineup that wrote it, weeks before touring stopped.',
    context:[
      'The band\'s second concert film, and their first release to top any chart: No. 1 on the Oricon Music Blu-ray chart.',
      'Recorded on 21 February 2020 — effectively the last normal full-capacity show of the album cycle.'
    ],
    src:['wiki-band','discogs','ma-band']
  },
  {
    id:'glory-glory-to-the-world', type:'ep', title:'Glory, Glory, to the World',
    date:'2021-03-10', dateLabel:'10 March 2021', year:2021,
    art:{motif:'globe', a:'#c6a8f0', b:'#241a33'},
    formats:['CD','Digital','LP (special edition)'],
    labels:['Victor Entertainment (JP, 10 Mar 2021)','JPU Records (UK, 28 May 2021)'],
    charts:null,
    lineup:FIVE_ORIG,
    runtime:'22:53',
    tracks:[
      {t:'Glory to the World', n:true},
      {t:'No Time to Hesitate'},
      {t:'Paranoia'},
      {t:'Dystopia Symphony'},
      {t:'Winds of Transylvania', n:true}
    ],
    notable:['Glory to the World','Winds of Transylvania'],
    sound:'Five tracks in under twenty-three minutes: the band\'s most compact and arguably most aggressive release of the original era, produced by Steve Jacobs with Karmila and Jussila again on mix and master.',
    context:[
      'The last studio release featuring miho, issued five months before her departure was announced.',
      '"Winds of Transylvania" is the theme song to the vampire anime Vladlove, from directors Mamoru Oshii and Junji Nishimura — the band\'s most prominent screen tie-in.',
      'A special CD and vinyl edition followed internationally through JPU Records.'
    ],
    src:['wiki-ggw','jpu-ggw','noisecartel-ggw']
  },
  {
    id:'heavy-metal-never-dies', type:'live', title:'Heavy Metal Never Dies – Live in Tokyo 2021',
    date:'2021-09-29', dateLabel:'29 September 2021', year:2021,
    art:{motif:'flame', a:'#ef8a5a', b:'#331309'},
    formats:['Blu-ray','DVD','2CD'],
    labels:['Victor Entertainment'],
    charts:null,
    lineup:FIVE_ORIG,
    recorded:'Tokyo Dome City Hall — 26 March 2021 (Ride for Vengeance Tour)',
    tracksNote:'Eighteen songs, including seven performed live for the first time. The full setlist is documented on setlist.fm (linked in the sources below).',
    notable:['Set the World on Fire','A Frozen Serenade','Spellbound'],
    sound:'The most theatrical show the band had staged: pillars of fire for "Set the World on Fire", snow falling through "A Frozen Serenade", and miyako playing keytar live for the first time on "Spellbound".',
    context:[
      'Released six weeks after the band announced miho\'s departure and its hiatus, which turned a celebratory concert film into a farewell document.',
      'It is the final recorded performance of the lineup that formed in 2016.'
    ],
    src:['setlist-2021','discogs','ma-band']
  },
  {
    id:'in-the-beginning', type:'compilation', title:'In the Beginning – The Best of 2017–2021',
    date:'2022-01-14', dateLabel:'22 Dec 2021 (digital) · 14 Jan 2022 (2CD)', year:2022,
    art:{motif:'ouroboros', a:'#b9c3cc', b:'#15181d'},
    formats:['2CD','Digital'],
    labels:['Victor Entertainment (JP)','JPU Records (international)'],
    charts:null,
    lineup:FIVE_ORIG,
    tracksNote:'Twenty-one tracks voted for by fans, drawn from three studio albums, two mini-albums and one single, reinterpreted and remastered by Mika Jussila at Finnvox — plus one new song, "Nameless Warrior". The full 21-track running order is not reproduced here.',
    notable:['Nameless Warrior'],
    sound:'The original era, remastered end to end by the engineer who had mastered most of it in the first place.',
    context:[
      'A retrospective released into the hiatus, and the only LOVEBITES record assembled by popular vote.',
      '"Nameless Warrior" was written following miho\'s decision to leave the band and is the last song ever recorded by the founding lineup — which makes a compilation, oddly, one of the most historically significant items in the catalogue.'
    ],
    src:['jpu-itb','ma-band'],
    flag:'Databases list the digital release as 22 December 2021 and the 2CD as 14 January 2022.'
  },
  {
    id:'judgement-day', type:'album', title:'Judgement Day',
    date:'2023-02-22', dateLabel:'22 February 2023', year:2023,
    art:{motif:'scales', a:'#e8767f', b:'#2d1218'},
    formats:['CD','Digital','LP','CD + Blu-ray (limited)'],
    labels:['Victor Entertainment (JP, 22 Feb 2023)','JPU Records (UK, 24 Feb 2023)'],
    charts:'Oricon No. 5 · Billboard Japan No. 5 — highest-charting LOVEBITES release',
    lineup:FIVE_NOW,
    runtime:'53:24',
    tracks:[
      {t:'We Are the Resurrection', n:true},
      {t:'Judgement Day', n:true},
      {t:'The Spirit Lives On'},
      {t:'Wicked Witch', n:true},
      {t:'Stand and Deliver (Shoot \'em Down)'},
      {t:'Victim of Time'},
      {t:'My Orion'},
      {t:'Lost in the Garden'},
      {t:'Dissonance'},
      {t:'Soldier Stands Solitarily'}
    ],
    notable:['We Are the Resurrection','Judgement Day','Wicked Witch'],
    sound:'The return record, and audibly so: a heavier low end, a rhythm section recorded further forward, and an album that opens by announcing itself as a resurrection.',
    context:[
      'fami\'s recorded debut, made within four months of her joining, and the first LOVEBITES album without its founder.',
      'It became the band\'s highest-charting record at No. 5 on both the Oricon and Billboard Japan charts — a better placing than anything the original lineup managed.',
      'The title track got the comeback\'s lead video, and the opener gave the two Tokyo comeback shows their name: "WE ARE THE RESURRECTION".'
    ],
    src:['wiki-jd','blab-return','distorted-jd']
  },
  {
    id:'knockin-at-heavens-gate', type:'live', title:'Knockin\' at Heaven\'s Gate – Live in Tokyo 2023',
    date:'2023-08-23', dateLabel:'23 August 2023', year:2023,
    art:{motif:'gate', a:'#a9d7c4', b:'#132421'},
    formats:['Blu-ray','DVD','2CD'],
    labels:['Victor Entertainment'],
    charts:null,
    lineup:FIVE_NOW,
    recorded:'EX Theater Roppongi, Tokyo — March 2023 ("WE ARE THE RESURRECTION", night one)',
    tracksNote:'The complete first comeback show. The full setlist is not reproduced here.',
    notable:[],
    sound:'fami\'s live debut and the band\'s first concert in front of an audience in roughly two years.',
    context:[
      'The first of the two "WE ARE THE RESURRECTION" nights, released on Blu-ray, DVD and double CD five months after it was played.',
      'Both comeback nights were filmed; this release covers the first, and Chapter 2 covers the second.'
    ],
    src:['bw-khg','knac-khg','ma-band'],
    flag:'Encyclopaedia Metallum and BraveWords date the recorded night to 11 March 2023; some other write-ups give 12 March. Both nights took place.'
  },
  {
    id:'knockin-chapter-2', type:'live', title:'Knockin\' at Heaven\'s Gate – Chapter 2',
    date:'2023-12-20', dateLabel:'20 Dec 2023 (digital) · 2 Feb 2024 (physical)', year:2023,
    art:{motif:'gate2', a:'#9fc4e8', b:'#121d2b'},
    formats:['Blu-ray','DVD','CD','Digital'],
    labels:['Victor Entertainment'],
    charts:null,
    lineup:FIVE_NOW,
    recorded:'EX Theater Roppongi, Tokyo — March 2023 ("WE ARE THE RESURRECTION", night two)',
    tracksNote:'The complete second comeback show. "Swan Song" from this release was issued as an official live video.',
    notable:['Swan Song'],
    sound:'The second night of the comeback, with a different setlist from the first.',
    context:[
      'Released digitally in December 2023 and physically in February 2024, completing the pair of comeback concert films.',
      'Issuing both nights separately, with distinct setlists, is characteristic of how thoroughly LOVEBITES document their own live history.'
    ],
    src:['ma-band','discogs','tokytunes-ch2']
  },
  {
    id:'lovebites-ep-ii', type:'ep', title:'LOVEBITES EP II',
    date:'2024-08-28', dateLabel:'28 August 2024', year:2024,
    art:{motif:'fang2', a:'#d4dbe3', b:'#1c2129'},
    formats:['CD','Digital','2CD with Re-LOVEBITES EP (international)'],
    labels:['Victor Entertainment (JP)','JPU Records (international 2CD)'],
    charts:null,
    lineup:FIVE_NOW,
    tracks:[
      {t:'Unchained', n:true},
      {t:'Soul Defender', n:true},
      {t:'Where\'s Identity'},
      {t:'The Bell in the Jail', n:true},
      {t:'Someone\'s Dream'}
    ],
    notable:['Unchained','Soul Defender','The Bell in the Jail'],
    sound:'Deliberately framed by the band as "LOVEBITES 2.0" — the directness of the 2017 debut played with the technique of the current five-piece. Produced by Steve Jacobs.',
    context:[
      'Released mid-world-tour, and structured as a conscious echo of the debut: five new songs, with the international 2CD edition adding the Re-LOVEBITES EP — "Don\'t Bite the Dust", "The Apocalypse", "Scream for Me" and "Bravehearted" re-recorded in 2024 by the current lineup.',
      'The re-recordings are the only place in the catalogue where the band\'s first four songs exist in fami\'s hands.',
      'Outside collaborator Mao wrote the music for "Soul Defender" (with asami) and for "The Bell in the Jail".'
    ],
    src:['jpu-ep2','ma-ep2','discogs']
  },
  {
    id:'outstanding-power', type:'album', title:'Outstanding Power',
    date:'2026-02-18', dateLabel:'18 February 2026', year:2026,
    art:{motif:'phoenix', a:'#f0a85a', b:'#301405'},
    formats:['CD','Digital','Digipak CD','LP'],
    labels:['Victor Entertainment (JP, 18 Feb 2026)','Napalm Records (worldwide digital 18 Feb 2026; physical 8 May 2026)'],
    charts:'UK: No. 60 Official Album Downloads · No. 44 Official Independent Albums · No. 15 Independent Album Breakers',
    lineup:FIVE_NOW,
    runtime:'64:10',
    tracks:[
      {t:'The Castaway', n:true},
      {t:'Silence the Void'},
      {t:'Forbidden Thirst'},
      {t:'Blazing Halo'},
      {t:'Dream of King'},
      {t:'Phoenix Rises Again'},
      {t:'Out of Control'},
      {t:'Wheels on Fire'},
      {t:'The Eve of Change'},
      {t:'Reaper\'s Lullaby'},
      {t:'Eternally'},
      {t:'One Will Remain'}
    ],
    notable:['The Castaway'],
    sound:'Sixty-four minutes of fast, highly crafted power metal with a production that, as one reviewer put it, puts every detail under the microscope. The band\'s longest album and their best-reviewed.',
    context:[
      'Released simultaneously with the announcement that LOVEBITES had signed to Napalm Records — the first time the band\'s international releases have been handled by a major European metal label rather than a specialist Japan-import imprint.',
      'Napalm put it out digitally worldwide on release day, with digipak CD and vinyl following on 8 May 2026.',
      'The critical response was the strongest of the band\'s career. Angry Metal Guy placed it at the top of the LOVEBITES catalogue; an Encyclopaedia Metallum reviewer called it "an album of the decade as far as classic heavy and power metal" — and it is widely described as their most consistent record since the debut.',
      'Six weeks after release, the band headlined and sold out Nippon Budokan for the first time.'
    ],
    src:['wiki-op','amg-op','blab-napalm','oc-op','napalm-op','ma-op-rev']
  }
];

/* ================= LEGACY PANELS ================= */

LB.legacy = [
  {
    h: 'In Japanese metal',
    p: [
      'LOVEBITES descend directly from Destrose, the band regarded as a forerunner of Japan\'s all-female metal wave and where both founders met. Of the acts that came out of that scene, LOVEBITES are the one that pushed furthest into the traditional European metal world — and did it without crossover, novelty framing or an idol apparatus.',
      'Their domestic arc is the conventional Japanese rock arc, completed: club shows in 2016, Zepp-level halls by 2020, Tokyo Garden Theater in 2024, a sold-out solo Nippon Budokan in 2026, and the largest headline tour of their career later the same year.'
    ]
  },
  {
    h: 'Internationally',
    p: [
      'The English-language decision, made before the band had a singer, is the structural reason their overseas audience grew as fast as their domestic one. They were in London within a year of their first gig, had a European label within three months of their first record, and won a British metal award inside two years.',
      'The festival record is the clearest measure: Wacken Open Air in 2018 — reported as a first for an all-female Japanese metal band — then Download, Bloodstock, Graspop, Summer Sonic, Roskilde, Resurrection Fest, Rock Imperium, ProgPower USA and the Hellfest main stage. Signing to Napalm Records in 2026 moved them from import-shelf curiosity to a mainstream European metal roster.'
    ]
  },
  {
    h: 'As a survival story',
    p: [
      'The part of the legacy that is hardest to replicate is the recovery. Bands that lose their founder, leader and principal architect at their commercial peak usually do not return, and when they do they rarely return larger.',
      'LOVEBITES went on hiatus in August 2021 with no announced end date, reopened the bass chair to applicants of any nationality, age or gender anywhere in the world, and then made their highest-charting album with the person who answered. Three years after that, they were selling out Budokan and getting the best reviews of their life.'
    ]
  }
];

LB.firsts = [
  { n: '2018', t: 'Metal Hammer Golden Gods Best New Band — won within two years of forming, accepted in London by miho and miyako.' },
  { n: 'Wacken', t: 'Reported as the first all-female Japanese metal band to play Wacken Open Air, on 4 August 2018.' },
  { n: 'No. 5', t: 'Judgement Day (2023) — highest LOVEBITES placing on both Oricon and Billboard Japan, and the first album without the band\'s founder.' },
  { n: 'Budokan', t: 'Headlined and sold out Nippon Budokan on 29 March 2026, streamed worldwide.' },
  { n: 'Napalm', t: 'Signed to Napalm Records in February 2026 — first release on a mainstream European metal label.' },
  { n: '4 EU firsts', t: 'Austria, Hungary, Poland and the Czech Republic all played for the first time on the Outstanding Tour, summer 2026.' }
];

/* ================= SOURCES ================= */

LB.sources = [
  {
    group: 'Official band, label & management',
    items: [
      { id:'official',    t:'LOVEBITES — official international site', u:'https://lovebites-music.com/', n:'Band members, discography, tour dates, setlists.' },
      { id:'official-jp', t:'LOVEBITES — official Japanese site (discography)', u:'https://lovebites.jp/discography/', n:'Japanese release listings.' },
      { id:'jvc',         t:'Victor Entertainment / JVC Music — LOVEBITES news', u:'https://www.jvcmusic.co.jp/-/News/A025756/510.html', n:'Japanese label announcements.' },
      { id:'napalm-op',   t:'Napalm Records — Outstanding Power', u:'https://napalmrecords.us/products/love-bites-outstanding-power-cd', n:'International label release details, 2026.' },
      { id:'jpu',         t:'JPU Records — LOVEBITES news archive', u:'https://jpurecords.com/blogs/news/tagged/lovebites', n:'The band\'s long-time Western label; primary English-language announcements 2017–2024.' },
      { id:'jpu-fami',    t:'JPU Records — "LOVEBITES Return with New Bassist: fami"', u:'https://jpurecords.com/blogs/news/lovebites-new-bassist-fami' },
      { id:'jpu-hiatus',  t:'JPU Records — "LOVEBITES to go on Hiatus and Bassist Miho to Withdraw"', u:'https://jpurecords.com/blogs/news/lovebites-hiatus-bassist-miho-to-withdraw' },
      { id:'jpu-itb',     t:'JPU Records — "Details of Their 2CD Best of Album IN THE BEGINNING"', u:'https://jpurecords.com/blogs/news/lovebites-in-the-beginning-best-2017-2012-cd' },
      { id:'jpu-ggw',     t:'JPU Records — Glory, Glory, to the World special edition', u:'https://jpurecords.com/blogs/news/lovebites-glory-glory-to-the-world-vinyl-cd' },
      { id:'jpu-ep2',     t:'JPU Records — LOVEBITES EP II', u:'https://jpurecords.com/products/lovebites-ep-ii', n:'Includes the Re-LOVEBITES EP contents and the band\'s "LOVEBITES 2.0" framing.' },
      { id:'jpu-wt',      t:'JPU Records — "LOVEBITES Announces First World Tour"', u:'https://jpurecords.com/blogs/news/lovebites-first-world-tour-2024-the-thin-line-between-love-and-hate' },
      { id:'jpu-us25',    t:'JPU Records — "Eternal Phenomenon Tour US 2025"', u:'https://jpurecords.com/blogs/news/lovebites-announce-usa-tour-2025-this-november-eternal-phenomenon-tour-us-2025' },
      { id:'jpu-gg',      t:'JPU Records — Golden Gods Best New Band nomination', u:'https://www.jpurecords.com/lovebites-nominated-best-new-band-metal-hammer/' },
      { id:'jpu-livealbum24', t:'JPU Records — new live album, and Metal Hammer readers\' ranking', u:'https://jpurecords.com/blogs/news/lovebites-new-live-album-out-2024-latest-studio-album-ranks-15th-in-metal-hammer-s-end-of-year-reader-ranking' }
    ]
  },
  {
    group: 'Encyclopaedic & reference (cross-checking)',
    items: [
      { id:'wiki-band',     t:'Wikipedia — Lovebites (band)', u:'https://en.wikipedia.org/wiki/Lovebites_(band)' },
      { id:'wiki-ep1',      t:'Wikipedia — The Lovebites EP', u:'https://en.wikipedia.org/wiki/The_Lovebites_EP' },
      { id:'wiki-afa',      t:'Wikipedia — Awakening from Abyss', u:'https://en.wikipedia.org/wiki/Awakening_from_Abyss' },
      { id:'wiki-bad',      t:'Wikipedia — Battle Against Damnation', u:'https://en.wikipedia.org/wiki/Battle_Against_Damnation' },
      { id:'wiki-ci',       t:'Wikipedia — Clockwork Immortality', u:'https://en.wikipedia.org/wiki/Clockwork_Immortality' },
      { id:'wiki-ep',       t:'Wikipedia — Electric Pentagram', u:'https://en.wikipedia.org/wiki/Electric_Pentagram' },
      { id:'wiki-gd',       t:'Wikipedia — Golden Destination', u:'https://en.wikipedia.org/wiki/Golden_Destination' },
      { id:'wiki-ggw',      t:'Wikipedia — Glory, Glory, to the World', u:'https://en.wikipedia.org/wiki/Glory,_Glory,_to_the_World' },
      { id:'wiki-jd',       t:'Wikipedia — Judgement Day', u:'https://en.wikipedia.org/wiki/Judgement_Day_(Lovebites_album)' },
      { id:'wiki-op',       t:'Wikipedia — Outstanding Power', u:'https://en.wikipedia.org/wiki/Outstanding_Power' },
      { id:'wiki-midori',   t:'Wikipedia — Midori Tatematsu', u:'https://en.wikipedia.org/wiki/Midori_Tatematsu' },
      { id:'generasia-band',t:'generasia — LOVEBITES', u:'https://www.generasia.com/wiki/LOVEBITES' },
      { id:'generasia-miyako', t:'generasia — miyako (LOVEBITES)', u:'https://www.generasia.com/wiki/miyako_(LOVEBITES)' },
      { id:'ma-band',       t:'Encyclopaedia Metallum — Lovebites', u:'https://www.metal-archives.com/bands/Lovebites', n:'Release dates, formats, recording venues.' },
      { id:'ma-ep2',        t:'Encyclopaedia Metallum — Lovebites EP II', u:'https://www.metal-archives.com/albums/Lovebites/Lovebites_EP_II/1259688', n:'Songwriting credits including Mao.' },
      { id:'ma-op-rev',     t:'Encyclopaedia Metallum — Outstanding Power review', u:'https://www.metal-archives.com/reviews/Lovebites/Outstanding_Power/1400342/' },
      { id:'metalstorm-bio',t:'Metal Storm — Lovebites biography', u:'https://metalstorm.net/bands/biography.php?band_id=11431&bandname=Lovebites' },
      { id:'discogs',       t:'Discogs — Lovebites releases', u:'https://www.discogs.com/artist/5705700-Lovebites', n:'Pressings, formats, catalogue numbers.' },
      { id:'allfemale-about', t:'All Female Bands — Lovebites profile', u:'https://allfemalebands.com/bands/lovebites/about' },
      { id:'oc-op',         t:'Official Charts (UK) — Outstanding Power', u:'https://www.officialcharts.com/albums/lovebites-outstanding-power/', n:'UK chart peaks and dates, 2026.' },
      { id:'setlist-2021',  t:'setlist.fm — Tokyo Dome City Hall, 26 March 2021', u:'https://www.setlist.fm/setlist/lovebites/2021/tokyo-dome-city-hall-tokyo-japan-3381e001.html' },
      { id:'setlist-2025',  t:'setlist.fm — Zepp DiverCity, 13 March 2025', u:'https://www.setlist.fm/setlist/lovebites/2025/zepp-divercity-tokyo-tokyo-japan-53509fa1.html' },
      { id:'concerts-metal',t:'Concerts-Metal — Lovebites events archive', u:'https://en.concerts-metal.com/g-35510__Lovebites.html' },
      { id:'frontstage-2026', t:'Frontstage Festivals — Lovebites 2026 festival schedule', u:'https://www.frontstagefestivals.com/artist/lovebites' },
      { id:'pollstar-2024', t:'Pollstar — The Thin Line Between Love and Hate, US 2024', u:'https://www.pollstar.com/events/lovebites-the-thin-line-between-love-and-hate-tour-us-2024-8727685' },
      { id:'apple-eu26',    t:'Apple Music — Outstanding Tour EU/UK 2026 dates', u:'https://music.apple.com/cd/concerts/ce.3c7632a8-0313-4bb3-bf15-0cc7351f1cf5' },
      { id:'esplanade',     t:'Esplanade, Singapore — Lovebites, Outstanding Tour', u:'https://www.esplanade.com/whats-on/2026/lovebites-jpn-outstanding-tour' },
      { id:'metalstorm-ep25', t:'Metal Storm — Eternal Phenomenon Japan Tour 2025', u:'https://metalstorm.net/events/event.php?event_id=218961' }
    ]
  },
  {
    group: 'Music press, interviews & reviews',
    items: [
      { id:'louder-nbotw',  t:'Metal Hammer / Louder — "New Band Of The Week: Lovebites"', u:'https://www.loudersound.com/features/new-band-of-the-week-lovebites', n:'miho on Iron Maiden, Destrose and founding the band.' },
      { id:'louder-gg',     t:'Louder — "Golden Gods 2018: ... amongst winners"', u:'https://www.loudersound.com/news/golden-gods-2018-judas-priest-code-orange-maynard-james-keenan-amongst-winners' },
      { id:'louder-miyako', t:'Louder — "Lovebites\' Miyako: 10 songs that changed my life"', u:'https://www.loudersound.com/features/lovebites-guitarist-miyako-ultimate-shred-songs-metallica-michael-jackson-elton-john' },
      { id:'jame-gg',       t:'JaME — "LOVEBITES Named Best New Band at the Metal Hammer Golden Gods Awards 2018"', u:'https://www.jame-world.com/en/news/147003-lovebites-named-best-new-band-at-the-metal-hammer-golden-gods-awards-2018.html' },
      { id:'blab-napalm',   t:'Blabbermouth — "LOVEBITES Signs With NAPALM RECORDS; \'The Castaway\' Video Released"', u:'https://blabbermouth.net/news/japanese-power-metal-quintet-lovebites-signs-with-napalm-records-the-castaway-music-video-released' },
      { id:'blab-return',   t:'Blabbermouth — "LOVEBITES Returns With New Bassist And \'Judgement Day\' Music Video"', u:'https://blabbermouth.net/news/japans-all-female-metal-band-lovebites-returns-with-new-bassist-and-judgement-day-music-video' },
      { id:'blab-ci',       t:'Blabbermouth — "LOVEBITES To Release \'Clockwork Immortality\' Album In December"', u:'https://blabbermouth.net/news/japans-all-female-metal-band-lovebites-to-release-clockwork-immortality-album-in-december' },
      { id:'jrock-hiatus',  t:'JROCK NEWS — "LOVEBITES on hiatus with departure of bassist Miho"', u:'https://jrocknews.com/2021/08/lovebites-hiatus-miho.html', n:'Carries the band\'s and miho\'s statements in translation.' },
      { id:'mg-hiatus',     t:'Metal Goddesses — "Lovebites announce departure of bassist Miho, go on hiatus"', u:'https://metalgoddesses.com/2021/08/23/lovebites-announce-departure-of-bassist-miho-go-on-hiatus/' },
      { id:'metaltalk-fami',t:'MetalTalk — "Lovebites / Fami joins on bass following global auditions"', u:'https://www.metaltalk.net/lovebites-fami-joins-on-bass-following-global-auditions.php' },
      { id:'metaltalk-london', t:'MetalTalk — "Lovebites Gearing Up For First UK Headline Show"', u:'https://www.metaltalk.net/lovebites_first_london_show.php' },
      { id:'jgen-2017',     t:'J-Generation — LOVEBITES interview (2017)', u:'http://j-generation.com/2017/08/lovebites-interview-2017/', n:'asami on her R&B/soul background and how she joined.' },
      { id:'jgen-midori',   t:'J-Generation — Midori of LOVEBITES interview (2018)', u:'https://j-generation.com/2018/07/midori-of-lovebites-interview-2018/' },
      { id:'jgen-camden',   t:'J-Generation — LOVEBITES at Camden Underworld (live report)', u:'https://j-generation.com/2018/07/lovebites-at-camden-underworld-live-report/' },
      { id:'midlands-haruna', t:'The Midlands Rocks — interview with haruna', u:'https://themidlandsrocks.co.uk/interview-with-haruna-of-japanese-metallers-lovebites/' },
      { id:'v13-miyako',    t:'V13 — "Geared Up: LOVEBITES\' MIYAKO"', u:'https://v13.net/2019/01/geared-up-lovebites-guitar-virtuoso-miyako-on-her-array-of-gear-quick-thinking-and-constant-evolution/' },
      { id:'distorted-jd',  t:'Distorted Sound — "Lovebites announce new album Judgement Day"', u:'https://distortedsoundmag.com/lovebites-announce-new-album-judgement-day/' },
      { id:'bw-khg',        t:'BraveWords — "Knockin\' At Heaven\'s Gate Live Album, Blu-ray In August"', u:'https://bravewords.com/news/japans-lovebites-to-release-knockin-at-heavens-gate-live-album-blu-ray-in-august/' },
      { id:'bw-us25',       t:'BraveWords — "Announces Return To The U.S. With November 2025 Tour"', u:'https://bravewords.com/power-metal/japans-lovebites-announces-return-to-the-u-s-with-november-2025-tour/' },
      { id:'bw-op',         t:'BraveWords — "New Album Coming In February 2026; Title Revealed"', u:'https://bravewords.com/power-metal/lovebites-new-album-coming-in-february-2026-title-revealed/' },
      { id:'knac-khg',      t:'KNAC — "LOVEBITES Set For New Live Album"', u:'http://www.knac.com/article.asp?ArticleID=47972' },
      { id:'amg-op',        t:'Angry Metal Guy — Outstanding Power review', u:'https://www.angrymetalguy.com/lovebites-outstanding-power-review/' },
      { id:'mer-ep',        t:'Metal Express Radio — Electric Pentagram review', u:'https://www.metalexpressradio.com/2020/04/21/lovebites-electric-pentagram/' },
      { id:'avo-eu26',      t:'AVO Magazine — "LOVEBITES to return to Europe for summer tour with new album Outstanding Power"', u:'https://avo-magazine.com/en/2026/04/lovebites-to-return-to-europe-for-summer-tour-with-new-album-outstanding-power/' },
      { id:'knotfest-napalm', t:'Knotfest — "Introducing LOVEBITES: Japan\'s emerging power metal force aligns with Napalm Records"', u:'https://knotfest.com/blogs/news/introducing-lovebites-japans-emerging-power-metal-force-aligns-with-napalm-records' },
      { id:'piercing-us25', t:'PiercingMetal — "LOVEBITES Announces \'Eternal Phenomenon\' US Tour This November"', u:'https://www.piercingmetal.com/lovebites-announces-eternal-phenomenon-us-tour-this-november/' },
      { id:'roppongi-budokan', t:'Roppongi Rocks — "Lovebites at Budokan"', u:'https://www.roppongirocks.com/archives/18297' },
      { id:'roppongi-zepp', t:'Roppongi Rocks — "Lovebites at Zepp DiverCity"', u:'https://www.roppongirocks.com/archives/17521' },
      { id:'electricbloom-budokan', t:'Electric Bloom Webzine — LOVEBITES LIVE AT BUDOKAN', u:'https://electricbloomwebzine.com/tours/lovebites-live-at-budokan' },
      { id:'electricbloom-london', t:'Electric Bloom Webzine — "LOVEBITES add London date to 2024 world tour"', u:'https://electricbloomwebzine.com/2024/02/lovebites-adds-london-date-to-2024-world-tour-the-thin-line-between-love-and-hate.html' },
      { id:'noisecartel-ggw', t:'The Noise Cartel — "LOVEBITES To Release New EP, GLORY, GLORY, TO THE WORLD"', u:'https://www.thenoisecartel.com/2021/03/29/lovebites-to-release-new-ep-glory-glory-to-the-world/' },
      { id:'tokytunes-ch2', t:'Toky Tunes — "LOVEBITES Unveils \'Swan Song\' Video from Knockin\' at Heaven\'s Gate – Chapter 2"', u:'https://tokytunes.com/lovebites-unveils-swan-song-video-from-knockin-at-heavens-gate-chapter-2/' },
      { id:'ann-wt',        t:'Anime News Network — "Lovebites Announces First World Tour" (press release)', u:'https://www.animenewsnetwork.com/press-release/2024-01-01/lovebites-announces-first-world-tour-further-dates-to-be-announced/.206093' },
      { id:'note-ep25',     t:'note.com — live report, Eternal Phenomenon Tour final, Zepp DiverCity', u:'https://note.com/msdktr/n/nec45dfa2057b?hl=en', n:'Japanese-language concert report.' }
    ]
  }
];

/* flat lookup */
LB.srcIndex = {};
LB.sources.forEach(function (g) {
  g.items.forEach(function (it) { LB.srcIndex[it.id] = it; });
});

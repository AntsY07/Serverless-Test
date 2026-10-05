/* ============================================================
   LOVEBITES — A Complete History
   app.js — rendering and interaction. No dependencies.
   ============================================================ */
(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var catMap = {};
  LB.categories.forEach(function (c) { catMap[c.id] = c; });
  var memberMap = {};
  LB.members.forEach(function (m) { memberMap[m.id] = m; });
  var relMap = {};
  LB.releases.forEach(function (r) { relMap[r.id] = r; });
  var typeMap = {};
  LB.releaseTypes.forEach(function (t) { typeMap[t.id] = t; });

  /* ---------------------------------------------------------
     Generated release emblems.
     Original geometric artwork — NOT the official cover art.
     --------------------------------------------------------- */
  var artSeq = 0;

  function pt(cx, cy, r, deg) {
    var a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }
  function poly(cx, cy, r, n, rot) {
    var p = [];
    for (var i = 0; i < n; i++) p.push(pt(cx, cy, r, rot + i * 360 / n));
    return p.map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ');
  }
  function starPath(cx, cy, r, n, rot) {
    var p = [], step = 360 / n * 2;
    for (var i = 0; i < n; i++) p.push(pt(cx, cy, r, rot + i * step));
    return 'M' + p.map(function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join('L') + 'Z';
  }

  var MOTIFS = {
    fang: function (s) {
      return s.g([
        s.circle(200, 200, 118, 1),
        '<path d="M200 96 L236 192 L200 300 L164 192 Z" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 126 L218 193 L200 262 L182 193 Z" fill="' + s.a + '" opacity=".28"/>',
        s.ring(200, 200, 150, 0.35),
        s.ticks(200, 200, 150, 162, 48, 0.3)
      ]);
    },
    abyss: function (s) {
      var o = [];
      for (var i = 0; i < 7; i++) o.push(s.circle(200, 150 + i * 22, 118 - i * 15, 1 - i * 0.11));
      o.push(s.ticks(200, 200, 160, 178, 72, 0.22));
      o.push('<path d="M70 300 Q200 356 330 300" fill="none" stroke="' + s.a + '" stroke-width="1.6" opacity=".5"/>');
      return s.g(o);
    },
    cross: function (s) {
      return s.g([
        s.ring(200, 200, 142, 0.4),
        '<path d="M188 72 h24 v96 h72 v24 h-72 v136 h-24 V192 h-72 v-24 h72 Z" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 72 L200 328" stroke="' + s.a + '" stroke-width="1" opacity=".5"/>',
        s.ticks(200, 200, 142, 156, 24, 0.3),
        '<polygon points="' + poly(200, 200, 176, 4, 45) + '" fill="none" stroke="' + s.a + '" stroke-width=".8" opacity=".3"/>'
      ]);
    },
    clock: function (s) {
      var teeth = [];
      for (var i = 0; i < 24; i++) {
        var p1 = pt(200, 200, 150, i * 15), p2 = pt(200, 200, 168, i * 15);
        teeth.push('<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="' + s.a + '" stroke-width="3" opacity=".55"/>');
      }
      return s.g([
        s.circle(200, 200, 150, 1), s.circle(200, 200, 118, 0.45), s.circle(200, 200, 26, 0.8),
        teeth.join(''),
        '<line x1="200" y1="200" x2="200" y2="108" stroke="' + s.a + '" stroke-width="3.4"/>',
        '<line x1="200" y1="200" x2="268" y2="238" stroke="' + s.a + '" stroke-width="2.4" opacity=".8"/>',
        s.ticks(200, 200, 100, 114, 12, 0.5)
      ]);
    },
    sun: function (s) {
      var rays = [];
      for (var i = 0; i < 36; i++) {
        var r2 = i % 3 === 0 ? 184 : 162, p1 = pt(200, 200, 126, i * 10), p2 = pt(200, 200, r2, i * 10);
        rays.push('<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="' + s.a + '" stroke-width="' + (i % 3 === 0 ? 2.6 : 1.1) + '" opacity=".6"/>');
      }
      return s.g([rays.join(''), s.circle(200, 200, 118, 1), s.circle(200, 200, 90, 0.4),
        '<path d="M126 228 Q200 272 274 228" fill="none" stroke="' + s.a + '" stroke-width="2" opacity=".7"/>']);
    },
    pentagram: function (s) {
      return s.g([
        s.circle(200, 200, 152, 1), s.circle(200, 200, 138, 0.35),
        '<path d="' + starPath(200, 200, 136, 5, 0) + '" fill="none" stroke="' + s.a + '" stroke-width="2.2"/>',
        '<polygon points="' + poly(200, 200, 136, 5, 0) + '" fill="none" stroke="' + s.a + '" stroke-width=".9" opacity=".45"/>',
        s.ticks(200, 200, 152, 168, 60, 0.22)
      ]);
    },
    bolt: function (s) {
      return s.g([
        s.ring(200, 200, 146, 0.4),
        '<path d="M224 76 L146 214 h46 l-30 110 L268 180 h-50 Z" fill="none" stroke="' + s.a + '" stroke-width="2.6"/>',
        '<path d="M224 76 L146 214 h46 l-30 110 L268 180 h-50 Z" fill="' + s.a + '" opacity=".2"/>',
        s.ticks(200, 200, 146, 160, 36, 0.3)
      ]);
    },
    star5: function (s) {
      var o = [s.circle(200, 200, 160, 0.5)];
      for (var i = 0; i < 5; i++) {
        var p = pt(200, 200, 126, i * 72);
        o.push('<path d="' + starPath(p[0], p[1], 30, 5, 0) + '" fill="none" stroke="' + s.a + '" stroke-width="1.6" opacity=".75"/>');
      }
      o.push('<path d="' + starPath(200, 200, 56, 5, 0) + '" fill="' + s.a + '" opacity=".25" stroke="' + s.a + '" stroke-width="2"/>');
      return s.g(o);
    },
    globe: function (s) {
      var o = [s.circle(200, 200, 140, 1)];
      for (var i = 1; i <= 3; i++) o.push('<ellipse cx="200" cy="200" rx="' + (140 - i * 44) + '" ry="140" fill="none" stroke="' + s.a + '" stroke-width="1.3" opacity=".55"/>');
      for (var j = -2; j <= 2; j++) o.push('<line x1="' + (200 - Math.sqrt(Math.max(0, 140 * 140 - (j * 46) * (j * 46)))).toFixed(1) + '" y1="' + (200 + j * 46) + '" x2="' + (200 + Math.sqrt(Math.max(0, 140 * 140 - (j * 46) * (j * 46)))).toFixed(1) + '" y2="' + (200 + j * 46) + '" stroke="' + s.a + '" stroke-width="1.1" opacity=".5"/>');
      o.push(s.ticks(200, 200, 160, 176, 48, 0.25));
      return s.g(o);
    },
    flame: function (s) {
      return s.g([
        s.ring(200, 200, 150, 0.35),
        '<path d="M200 70 C150 140 176 164 176 196 C176 232 200 246 200 246 C200 246 224 232 224 196 C224 164 250 140 200 70 Z" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 124 C176 168 190 186 190 208 C190 228 200 236 200 236 C200 236 210 228 210 208 C210 186 224 168 200 124 Z" fill="' + s.a + '" opacity=".26"/>',
        '<path d="M120 300 Q200 268 280 300" fill="none" stroke="' + s.a + '" stroke-width="2" opacity=".6"/>',
        s.ticks(200, 200, 150, 164, 24, 0.3)
      ]);
    },
    ouroboros: function (s) {
      return s.g([
        '<circle cx="200" cy="200" r="136" fill="none" stroke="' + s.a + '" stroke-width="10" opacity=".22"/>',
        '<path d="M200 64 A136 136 0 1 1 112 290" fill="none" stroke="' + s.a + '" stroke-width="2.6" stroke-linecap="round"/>',
        '<polygon points="' + poly(112, 290, 17, 3, 150) + '" fill="' + s.a + '" opacity=".8"/>',
        s.circle(200, 200, 86, 0.4),
        s.ticks(200, 200, 136, 152, 36, 0.3)
      ]);
    },
    scales: function (s) {
      return s.g([
        s.ring(200, 200, 152, 0.35),
        '<line x1="200" y1="92" x2="200" y2="306" stroke="' + s.a + '" stroke-width="2.6"/>',
        '<line x1="96" y1="130" x2="304" y2="130" stroke="' + s.a + '" stroke-width="2.6"/>',
        '<line x1="96" y1="130" x2="96" y2="176" stroke="' + s.a + '" stroke-width="1.3"/>',
        '<line x1="304" y1="130" x2="304" y2="164" stroke="' + s.a + '" stroke-width="1.3"/>',
        '<path d="M58 176 Q96 220 134 176" fill="none" stroke="' + s.a + '" stroke-width="2.2"/>',
        '<path d="M266 164 Q304 208 342 164" fill="none" stroke="' + s.a + '" stroke-width="2.2"/>',
        '<path d="M160 306 h80" stroke="' + s.a + '" stroke-width="3"/>',
        '<circle cx="200" cy="112" r="9" fill="' + s.a + '" opacity=".8"/>'
      ]);
    },
    gate: function (s) {
      return s.g([
        s.ring(200, 200, 156, 0.3),
        '<path d="M120 320 V176 A80 80 0 0 1 280 176 V320" fill="none" stroke="' + s.a + '" stroke-width="2.6"/>',
        '<path d="M152 320 V182 A48 48 0 0 1 248 182 V320" fill="none" stroke="' + s.a + '" stroke-width="1.4" opacity=".6"/>',
        '<line x1="200" y1="134" x2="200" y2="320" stroke="' + s.a + '" stroke-width="1.6" opacity=".7"/>',
        '<line x1="96" y1="320" x2="304" y2="320" stroke="' + s.a + '" stroke-width="3"/>',
        '<path d="' + starPath(200, 108, 26, 5, 0) + '" fill="none" stroke="' + s.a + '" stroke-width="1.8" opacity=".85"/>'
      ]);
    },
    gate2: function (s) {
      var rays = [];
      for (var i = 0; i < 9; i++) rays.push('<line x1="200" y1="150" x2="' + (60 + i * 35) + '" y2="330" stroke="' + s.a + '" stroke-width="1" opacity=".3"/>');
      return s.g([
        s.ring(200, 200, 156, 0.3), rays.join(''),
        '<path d="M126 320 V180 A74 74 0 0 1 274 180 V320" fill="none" stroke="' + s.a + '" stroke-width="2.6"/>',
        '<circle cx="200" cy="150" r="13" fill="' + s.a + '" opacity=".65"/>',
        '<line x1="96" y1="320" x2="304" y2="320" stroke="' + s.a + '" stroke-width="3"/>',
        s.ticks(200, 200, 156, 170, 24, 0.3)
      ]);
    },
    fang2: function (s) {
      return s.g([
        s.circle(200, 200, 126, 0.9),
        '<path d="M156 110 L176 206 L156 288" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M244 110 L224 206 L244 288" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 118 L214 200 L200 282 L186 200 Z" fill="' + s.a + '" opacity=".3" stroke="' + s.a + '" stroke-width="1.6"/>',
        s.ring(200, 200, 158, 0.35),
        s.ticks(200, 200, 158, 172, 60, 0.25)
      ]);
    },
    phoenix: function (s) {
      return s.g([
        s.ring(200, 200, 160, 0.3),
        '<path d="M200 300 C200 240 200 200 200 140" stroke="' + s.a + '" stroke-width="3"/>',
        '<path d="M200 170 C150 120 104 126 72 96 C96 160 140 182 196 196" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 170 C250 120 296 126 328 96 C304 160 260 182 204 196" fill="none" stroke="' + s.a + '" stroke-width="2.4"/>',
        '<path d="M200 212 C168 232 134 234 112 252 C148 264 176 258 200 244" fill="' + s.a + '" opacity=".2"/>',
        '<path d="M200 212 C232 232 266 234 288 252 C252 264 224 258 200 244" fill="' + s.a + '" opacity=".2"/>',
        '<path d="M200 102 L214 136 L200 150 L186 136 Z" fill="' + s.a + '" opacity=".85"/>',
        '<path d="M160 312 Q200 290 240 312" fill="none" stroke="' + s.a + '" stroke-width="2" opacity=".6"/>'
      ]);
    }
  };

  function makeArt(art, title) {
    var id = 'lbart' + (++artSeq);
    var a = art.a, b = art.b;
    var s = {
      a: a,
      g: function (arr) { return arr.join(''); },
      circle: function (cx, cy, r, op) {
        return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + a + '" stroke-width="1.6" opacity="' + op + '"/>';
      },
      ring: function (cx, cy, r, op) {
        return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + a + '" stroke-width="1" opacity="' + op + '"/>';
      },
      ticks: function (cx, cy, r1, r2, n, op) {
        var o = [];
        for (var i = 0; i < n; i++) {
          var p1 = pt(cx, cy, r1, i * 360 / n), p2 = pt(cx, cy, r2, i * 360 / n);
          o.push('<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="' + a + '" stroke-width="1"/>');
        }
        return '<g opacity="' + op + '">' + o.join('') + '</g>';
      }
    };
    var motif = (MOTIFS[art.motif] || MOTIFS.fang)(s);
    var corner = function (x, y, sx, sy) {
      return '<path d="M' + x + ' ' + y + ' h' + (42 * sx) + ' M' + x + ' ' + y + ' v' + (42 * sy) +
             ' M' + x + ' ' + y + ' l' + (17 * sx) + ' ' + (17 * sy) + '" stroke="' + a +
             '" stroke-width="1.1" fill="none" opacity=".5"/>';
    };
    return '<svg viewBox="0 0 400 400" role="img" aria-label="' + title.replace(/"/g, '') + ' — stylised emblem (not official cover art)" preserveAspectRatio="xMidYMid slice">' +
      '<defs>' +
        '<radialGradient id="' + id + 'bg" cx="50%" cy="36%" r="78%">' +
          '<stop offset="0%" stop-color="' + b + '"/>' +
          '<stop offset="60%" stop-color="#090b0f"/>' +
          '<stop offset="100%" stop-color="#05060a"/>' +
        '</radialGradient>' +
        '<linearGradient id="' + id + 'sh" x1="0" y1="0" x2=".7" y2="1">' +
          '<stop offset="0%" stop-color="#fff" stop-opacity=".09"/>' +
          '<stop offset="48%" stop-color="#fff" stop-opacity="0"/>' +
          '<stop offset="100%" stop-color="#fff" stop-opacity=".035"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="400" height="400" fill="url(#' + id + 'bg)"/>' +
      '<g opacity=".2" stroke="#fff" stroke-opacity=".5" stroke-width=".4">' +
        '<path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400 M0 300 H400 M0 350 H400"/>' +
        '<path d="M50 0 V400 M100 0 V400 M150 0 V400 M200 0 V400 M250 0 V400 M300 0 V400 M350 0 V400"/>' +
      '</g>' +
      s.ring(200, 200, 179, .3) +
      '<circle cx="200" cy="200" r="172" fill="none" stroke="' + a + '" stroke-width="1.7" opacity=".7"/>' +
      s.ticks(200, 200, 179, 188, 72, .2) +
      motif +
      corner(20, 20, 1, 1) + corner(380, 20, -1, 1) + corner(20, 380, 1, -1) + corner(380, 380, -1, -1) +
      '<rect x="11" y="11" width="378" height="378" fill="none" stroke="' + a + '" stroke-opacity=".26"/>' +
      '<rect width="400" height="400" fill="url(#' + id + 'sh)"/>' +
    '</svg>';
  }


  /* small heraldic shield used for each member, tinted to their colour */
  function memberSigil(m, px) {
    var sid = 'sg' + (++artSeq);
    return '<svg class="member__sigil" viewBox="0 0 100 100" role="img" aria-label="' + m.name + ' sigil"' +
      (px ? ' style="width:' + px + 'px;height:' + px + 'px"' : '') + '>' +
      '<defs><linearGradient id="' + sid + '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="' + m.color + '" stop-opacity=".30"/>' +
        '<stop offset="100%" stop-color="' + m.color + '" stop-opacity=".04"/>' +
      '</linearGradient></defs>' +
      '<path d="M50 6 L88 20 V50 C88 72 70 86 50 94 C30 86 12 72 12 50 V20 Z" fill="url(#' + sid + ')" stroke="' + m.color + '" stroke-width="2"/>' +
      '<path d="M50 14 L80 25 V50 C80 68 65 80 50 87 C35 80 20 68 20 50 V25 Z" fill="none" stroke="' + m.color + '" stroke-width=".8" opacity=".45"/>' +
      '<text x="50" y="59" text-anchor="middle" font-family="Cinzel, Georgia, serif" font-size="30" font-weight="600" fill="' + m.color + '">' + m.mono + '</text>' +
      '<path d="M38 70 h24" stroke="' + m.color + '" stroke-width="1.2" opacity=".55"/>' +
    '</svg>';
  }


  /* Optional photography. Any release, member or timeline entry may carry a
     `photo` (plus optional `photoCredit`); when absent — or when the file
     fails to load — the page falls back to the generated artwork, so a
     missing file never breaks the layout. See assets/img/photos/README.txt. */
  function photoBlock(obj, alt) {
    if (!obj.photo) return '';
    return '<figure class="shot">' +
      '<img src="' + obj.photo + '" alt="' + alt.replace(/"/g, '') + '" loading="lazy" ' +
        'onerror="this.closest(\'figure\').remove()">' +
      (obj.photoCredit ? '<figcaption>' + obj.photoCredit + '</figcaption>' : '') +
    '</figure>';
  }

  /* --------------------------- small helpers --------------------------- */
  function srcLinks(ids) {
    if (!ids || !ids.length) return '';
    return ids.map(function (id) {
      var s = LB.srcIndex[id];
      if (!s) return '';
      return '<li><a href="' + s.u + '" target="_blank" rel="noopener noreferrer">' + s.t + '</a>' + (s.n ? '<small>' + s.n + '</small>' : '') + '</li>';
    }).join('');
  }
  function firstSrcLink(ids) {
    if (!ids || !ids.length) return '';
    var s = LB.srcIndex[ids[0]];
    if (!s) return '';
    var extra = ids.length > 1 ? ' +' + (ids.length - 1) : '';
    return '<a class="src" href="' + s.u + '" target="_blank" rel="noopener noreferrer" title="' + s.t + '">Source' + extra + ' &nearr;</a>';
  }
  function memberChips(ids) {
    if (!ids || !ids.length) return '';
    return ids.map(function (i) {
      var m = memberMap[i];
      return m ? '<span class="who" style="color:' + m.color + ';border-color:' + m.color + '40">' + m.name + '</span>' : '';
    }).join('');
  }

  /* --------------------------- hero + overview --------------------------- */
  $('#heroStats').innerHTML = LB.stats.map(function (s) {
    return '<div><b>' + s.n + '</b><small>' + s.l + '</small></div>';
  }).join('');

  $('#overviewLede').innerHTML = LB.overview.lede.map(function (p) { return '<p>' + p + '</p>'; }).join('');

  $('#factbox').innerHTML = '<h3>At a glance</h3><dl>' + LB.overview.facts.map(function (f) {
    return '<dt>' + f.k + '</dt><dd>' + f.v + '</dd>';
  }).join('') + '</dl>';

  $('#methodNotice').innerHTML = '<strong>How to read this page.</strong> Every section links out to its sources, and the ' +
    '<a href="#sources" style="color:var(--silver)">Sources &amp; Method</a> block at the foot lists them in full. ' +
    'Where a detail rests on a single report, or where sources disagree, you will see a dashed amber note like this one attached to the claim itself rather than a confident assertion.';

  $('#method').innerHTML = LB.method.map(function (m) {
    return '<div><h3><span class="dot" style="background:' + m.dot + '"></span>' + m.h + '</h3><p>' + m.p + '</p></div>';
  }).join('');

  $('#asOf').textContent = LB.meta.asOf;

  /* --------------------------- chapters --------------------------- */
  $('#chapterRail').innerHTML = LB.chapters.map(function (c) {
    return '<li><a href="#' + c.id + '"><em>' + c.num + '</em><b>' + c.title + '</b><span>' + c.years + '</span></a></li>';
  }).join('');

  var CHAPTER_PLATES = [
    'chapter-01-origins', 'chapter-02-formation', 'chapter-03-early', 'chapter-04-rise',
    'chapter-05-albums', 'chapter-06-lineup', 'chapter-07-hiatus', 'chapter-08-return',
    'chapter-09-recent', 'chapter-10-legacy'
  ];

  $('#chapters').innerHTML = LB.chapters.map(function (c, ci) {
    var html = (ci ? '<img class="chapter-sep" src="assets/img/ornament-divider.svg" alt="" aria-hidden="true">' : '') +
      '<article class="chapter reveal" id="' + c.id + '">' +
      '<div class="chapter__aside">' +
        '<img class="chapter__plate" src="assets/img/' + CHAPTER_PLATES[ci] + '.svg" alt="" aria-hidden="true" loading="lazy" width="520" height="520">' +
        '<div class="chapter__num">' + c.num + '</div>' +
        '<div class="chapter__years">' + c.years + '</div>' +
      '</div>' +
      '<div class="chapter__body"><h3>' + c.title + '</h3>' +
      c.body.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    if (c.pull) html += '<blockquote class="pull">&ldquo;' + c.pull.q + '&rdquo;<cite>' + c.pull.c + '</cite></blockquote>';
    if (c.facts) html += '<ul class="keyfacts">' + c.facts.map(function (f) { return '<li><b>' + f.b + '</b>' + f.t + '</li>'; }).join('') + '</ul>';
    if (c.src) html += '<div class="chapter-src" style="margin-top:1.6rem"><h4>Sources for this chapter</h4><ul class="srclist">' + srcLinks(c.src) + '</ul></div>';
    html += '</div></article>';
    return html;
  }).join('');

  /* --------------------------- timeline --------------------------- */
  var tlState = {};
  LB.categories.forEach(function (c) { tlState[c.id] = true; });

  var counts = {};
  LB.timeline.forEach(function (e) { counts[e.cat] = (counts[e.cat] || 0) + 1; });

  $('#tlChips').innerHTML = LB.categories.map(function (c) {
    return '<button class="chip" type="button" data-cat="' + c.id + '" aria-pressed="true" style="--hue:' + c.color + '">' +
      c.label + ' <small>' + (counts[c.id] || 0) + '</small></button>';
  }).join('');

  var sorted = LB.timeline.slice().sort(function (a, b) { return a.d < b.d ? -1 : a.d > b.d ? 1 : 0; });
  var years = [];
  sorted.forEach(function (e) { if (years.indexOf(e.y) === -1) years.push(e.y); });

  $('#tlYears').innerHTML = years.map(function (y) {
    return '<button type="button" data-year="' + y + '">' + y + '</button>';
  }).join('');

  function eventHTML(e) {
    var c = catMap[e.cat] || { color: 'var(--silver)', label: e.cat };
    var h = '<li class="tl-item" data-cat="' + e.cat + '" data-year="' + e.y + '" style="--cat:' + c.color + '">' +
      '<div class="tl-card">' +
        '<div class="tl-card__top"><span class="tl-date">' + e.label + '</span><span class="tag">' + c.label + '</span></div>' +
        '<h4>' + e.t + '</h4>' + photoBlock(e, e.t) + '<p>' + e.x + '</p>';
    if (e.flag) h += '<p class="flag">' + (e.confidence === 'reported' ? '<strong>Reported:</strong> ' : '<strong>Note:</strong> ') + e.flag + '</p>';
    var foot = '';
    if (e.who) foot += memberChips(e.who);
    if (e.rel && relMap[e.rel]) foot += '<button class="openrel" type="button" data-rel="' + e.rel + '">' + relMap[e.rel].title + ' &rarr;</button>';
    foot += firstSrcLink(e.src);
    if (foot) h += '<div class="tl-card__foot">' + foot + '</div>';
    return h + '</div></li>';
  }

  function renderTimeline() {
    var active = sorted.filter(function (e) { return tlState[e.cat]; });
    var html = '', lastYear = null;
    active.forEach(function (e) {
      if (e.y !== lastYear) {
        html += '<li class="tl-year-head" id="tlyear-' + e.y + '"><h3>' + e.y + '</h3></li>';
        lastYear = e.y;
      }
      html += eventHTML(e);
    });
    $('#tl').innerHTML = html;
    $('#tlCount').textContent = active.length + ' of ' + sorted.length + ' events';
    $('#tlEmpty').hidden = active.length !== 0;

    var yearsShown = {};
    active.forEach(function (e) { yearsShown[e.y] = true; });
    $$('#tlYears button').forEach(function (b) {
      var on = !!yearsShown[b.dataset.year];
      b.disabled = !on;
      b.style.opacity = on ? '' : '.28';
    });

    if (reduceMotion) {
      $$('.tl-item').forEach(function (n) { n.classList.add('is-in'); });
    } else {
      $$('.tl-item').forEach(function (n) { itemObserver.observe(n); });
    }
  }

  var itemObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); itemObserver.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
    : { observe: function (n) { n.classList.add('is-in'); }, unobserve: function () {} };

  $('#tlChips').addEventListener('click', function (ev) {
    var b = ev.target.closest('.chip');
    if (!b) return;
    tlState[b.dataset.cat] = !tlState[b.dataset.cat];
    b.setAttribute('aria-pressed', String(tlState[b.dataset.cat]));
    renderTimeline();
  });
  function setAll(v) {
    LB.categories.forEach(function (c) { tlState[c.id] = v; });
    $$('#tlChips .chip').forEach(function (b) { b.setAttribute('aria-pressed', String(v)); });
    renderTimeline();
  }
  $('#tlAll').addEventListener('click', function () { setAll(true); });
  $('#tlNone').addEventListener('click', function () { setAll(false); });
  $('#tlEmptyReset').addEventListener('click', function () { setAll(true); });

  $('#tlYears').addEventListener('click', function (ev) {
    var b = ev.target.closest('button[data-year]');
    if (!b || b.disabled) return;
    var target = document.getElementById('tlyear-' + b.dataset.year);
    if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });

  $('#tl').addEventListener('click', function (ev) {
    var b = ev.target.closest('.openrel');
    if (b) openRelease(b.dataset.rel);
  });

  renderTimeline();

  /* --------------------------- lineup gantt --------------------------- */
  var G_START = new Date('2016-01-01').getTime();
  var G_END   = new Date('2027-01-01').getTime();
  function pos(dateStr) {
    var t = dateStr ? new Date(dateStr).getTime() : Date.now();
    return Math.max(0, Math.min(100, (t - G_START) / (G_END - G_START) * 100));
  }

  var gYears = [];
  for (var gy = 2016; gy <= 2026; gy++) gYears.push(gy);

  var hiA = pos(LB.hiatus.from), hiB = pos(LB.hiatus.to);

  function barsFor(m) {
    var out = '';
    var start = pos(m.from);
    var end = pos(m.to);
    var title = m.name + ' · ' + m.instrument + ' · ' + m.period;

    function bar(a, b, paused) {
      if (b - a < 0.15) return '';
      return '<button class="gantt__bar' + (paused ? ' gantt__bar--paused' : '') + '" type="button" ' +
        'data-member="' + m.id + '" style="--bar:' + m.color + ';left:' + a + '%;width:' + (b - a) + '%" ' +
        'title="' + title + (paused ? ' — band on hiatus' : '') + '" aria-label="' + title + '"></button>';
    }

    if (m.id === 'miho') {
      out += bar(start, end, false);
      out += '<span class="gantt__marker" style="--mk:' + m.color + ';left:' + end + '%"></span>';
    } else if (m.id === 'fami') {
      out += bar(start, pos(null), false);
      out += '<span class="gantt__marker" style="--mk:' + m.color + ';left:' + start + '%"></span>';
    } else {
      out += bar(start, hiA, false);
      out += bar(hiA, hiB, true);
      out += bar(hiB, pos(null), false);
    }
    return out;
  }

  $('#gantt').innerHTML =
    '<div class="gantt__head">' +
      '<h3>Tenures, 2016 &rarr; 2026</h3>' +
      '<div class="gantt__legend">' +
        '<span><i style="background:var(--silver)"></i>Active</span>' +
        '<span><i style="background:repeating-linear-gradient(135deg,var(--silver) 0 3px,transparent 3px 6px)"></i>Band on hiatus</span>' +
        '<span><i style="background:transparent;border:1px solid var(--silver);transform:rotate(45deg);width:7px;height:7px;border-radius:0"></i>Join / departure</span>' +
      '</div>' +
    '</div>' +
    '<div class="gantt__scroll"><div class="gantt__grid" style="--labelw:120px">' +
      '<div class="gantt__axis" style="grid-template-columns:repeat(' + gYears.length + ',1fr)">' +
        gYears.map(function (y) { return '<span>' + y + '</span>'; }).join('') +
      '</div>' +
      LB.members.map(function (m) {
        return '<div class="gantt__row">' +
          '<div class="gantt__label" style="color:' + m.color + '">' + m.name +
            '<small>' + m.instrument + '</small></div>' +
          '<div class="gantt__track">' + barsFor(m) + '</div>' +
        '</div>';
      }).join('') +
      '<div class="gantt__overlay"><div class="gantt__hiatus" style="left:' + hiA + '%;width:' + (hiB - hiA) + '%"><span>hiatus</span></div></div>' +
    '</div></div>' +
    '<p class="gantt__hint">Bars are plotted from the band\'s 2016 formation; the exact month LOVEBITES formed has not been published, so all founding tenures begin at the start of 2016. Select any bar or card for the full member profile. On narrow screens the chart scrolls sideways.</p>';

  $('#gantt').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-member]');
    if (b) openMember(b.dataset.member);
  });

  /* --------------------------- member cards --------------------------- */
  $('#members').innerHTML = LB.members.map(function (m) {
    return '<button class="member" type="button" data-member="' + m.id + '" style="--mc:' + m.color + '">' +
      '<span class="member__status member__status--' + m.status + '">' + (m.status === 'current' ? 'Current' : 'Former') + '</span>' +
      memberSigil(m) +
      '<h3>' + m.name + '</h3>' +
      '<p class="member__inst">' + m.instrument + '</p>' +
      '<p class="member__period">' + m.period + '</p>' +
      '<p class="member__role">' + m.role + '</p>' +
      '<span class="member__more">Full profile &rarr;</span>' +
    '</button>';
  }).join('');

  $('#members').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-member]');
    if (b) openMember(b.dataset.member);
  });

  /* --------------------------- discography --------------------------- */
  var discoState = { type: 'all' };
  var discoSorted = LB.releases.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });

  var typeCounts = {};
  discoSorted.forEach(function (r) { typeCounts[r.type] = (typeCounts[r.type] || 0) + 1; });

  $('#discoChips').innerHTML =
    '<button class="chip" type="button" data-type="all" aria-pressed="true" style="--hue:var(--silver)">All <small>' + discoSorted.length + '</small></button>' +
    LB.releaseTypes.map(function (t) {
      return '<button class="chip" type="button" data-type="' + t.id + '" aria-pressed="false" style="--hue:' + typeHue(t.id) + '">' +
        t.label + ' <small>' + (typeCounts[t.id] || 0) + '</small></button>';
    }).join('');

  function typeHue(t) {
    return { album: 'var(--c-release)', ep: 'var(--c-member)', single: 'var(--c-award)', live: 'var(--c-tour)', compilation: 'var(--c-festival)' }[t] || 'var(--silver)';
  }

  function renderDisco() {
    var list = discoSorted.filter(function (r) { return discoState.type === 'all' || r.type === discoState.type; });
    $('#discoGrid').innerHTML = list.map(function (r, i) {
      return '<button class="rel reveal" type="button" data-rel="' + r.id + '" style="--cat:' + typeHue(r.type) + '">' +
        '<span class="rel__art">' + makeArt(r.art, r.title) +
          '<span class="rel__type">' + typeMap[r.type].label + '</span>' +
          '<span class="rel__no">' + String(i + 1).padStart(2, '0') + '</span>' +
        '</span>' +
        '<span class="rel__meta">' +
          '<h3>' + r.title + '</h3>' +
          '<time datetime="' + r.date + '">' + r.dateLabel + '</time>' +
          (r.charts ? '<span class="rel__chart">' + r.charts.split('·')[0].trim() + '</span>' : '') +
        '</span>' +
      '</button>';
    }).join('');
    $$('#discoGrid .reveal').forEach(function (n) {
      if (reduceMotion) n.classList.add('is-in'); else revealObserver.observe(n);
    });
  }

  $('#discoChips').addEventListener('click', function (ev) {
    var b = ev.target.closest('.chip');
    if (!b) return;
    discoState.type = b.dataset.type;
    $$('#discoChips .chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === b)); });
    renderDisco();
  });

  $('#discoGrid').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-rel]');
    if (b) openRelease(b.dataset.rel);
  });

  $('#artNote').innerHTML = '<strong style="color:var(--text-dim)">On the artwork:</strong> the emblems above are original geometric illustrations generated for this page, ' +
    'one per release, in era-appropriate palettes, in the same heraldic style as the chapter plates. ' +
    'They are not the official cover art and are not intended to resemble it. ' +
    'For the real sleeves, visit the band\'s <a class="src" href="https://lovebites.jp/discography/" target="_blank" rel="noopener noreferrer">official discography</a> ' +
    'or the release pages linked in each detail view.';


  /* --------------------------- international footprint --------------------------- */
  (function footprint() {
    var canvas = $('#mapCanvas'), cap = $('#mapCap'), list = $('#mapList'), stats = $('#mapStats');
    if (!canvas || !LB.footprint) return;

    var byCountry = {};
    LB.footprint.forEach(function (p) { (byCountry[p.c] = byCountry[p.c] || []).push(p); });
    var countryNames = Object.keys(byCountry).sort(function (a, b) { return byCountry[b].length - byCountry[a].length; });

    stats.innerHTML = [
      { n: countryNames.length, l: 'Countries played' },
      { n: LB.footprint.length, l: 'Documented locations' },
      { n: '4', l: 'Continents' },
      { n: '2017', l: 'First show outside Japan' },
      { n: '4', l: 'First-time countries, 2026' }
    ].map(function (s) { return '<div><b>' + s.n + '</b><small>' + s.l + '</small></div>'; }).join('');

    canvas.insertAdjacentHTML('beforeend', LB.footprint.map(function (p, i) {
      return '<button class="pin pin--t' + p.t + '" type="button" data-pin="' + i + '"' +
        ' style="left:' + p.x + '%;top:' + p.y + '%"' +
        ' aria-label="' + p.n + ', ' + p.c + '"></button>';
    }).join(''));

    list.innerHTML = countryNames.map(function (cn) {
      return '<section><h3>' + cn + ' <span style="color:var(--text-faint);font-size:.8em">' + byCountry[cn].length + '</span></h3><ul>' +
        byCountry[cn].map(function (p) {
          return '<li><button type="button" data-pin="' + LB.footprint.indexOf(p) + '">' + p.n + '</button></li>';
        }).join('') + '</ul></section>';
    }).join('');

    var idle = '<p class="hint">Select any marker on the map, or any place below, for what happened there.</p>';
    cap.innerHTML = idle;

    function show(i) {
      var p = LB.footprint[i];
      if (!p) return;
      cap.innerHTML = '<h3>' + p.n + '</h3>' +
        '<p class="meta">' + p.c + ' &middot; ' + p.years + '</p>' +
        '<p>' + p.note + '</p>';
      $$('.pin.is-on, .maplist button.is-on').forEach(function (n) { n.classList.remove('is-on'); });
      $$('[data-pin="' + i + '"]').forEach(function (n) { n.classList.add('is-on'); });
    }

    function onEvent(ev) {
      var b = ev.target.closest('[data-pin]');
      if (b) show(+b.dataset.pin);
    }
    canvas.addEventListener('click', onEvent);
    canvas.addEventListener('mouseover', onEvent);
    canvas.addEventListener('focusin', onEvent);
    list.addEventListener('click', onEvent);
    list.addEventListener('focusin', onEvent);
  })();

  /* --------------------------- legacy + sources --------------------------- */
  $('#legacyBody').innerHTML = LB.legacy.map(function (l) {
    return '<div class="reveal"><h3>' + l.h + '</h3>' + l.p.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
  }).join('');

  $('#firsts').innerHTML = LB.firsts.map(function (f) {
    return '<div><b>' + f.n + '</b><span>' + f.t + '</span></div>';
  }).join('');

  $('#sourcesList').innerHTML = LB.sources.map(function (g) {
    return '<section><h3>' + g.group + '</h3><ol>' + g.items.map(function (it) {
      return '<li><span><a href="' + it.u + '" target="_blank" rel="noopener noreferrer">' + it.t + '</a>' +
        (it.n ? '<small>' + it.n + '</small>' : '') + '</span></li>';
    }).join('') + '</ol></section>';
  }).join('');

  /* --------------------------- modal --------------------------- */
  var modal = $('#modal'), modalBody = $('#modalBody'), modalPanel = $('.modal__panel');
  var modalPrev = $('#modalPrev'), modalNext = $('#modalNext');
  var lastFocus = null, modalKind = null, modalIndex = -1;

  function seqFor(kind) { return kind === 'release' ? discoSorted : LB.members; }
  function labelOf(o) { return o.title || o.name; }

  function openModal(html, kind, index) {
    lastFocus = document.activeElement;
    modalBody.innerHTML = html;
    modalKind = kind;
    modalIndex = index;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalBody.scrollTop = 0;
    var seq = seqFor(kind);
    modalPrev.disabled = index <= 0;
    modalNext.disabled = index >= seq.length - 1;
    modalPrev.textContent = index > 0 ? '← ' + labelOf(seq[index - 1]) : '← Previous';
    modalNext.textContent = index < seq.length - 1 ? labelOf(seq[index + 1]) + ' →' : 'Next →';
    modalPanel.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    modalKind = null; modalIndex = -1;
  }

  function step(delta) {
    if (!modalKind) return;
    var seq = seqFor(modalKind), i = modalIndex + delta;
    if (i < 0 || i >= seq.length) return;
    if (modalKind === 'release') openModal(releaseHTML(seq[i]), 'release', i);
    else openModal(memberHTML(seq[i]), 'member', i);
  }

  function openRelease(id) {
    var i = -1;
    discoSorted.forEach(function (r, k) { if (r.id === id) i = k; });
    if (i < 0) return;
    openModal(releaseHTML(discoSorted[i]), 'release', i);
  }
  function openMember(id) {
    var i = -1;
    LB.members.forEach(function (m, k) { if (m.id === id) i = k; });
    if (i < 0) return;
    openModal(memberHTML(LB.members[i]), 'member', i);
  }

  function dlHTML(rows) {
    return '<dl class="mh__dl">' + rows.map(function (r) {
      return '<div><dt>' + r.k + '</dt><dd>' + r.v + '</dd></div>';
    }).join('') + '</dl>';
  }

  function releaseHTML(r) {
    var hue = typeHue(r.type);

    var tracks;
    if (r.tracks) {
      tracks = '<ol class="tracks">' + r.tracks.map(function (t) {
        return '<li' + (t.n ? ' class="is-notable"' : '') + '><span>' + t.t + '</span>' + (t.d ? '<em>' + t.d + '</em>' : '') + '</li>';
      }).join('') + '</ol>' +
      '<p style="margin-top:.8rem;font-size:.78rem;color:var(--text-faint)">&#9733; marks tracks singled out in the sources as singles, videos or live centrepieces.</p>';
    } else {
      tracks = '<p style="color:var(--text-dim);font-size:.92rem">' + (r.tracksNote || 'Tracklist not documented here.') + '</p>';
    }

    var rows = [{ k: 'Release date', v: r.dateLabel }, { k: 'Type', v: typeMap[r.type].label }];
    if (r.runtime) rows.push({ k: 'Runtime', v: r.runtime });
    if (r.recorded) rows.push({ k: 'Recorded', v: r.recorded });
    rows.push({ k: 'Formats', v: r.formats.join(' &middot; ') });
    rows.push({ k: 'Labels', v: r.labels.join('<br>') });
    if (r.charts) rows.push({ k: 'Chart peaks', v: r.charts });

    var lineupRows = r.lineup.map(function (id) {
      var m = memberMap[id];
      return '<li style="color:' + m.color + ';border-color:' + m.color + '55">' + m.name + ' &mdash; ' + m.instrument.toLowerCase() + '</li>';
    }).join('');

    return '<div class="mh" style="--cat:' + hue + '">' +
        '<div class="mh__art">' + (r.photo ? photoBlock(r, r.title + ' cover art') : makeArt(r.art, r.title)) + '</div>' +
        '<div class="mh__txt">' +
          '<p class="mh__kicker">' + typeMap[r.type].label + ' &middot; ' + r.year + '</p>' +
          '<h2 id="modalTitle">' + r.title + '</h2>' +
          '<p style="margin:0;color:var(--text-dim);font-size:.95rem">' + r.sound + '</p>' +
          dlHTML(rows) +
        '</div>' +
      '</div>' +
      '<div class="mb">' +
        (r.flag ? '<p class="flag" style="margin-bottom:1.4rem"><strong>Note:</strong> ' + r.flag + '</p>' : '') +
        '<div class="mb__grid">' +
          '<div>' +
            '<h3>Historical context</h3>' +
            r.context.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
            '<h3 style="margin-top:1.8rem">Lineup on this release</h3>' +
            '<ul class="taglist">' + lineupRows + '</ul>' +
            (r.notable && r.notable.length
              ? '<h3 style="margin-top:.4rem">Notable songs</h3><ul class="taglist">' + r.notable.map(function (n) { return '<li style="color:var(--gold);border-color:rgba(201,162,39,.4)">' + n + '</li>'; }).join('') + '</ul>'
              : '') +
          '</div>' +
          '<div>' +
            '<h3>Tracklist</h3>' + tracks +
            '<h3 style="margin-top:1.8rem">Sources</h3><ul class="srclist">' + srcLinks(r.src) + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function memberHTML(m) {
    var rows = [
      { k: 'Instrument', v: m.instrument },
      { k: 'Period with LOVEBITES', v: m.period },
      { k: 'Status', v: m.status === 'current' ? 'Current member' : 'Former member' },
      { k: 'Role', v: m.role }
    ];
    var appears = LB.releases.filter(function (r) { return r.lineup.indexOf(m.id) !== -1; });

    return '<div class="mh" style="--cat:' + m.color + '">' +
        '<div class="mh__txt" style="grid-column:1/-1">' +
          '<div class="pm__hd" style="--mc:' + m.color + '">' +
            '<span class="pm__sigil">' + memberSigil(m, 86) + '</span>' +
            '<div>' +
              '<p class="mh__kicker" style="--cat:' + m.color + '">' + m.instrument + '</p>' +
              '<h2 id="modalTitle" style="margin:0">' + m.name + '</h2>' +
              '<p style="margin:.3rem 0 0;color:var(--text-dim);font-size:.9rem">' + m.period + '</p>' +
            '</div>' +
          '</div>' +
          dlHTML(rows) +
        '</div>' +
      '</div>' +
      '<div class="mb">' +
        (m.note ? '<p class="flag" style="margin-bottom:1.4rem"><strong>Note:</strong> ' + m.note + '</p>' : '') +
        '<div class="mb__grid">' +
          '<div>' +
            '<h3>Background</h3>' + photoBlock(m, m.name) + m.bg.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
          '</div>' +
          '<div>' +
            '<h3>Notable contributions</h3>' +
            '<ul style="margin:0 0 1.6rem;padding-left:1.1rem;color:#cdd0d5;font-size:.93rem">' +
              m.contrib.map(function (c) { return '<li style="margin-bottom:.55rem">' + c + '</li>'; }).join('') +
            '</ul>' +
            '<h3>Appears on (' + appears.length + ')</h3>' +
            '<ul class="taglist">' + appears.map(function (r) {
              return '<li><button class="linkish" type="button" data-rel="' + r.id + '" style="font-size:inherit;letter-spacing:inherit;text-transform:inherit">' + r.title + '</button></li>';
            }).join('') + '</ul>' +
            '<h3 style="margin-top:1.4rem">Sources</h3><ul class="srclist">' + srcLinks(m.src) + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  modal.addEventListener('click', function (ev) {
    if (ev.target.closest('[data-close]')) { closeModal(); return; }
    var rel = ev.target.closest('[data-rel]');
    if (rel) { openRelease(rel.dataset.rel); }
  });
  modalPrev.addEventListener('click', function () { step(-1); });
  modalNext.addEventListener('click', function () { step(1); });

  document.addEventListener('keydown', function (ev) {
    if (modal.hidden) return;
    if (ev.key === 'Escape') { closeModal(); }
    else if (ev.key === 'ArrowLeft') { step(-1); }
    else if (ev.key === 'ArrowRight') { step(1); }
    else if (ev.key === 'Tab') {
      var f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', modalPanel)
        .filter(function (n) { return n.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && (document.activeElement === first || document.activeElement === modalPanel)) {
        ev.preventDefault(); last.focus();
      } else if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault(); first.focus();
      }
    }
  });

  /* --------------------------- reveal, nav, progress --------------------------- */
  var revealObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); revealObserver.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 })
    : { observe: function (n) { n.classList.add('is-in'); }, unobserve: function () {} };

  renderDisco();
  $$('.reveal').forEach(function (n) {
    if (reduceMotion) n.classList.add('is-in'); else revealObserver.observe(n);
  });

  /* The wordmark is set in a condensed face. If it fails to load, the fallback
     is far wider and the nine letters overflow, so measure and fit it. */
  var heroTitle = $('.hero__title');
  function fitTitle() {
    if (!heroTitle || !heroTitle.isConnected || heroTitle.querySelector('img')) return;
    var avail = heroTitle.parentElement.clientWidth;
    if (!avail) return;
    heroTitle.style.maxWidth = 'none';
    heroTitle.style.fontSize = '100px';
    var w = heroTitle.getBoundingClientRect().width;
    heroTitle.style.maxWidth = '';
    if (!w) return;
    heroTitle.style.fontSize = Math.max(28, Math.min(168, (avail / w) * 100 * 0.985)) + 'px';
  }
  fitTitle();
  window.addEventListener('resize', fitTitle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitle).catch(function () {});

  var topbar = $('#topbar'), progressBar = $('#progressBar');
  var navLinks = $$('.topbar__nav a');
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      topbar.classList.toggle('is-stuck', y > 40);

      var mark = window.innerHeight * 0.3, current = -1;
      sections.forEach(function (s, i) {
        if (s && s.getBoundingClientRect().top <= mark) current = i;
      });
      navLinks.forEach(function (a, i) { a.classList.toggle('is-active', i === current); });

      var ymark = window.innerHeight * 0.4, cy = null;
      $$('.tl-year-head').forEach(function (n) {
        if (n.getBoundingClientRect().top <= ymark) cy = n.id.replace('tlyear-', '');
      });
      $$('#tlYears button').forEach(function (b) { b.classList.toggle('is-active', b.dataset.year === cy); });

      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* mobile drawer */
  var navToggle = $('#navToggle'), drawer = $('#navDrawer');
  navToggle.addEventListener('click', function () {
    var open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    drawer.hidden = open;
  });
  drawer.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') {
      drawer.hidden = true;
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });


  /* If an official logo file has been dropped into assets/img/, use it for the
     hero wordmark and the nav mark. Otherwise keep the typographic wordmark. */
  (function brandMark() {
    var candidates = ['assets/img/lovebites-logo.svg', 'assets/img/lovebites-logo.png'];
    var i = 0;
    function tryNext() {
      if (i >= candidates.length) return;
      var src = candidates[i++];
      var probe = new Image();
      probe.onload = function () { applyLogo(src); };
      probe.onerror = tryNext;
      probe.src = src;
    }
    function applyLogo(src) {
      var h1 = document.getElementById('heroTitle');
      if (h1) {
        h1.innerHTML = '<img class="brand-logo" src="' + src + '" alt="LOVEBITES">';
        h1.classList.remove('plat');
        h1.style.fontSize = '';
        heroTitle = null;
      }
      var navText = document.querySelector('[data-brand-text]');
      if (navText) {
        navText.outerHTML = '<img class="wm wm--img" src="' + src + '" alt="LOVEBITES">';
      }
    }
    tryNext();
  })();

  /* deep links: #release-<id> / #member-<id> */
  function fromHash() {
    var h = location.hash;
    if (h.indexOf('#release-') === 0) openRelease(h.slice(9));
    else if (h.indexOf('#member-') === 0) openMember(h.slice(8));
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();

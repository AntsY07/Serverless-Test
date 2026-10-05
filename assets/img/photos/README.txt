Photographs go here.

This project ships no photography: the build environment had no network access
to any image host, and band/press photos are copyrighted in any case. The page
is wired to use photos the moment you add them.

HOW TO ADD ONE
--------------
1. Drop the file in this folder, e.g. assets/img/photos/judgement-day.jpg
2. Add a `photo` field to the matching entry in assets/js/data.js:

   releases:  { id:'judgement-day', ..., photo:'assets/img/photos/judgement-day.jpg',
                photoCredit:'(c) Victor Entertainment' }

   members:   { id:'fami', ..., photo:'assets/img/photos/fami.jpg',
                photoCredit:'Photo: name of photographer' }

   timeline:  { d:'2026-03-29', ..., photo:'assets/img/photos/budokan.jpg',
                photoCredit:'Photo: name of photographer' }

That is all. The detail view uses the photo in place of the generated emblem,
and the timeline entry grows an image. If a `photo` field is absent, or the file
fails to load, the page silently falls back to the generated artwork, so a
missing file never breaks the layout.

`photoCredit` is optional but strongly recommended - it renders under the image.

LICENSING
---------
Only add images you have the right to publish. Official cover art and press
photos are owned by the band, its photographers and its labels; Victor
Entertainment, JPU Records and Napalm Records hold the relevant rights for the
releases documented here.

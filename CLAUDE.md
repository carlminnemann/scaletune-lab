# ScaleTune Lab

The workbench. Everything here is an experiment on the app people are using,
which lives in its own repository and at its own address:

    the app      https://carlminnemann.github.io/Scaletune/
    the lab      https://carlminnemann.github.io/scaletune-lab/

Carl's testers are on the first one. Nothing reaches it from here without him
saying so — when something in the lab is worth keeping, it is copied across
deliberately, not merged.

## The one rule that is not about design

**Both addresses are on the same domain**, and a browser keeps what a page
stores by domain, not by address. So every key this app writes carries `lab` in
its name — `scaletune-lab-exercises`, `scaletune-lab-theme`, and the rest — and
so does its offline cache. Break that and the workbench starts writing into the
saved exercises of the people who are testing the real thing.

The name on the screen carries a `lab` mark for the same reason.

## The law this workbench exists to try

Carl's words: everything as far as possible inside buttons, filling as much of
the screen as there is — better a button that opens a page of the controls it
governs than an arrow and a scroll.

What that has come to mean, and what a change here has to keep:

- **A screen is a choice or a question, never both.** A mode is boxes; a box
  opens a panel of boxes; a box there opens one page with one question on it.
  Back closes one level. The same shape holds in Ear training and in the tuner.
- **Boxes fill the screen.** A grid that ends half way up reads as a list cut
  short: the row grows into the room and the rows share it.
- **A box says its name and nothing else.** No value line under the title — the
  value is written in full on the page the box opens, and is kept as the box's
  aria-label. Where the fact that something is set matters, it is worn (the
  family holding the scale being played) and not written.
- **An odd one at the end of a two-column grid goes to the middle**, at the size
  of the others. Full width is a statement, kept for what deserves one.
- **Buttons are cards.** One light, from above: a lit top edge, a shaded foot, a
  shadow under them; pressed, they travel down and the shadow goes inside. A tap
  lights the button from the point of contact.
- **The transport has its own display.** While the metronome runs, the bar is
  drawn big above everything — a page is for setting, and the running screen is
  for looking at.

Colours are his and are not being changed here without him.

## Everything else

The conventions, the deploy ritual, the rules Carl set, the i18n key parity and
what a saved exercise is made of are all the app's, unchanged: read
`CLAUDE.md` in the Scaletune repository. `APP_VERSION` here is stamped `lab-`
so a screenshot says which one it came from, and `CACHE` in sw.js is bumped
with it as always.

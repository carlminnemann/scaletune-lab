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

## Everything else

The conventions, the deploy ritual, the rules Carl set, the i18n key parity and
what a saved exercise is made of are all the app's, unchanged: read
`CLAUDE.md` in the Scaletune repository. `APP_VERSION` here is stamped `lab-`
so a screenshot says which one it came from, and `CACHE` in sw.js is bumped
with it as always.

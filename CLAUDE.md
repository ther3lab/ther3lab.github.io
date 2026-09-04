# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is the public website for James Holehouse's **$R^3$ Lab** (Rules, Regulations and Randomness) at
Washington University in St. Louis, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll
academic-website theme and deployed to GitHub Pages at `ther3lab.github.io`. It is a content site, not an
application — almost all day-to-day changes are adding/editing Markdown/YAML content files, not touching the
theme's Ruby/Liquid/SCSS internals.

## Commands

There is no local Ruby/Jekyll toolchain assumed to be pre-installed — check before assuming `bundle` works.

- Install deps: `bundle install`
- Local dev server (live reload): `bundle exec jekyll serve`
- Production build (matches CI): `JEKYLL_ENV=production bundle exec jekyll build` → outputs to `_site/`
- Format Liquid/HTML/etc: `npx prettier --write .` (config via `.prettierignore`; also runs in CI on PRs)
- Docker alternative (no local Ruby needed): `docker compose up` (site at `http://localhost:8080`,
  live-reloads via `bin/entry_point.sh`)
- Manual deploy to `gh-pages` branch (rarely needed — see below): `bin/deploy`

There is no test suite. CI (`.github/workflows/`) instead runs: a production Jekyll build, `prettier` checks,
a broken-link checker (`lychee`, both on source Markdown and on the built site), an axe accessibility scan,
and CodeQL.

**Deployment is automatic**: `.github/workflows/deploy.yml` builds and pushes to GitHub Pages on every push to
`main` that touches content/asset paths. `bin/deploy` (build → push to a `gh-pages` branch) is the theme's
original manual-deploy script and is not the mechanism this repo actually uses — don't run it expecting it to
be the normal deploy path.

## Architecture

This is an unmodified **al-folio** theme install with only content customized — `CUSTOMIZE.md`, `FAQ.md`, and
`INSTALL.md` in the repo root are the upstream theme's own docs and are the reference for anything structural
(new collection types, layout options, theming) rather than something to rediscover from scratch.

**Where lab content actually lives** (everything else under `_layouts/`, `_includes/`, `_sass/`, `_plugins/`,
`_scripts/` is generic theme machinery, shared with every al-folio site):

- `_config.yml` — single source of truth for site title, nav order, and enabled features. Most "does the
  site show X" questions are answered by a flag here (e.g. `announcements.enabled`/`limit` on the about
  page's profile block controls how many `_news` items show on the homepage).
- `_pages/about.md` — homepage content and the `announcements:`/`social:` front-matter that controls the
  homepage layout.
- `_pages/about_james.md`, `_pages/about_leo.md` — per-person bio bodies, pulled in by `_pages/profiles.md`
  (the `/people/` page) via each profile block's `content:` front-matter field. Check `profiles.md`'s
  `content:` field before editing a bio to confirm which file is actually live — a repo can accumulate a
  stale alternate bio (an old `about_james_postdoc.md`, written from a pre-PI/current-postdoc framing, was
  removed 2026-09 once `about_james.md`'s post-move framing became current and `profiles.md` was repointed
  to it).
- `_news/announcement_N.md` — homepage news items. One file per item; the filename number has no ordering
  significance, `date:` in the front matter does (newest first, subject to the `announcements.limit` on the
  about page). Front matter is always `layout: post`, `inline: true`, `related_posts: false`, then a single
  Markdown paragraph body.
- `_bibliography/papers.bib` — the entire publications list, in standard BibTeX, rendered by `jekyll-scholar`
  on `_pages/publications.md` (which is otherwise just a `{% bibliography %}` include — don't hand-write
  publication HTML, add a `@article{...}` entry instead). Per-entry fields used by this site beyond standard
  BibTeX: `abbr` (short venue tag badge, e.g. `arXiv`, `PNAS`), `bibtex_show={true}` (adds a "BibTeX" toggle
  button), `selected={true}` (marks it for any "selected papers" view), `pdf`/`website`/`arxiv` (link
  buttons). Cite key convention is `lastname+year+firstwordoftitle` (e.g. `holehouse2026quantifying`);
  co-first-authorship is marked with a literal `*` appended to the surname in the `author` field, matching
  jekyll-scholar's own convention (e.g. `Holehouse*, James and Jeong*, Dawoon`). New papers should be added
  to keep this in sync with the PI's Google Scholar profile.
- `_pages/students_and_postdocs.md` — the recruiting page for prospective lab members; static advice/reading
  list content, not data-driven.
- `_pages/projects.md` + `_projects/*.md` — the `/projects/` page; each `_projects/N_project.md` is one
  project card (front matter controls image, ordering via `importance`, optional `category`).
- `_data/coauthors.yml` / `_data/venues.yml` — supplementary lookup data for jekyll-scholar (author
  disambiguation links, venue abbreviation styling); only needs touching if a new co-author/venue needs a
  custom link or color that jekyll-scholar can't infer from the `.bib` entry alone.

## Notes

- The `giscus.repo` value in `_config.yml` is intentionally left for CI to overwrite (`Update _config.yml`
  step in the deploy/link-check workflows sets it to `${{ github.repository }}`) — don't hardcode it.
- `_pages/about_einstein.md` and other unused template example pages are explicitly excluded from the build
  in `_config.yml`'s `exclude:` list rather than deleted; check that list before assuming an unreferenced
  `_pages/*.md` file is dead content worth removing.

# The $R^3$ Lab website

Website for the Rules, Regulations, and Randomness ($R^3$) Lab, led by James Holehouse at
Washington University in St. Louis — live at [ther3lab.github.io](https://ther3lab.github.io).

The $R^3$ Lab studies how regulatory systems — from transcription factors to legal codes — grow,
diversify, and remain robust across biology and society.

## Site structure

- `_pages/about.md` — landing page
- `_pages/profiles.md` + `_pages/about_james.md` / `about_leo.md` — people page, plus a
  collaborators list
- `_pages/projects.md` + `_projects/` — the three research directions
- `_bibliography/papers.bib` — publications, rendered onto `_pages/publications.md`
  by jekyll-scholar
- `_pages/cv.md` + `assets/json/resume.json` — CV page
- `_pages/talks.md`, `_pages/teaching.md`, `_pages/students_and_postdocs.md` — talks list,
  teaching, and prospective-member info
- `_news/` — one file per homepage news item

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (only content is
customized; theme internals are untouched aside from the CV layout, which upstream al-folio has
under a different name — see `CLAUDE.md`). `CLAUDE.md` has a fuller architecture writeup;
`CUSTOMIZE.md`, `INSTALL.md`, and `FAQ.md` are al-folio's own upstream docs, kept as reference for
anything theme-structural.

## Local development

No local Ruby/Jekyll toolchain is assumed to be pre-installed.

```bash
bundle install
bundle exec jekyll serve
```

Or with Docker (no local Ruby needed):

```bash
docker compose up
```

Either way, the site is served at `http://localhost:8080` with live reload.

## Deployment

Pushing to `main` automatically builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. No manual deploy step is needed.

## License

Built on [al-folio](https://github.com/alshedivat/al-folio), available under the
[MIT License](LICENSE).

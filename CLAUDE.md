# Gappy’s File — portfolio site

Static site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages from `main` / root.
Owner: Gappy (Kateryna Hapiienko). Talk to her in Ukrainian; she is a designer, beginner in web.

## Structure
- `index.html` — home: hero (assets/hero.svg + serif text), project grid
- `project.html?p=<slug>` — project page: info column (services, where, description, live link) + big media
- `about.html` — face illustration (assets/about/face.svg) with leader lines and link buttons; "illustrations — coming soon"
- `css/style.css` — tokens in `:root`: white bg, light grid lines, accent #0d99ff (Figma selection blue — the site imitates a Figma file), 6 cols, 10px gap, 120px row gap
- `js/projects.js` — project list; the only file to edit when adding work
- `js/main.js` — header/clock/footer, grid from data, project hover (blue outline per row with corner handles, gaps inside the frame keep the hover), "See project" tag follows the cursor, project + about pages

## Rules for media (agreed with Gappy)
- Tile ORDER = Gappy’s own file numbering (`01.webp`, `02.mp4`…), NOT the Figma order.
- Convert: images → `NN.webp` 800px wide, quality 82; videos → `NN.mp4` H.264, 800px wide, crf 26, no audio, +faststart. Her screen recordings often have non-square pixels (SAR ≠ 1:1): always normalise with `scale=trunc(iw*sar/2)*2:ih,setsar=1,scale=800:-2`.
- `h` in projects.js = real height at 225px width (placeholder only — on load each tile takes the file’s natural proportions, nothing is cropped).
- Never commit originals (PNGs).
- Mobile: 2 columns.
- Her local working folder: ~/Documents/Sites/portfolio-upload (assets/projects/<folder>/). She drops raw files there (any format, her numbering 1, 2…; may contain spaces in folder names like "free time"); Claude converts them and updates projects.js.
- Project texts: `text.txt` in each local project folder with lines `Services:`, `Where:`, `Live:`, `Description:` → copy into projects.js. "Live: already dead" means no link.

## Figma
File key `w9MVXkxrBpq5lMSbPg9pwC` (“My worksss”), page "new portfolio": home_new `4669:447`, projects_new `4669:1875`, about_new `4669:1815`.
Figma MCP is on the Starter plan — call limit is low, ask Gappy for PNG exports when it runs out.

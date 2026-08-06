# Adding a Project

Guide for humans and agents adding a new portfolio project to the Skapari Astro site.

## Overview

Projects are **not** Astro content collections or MDX. Everything lives in one JSON file; pages are generated from it.

| Piece | Location |
| ----- | -------- |
| Project data | `src/projects.json` |
| Cover image | `public/images/projects/{slug}.jpg` |
| Gallery images | `public/images/projects/{slug}/{slug}-1.jpg`, … |
| Raw source files | `sourcefiles/{Project Name}/` (optional, not served) |
| Listing page | `/projects` → `src/pages/projects.astro` + `ProjectGrid.svelte` |
| Detail page | `/projects/{slug}` → `src/pages/projects/[project].astro` |

No new page file is required. `getStaticPaths()` in `[project].astro` reads `projects.json`.

## Required fields

```json
{
  "slug": "radisson-blu-ras-al-khaimah",
  "url": "/projects/radisson-blu-ras-al-khaimah",
  "img": "/images/projects/radisson-blu-ras-al-khaimah.jpg",
  "name": "Radisson Blu Ras Al Khaimah",
  "category": "Hospitality",
  "status": "Completed",
  "images": [
    "/images/projects/radisson-blu-ras-al-khaimah/radisson-blu-ras-al-khaimah-1.jpg",
    "/images/projects/radisson-blu-ras-al-khaimah/radisson-blu-ras-al-khaimah-2.jpg"
  ],
  "description": "Short project narrative shown on the listing and detail page."
}
```

| Field | Required | Notes |
| ----- | -------- | ----- |
| `slug` | Yes | kebab-case; used as the URL param |
| `url` | Yes | Usually `/projects/{slug}` |
| `img` | Yes | Cover / card fallback path under `/images/projects/` |
| `name` | Yes | Display title |
| `images` | Yes | Gallery paths; listing uses `images[0]` when present |
| `category` | Yes for grid | `"Hospitality"`, `"Commercial"`, or `"Residential"` (title case). Projects without `category` are **hidden** from the filtered grid |
| `status` | Recommended | `"Completed"` or `"Conceptual"` |
| `description` | Recommended | Rendered in a single `<p>` — use one flowing paragraph (no markdown / newlines) |

## Category and status values

Use these exact strings (filtering lowercases; display keeps casing):

- **category:** `Hospitality` · `Commercial` · `Residential`
- **status:** `Completed` · `Conceptual`

## Step-by-step

### 1. Choose a slug

kebab-case from the project name, e.g. `radisson-blu-ras-al-khaimah`.

### 2. Prepare images

Put optimized JPEGs here:

```text
public/images/projects/{slug}.jpg
public/images/projects/{slug}/{slug}-1.jpg
public/images/projects/{slug}/{slug}-2.jpg
…
```

Conventions used on recent projects:

- Prefer **JPEG** over huge PNGs
- Long edge around **2400px**, quality ~80
- Cover is often a copy of the strongest hero (e.g. image `1`), also stored as `{slug}.jpg` at the projects root
- `images[0]` is the large hero on the detail page — put the best shot first
- Name files `{slug}-1.jpg`, `{slug}-2.jpg`, … (avoid spaces and awkward source filenames)

If source files are in `sourcefiles/…`, convert/rename with `sips` on macOS, for example:

```bash
SRC="sourcefiles/My Project Name"
DEST="public/images/projects/my-project-slug"
mkdir -p "$DEST"

sips -s format jpeg -s formatOptions 80 -Z 2400 \
  "$SRC/original-file.png" \
  --out "$DEST/my-project-slug-1.jpg"

cp "$DEST/my-project-slug-1.jpg" "public/images/projects/my-project-slug.jpg"
```

### 3. Add the JSON entry

Edit `src/projects.json`:

1. Insert a new object in the array (order within a category = listing order).
2. Place it near related projects when it makes sense (e.g. other Radisson / Hospitality entries).
3. Point `img` and every `images[]` path at files that exist under `public/`.
4. Validate JSON after editing.

```bash
node -e "JSON.parse(require('fs').readFileSync('src/projects.json','utf8')); console.log('ok')"
```

### 4. Verify

```bash
npm run dev
```

Check:

- `/projects` — project appears under the right category filter
- `/projects/{slug}` — title, status, description, and gallery load
- All image paths return 200 (no missing files)

## Checklist for agents

- [ ] Slug is kebab-case and unique
- [ ] Cover + gallery exist under `public/images/projects/`
- [ ] Images optimized (JPEG, ~2400px long edge) — do not commit multi‑MB PNGs
- [ ] Entry added to `src/projects.json` with `category` and `status`
- [ ] `url` matches `/projects/{slug}`
- [ ] `description` is a single paragraph
- [ ] JSON parses; image paths exist on disk
- [ ] Do **not** commit unless the user asks

## Reference examples

Good recent patterns to copy:

- `radisson-blu-ras-al-khaimah` — Hospitality / Completed, gallery under `public/images/projects/{slug}/`
- `radisson-collection-hotel-waterfront-cape-town` — same modern layout
- `ibis-styles-dakar` — same pattern with cover at `public/images/projects/ibis-styles-dakar.jpg`

Older projects may store galleries under `public/images/{folder}/` instead of `public/images/projects/{slug}/`. Prefer the newer `projects/{slug}/` layout for anything new.

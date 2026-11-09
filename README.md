# Rio Kuchlyan — Portfolio

Deployed at [riokuchlyan.com](https://riokuchlyan.com).

A personal portfolio built with Next.js, with About at `/`, Experience at `/experience`, Travel at `/travel`, and Photography at `/photography`. Resume, meeting, LinkedIn, and email links are on the About page.

## Editing content

All page copy and personal content live in `data/`. Edit the JSON files; no component edits are needed.

| File | Content |
| --- | --- |
| `data/home.json` | University line, homepage paragraphs (first is the lead paragraph), inline links, and button labels. Each paragraph is an array of text and `{ "text", "href" }` link objects. |
| `data/profile.json` | Name, location, contact and booking links, resume path, portrait path/alt text/dimensions, and profile metadata. |
| `data/experience.json` | Page heading, resume link label, and entries in display order. Each entry has an organization, role/school subtitle, date/category label, supporting details, and logo. Use `null` for a logo to display a text wordmark. |
| `data/photography.json` | Photography heading, description, and gallery control labels. |
| `data/travel.json` | Visited places grouped by continent, map IDs, and markers for small places. |
| `data/gallery.json` | Photo filenames and captions in display order. Images live in `public/assets/photos/`. |
| `data/site.json` | Navigation labels/links and not-found page text. Keep navigation IDs unchanged so active tabs work. |

Use local asset paths beginning with `/` or full HTTPS URLs for company logos. Resume and portrait files live in `public/`; their paths omit the `public` prefix.

The photo grid uses two columns of cropped 4:5 previews, with one column on the narrowest screens. Clicking a photo opens the full image; use the Previous/Next buttons or arrow keys to browse, and Escape to close.

The Travel globe uses D3 Geo and locally served [World Atlas](https://github.com/topojson/world-atlas) 50m country boundaries from Natural Earth. Drag or use arrow keys to rotate; use the zoom buttons or +/− keys to zoom. Hong Kong and Vatican City have markers so they remain visible at globe scale. England and Scotland are listed under the United Kingdom.

Images use compressed WebP sources; gallery previews load responsively and full-size images mount only when the viewer is opened. The headshot is pre-sized for its display. Experience logos are served locally. The globe uses simplified country boundaries, preloads its map data, and caches its content-hashed map file for a year. When replacing map data, change its filename and `mapSrc` in `data/travel.json`.

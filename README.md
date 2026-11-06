# Rio Kuchlyan — Portfolio

Deployed at [riokuchlyan.com](https://riokuchlyan.com).

A personal portfolio built with Next.js, with About at `/`, Experience at `/work`, and a photography gallery at `/photography`.

## Editing content

All page copy and personal content live in `data/`. Edit the JSON files; no component edits are needed.

| File | Content |
| --- | --- |
| `data/home.json` | University line, homepage paragraphs (first is the lead paragraph), and button labels. |
| `data/profile.json` | Name, contact and booking links, resume path, portrait path/alt text/dimensions, and profile metadata. |
| `data/experience.json` | Section headings, professional roles, company logo URLs, education, degrees, and resume link label. Use `null` for a logo to display a text wordmark. |
| `data/photography.json` | Photography heading, description, captions, and gallery control labels. |
| `data/gallery.json` | Photo filenames in display order. Images live in `public/assets/photos/`. |
| `data/site.json` | Navigation labels/links and not-found page text. Keep navigation IDs unchanged so active tabs work. |

Use local asset paths beginning with `/` or full HTTPS URLs for company logos. Resume and portrait files live in `public/`; their paths omit the `public` prefix.

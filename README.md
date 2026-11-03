# Lakshmikanth Pithani: bio and learning site

Next.js (App Router, static export) + MDX, deployed to GitHub Pages.

- `/` bio page (from `lib/profile.ts`)
- `/learn/` weekly learning notes (one MDX file per week in `app/learn/week-N/page.mdx`)
- `/learn/decks/` the interview question decks (`public/decks/index.html`, the original `Interview_Prep.html`)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Publish (one time)

```bash
git init -b main
git add .
git commit -m "Initial site"
gh repo create lakshmikanth-portfolio --public --source=. --push
```

Then in the GitHub repo: **Settings, Pages, Source: GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` builds and deploys on every push to `main`. The site appears at
`https://<your-github-username>.github.io/lakshmikanth-portfolio/`.

Without the `gh` CLI: create an empty repo on github.com, then
`git remote add origin <url> && git push -u origin main`.

If you name the repo `<username>.github.io`, the site is served at the root and no base path is used
(the workflow handles both cases).

## Add a new week or note

1. Copy `app/learn/week-4` to `app/learn/week-5` and edit `page.mdx`.
2. Add an entry to `weeks` in `lib/site.ts`.
3. Commit and push. The site redeploys in about a minute.

In MDX you can use `<Check id="unique-id">label</Check>` for progress checkboxes (remembered per browser)
and `<Callout title="...">...</Callout>` for highlighted notes. Avoid raw `{`, `}` and `<` in prose; put code in
fenced blocks.

## Notes

- The public resume at `public/Lakshmikanth_Pithani_Resume.pdf` has no phone number. Replace it when the resume changes.
- Progress checkboxes use `localStorage`, so they are per browser and per device.

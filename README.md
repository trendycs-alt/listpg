# My Payment Site

## Run it locally (to see it on your own computer)
1. Install [Node.js](https://nodejs.org) (LTS version) if you don't have it.
2. Unzip this project, open a terminal in the folder, and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000 in your browser — that's your live preview.

## Add/edit menu items
Edit `data/menu.js`. The whole nav (including dropdowns) regenerates from this file — no need to touch the Navbar component.

## Add a new page
1. Add an entry with a `path` in `data/menu.js`.
2. Create a folder matching that path under `app/` (e.g. `path: "/robot/new-bot"` → `app/robot/new-bot/page.js`).
3. Copy the pattern from an existing `page.js` file.

## Put it online (get a real domain / public link)
1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign up (free), click "Add New Project", and import your GitHub repo.
3. Vercel auto-detects Next.js and deploys it — you'll get a free `.vercel.app` link within about a minute.
4. To use your own domain (e.g. mysite.com), buy it from any registrar (Namecheap, GoDaddy, etc.) and add it under your Vercel project's "Domains" settings — Vercel gives you the DNS records to set.

Every time you push a change to GitHub, Vercel redeploys automatically.

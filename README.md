# 🚀 Personal Portfolio — GitHub Pages

A clean, fast, production-ready personal portfolio powered by **HTML5, CSS3, Vanilla JS**, and a **JSON data file** as the content database. Zero frameworks. Zero dependencies. Just edit `data.json` and you're done.

---

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML shell (no content — all dynamic)
├── style.css       # All styles (dark theme, responsive, animations)
├── script.js       # Fetches data.json and renders everything
├── data.json       # ← YOUR CONTENT DATABASE (edit this file)
└── README.md
```

---

## ✏️ How to Customize

**Open `data.json` and update these fields:**

### `personal`
| Field | Description |
|---|---|
| `name` | Your full name |
| `title` | Your professional title (shown under name) |
| `tagline` | Short punchy tagline |
| `intro` | 1–2 sentence hero intro |
| `phone` | Your phone number |
| `email` | Your email address |
| `github` | Full GitHub profile URL |
| `linkedin` | Full LinkedIn profile URL |
| `about` | Full about me paragraph |

### `techStack`
Array of skill category objects. Each has:
- `category` — display name
- `icon` — Font Awesome class for the category
- `color` — hex accent color
- `skills[]` — array of `{ name, icon }` items

### `pipeline`
5-step CI/CD flow. Each step has `step`, `title`, `icon`, `description`.

### `ai`
- `summary` — paragraph about your AI philosophy
- `models[]` — AI models you've used: `{ name, icon }`
- `tools[]` — AI tools: `{ name, icon }`
- `useCases[]` — array of real-world use case strings

### `projects`
Array of project cards. Each project:
- `name` — project title
- `description` — short summary
- `stack[]` — tech tags
- `github` — GitHub repo link
- `featured` — `true` adds a colored top border

---

## 🌐 Deploy to GitHub Pages

### Option 1 — GitHub UI
1. Create a new repository on GitHub (e.g., `yourusername.github.io`)
2. Upload all 4 files: `index.html`, `style.css`, `script.js`, `data.json`
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site is live at `https://yourusername.github.io`

### Option 2 — Git CLI
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```
Then enable GitHub Pages in repo Settings.

---

## ⚠️ Local Development Note

`data.json` is loaded via `fetch()`. Due to browser CORS restrictions, you **cannot** open `index.html` directly as a file (`file://`). Use a local server:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit `http://localhost:8080`

---

## 🎨 Customization Tips

- **Colors**: Edit CSS variables at the top of `style.css` (`:root { ... }`)
- **Fonts**: Change the Google Fonts import in `index.html`
- **Stats**: Update the hardcoded stats in `script.js` (`about-stats` section)
- **Icons**: All icons use [Font Awesome 6](https://fontawesome.com/icons) — browse and replace any icon class

---

## 📄 License

MIT — use freely, no attribution required.

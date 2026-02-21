# AI Coaching & Consulting Landing Page

Professional landing page for AI coaching and consulting services.

**Live Site:** [Add URL after deployment]

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Deployment:** Vercel

---

## Project Structure

```
ai-coaching-site/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── faq/               # FAQ page
│   ├── terms/             # Terms of Service
│   └── privacy/           # Privacy Policy
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero-section.tsx
│   ├── what-i-do-section.tsx
│   ├── how-it-works-section.tsx
│   ├── credibility-section.tsx
│   ├── about-section.tsx
│   ├── final-cta-section.tsx
│   └── footer.tsx
├── templates/             # Email & outreach templates
└── public/               # Static assets (add photos here)
```

---

## Development

**Install dependencies:**
```bash
npm install
```

**Run dev server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Build for production:**
```bash
npm run build
npm run start
```

---

## Before Going Live

See `SETUP-INSTRUCTIONS.md` for:
- Calendly integration
- Personal information updates
- Photo uploads
- Deployment steps

---

## Customization

### Adding shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Browse components: https://ui.shadcn.com/

### Modifying Colors

Edit `app/globals.css` CSS variables under `:root`

Primary color is currently set to deep blue (`oklch(0.45 0.15 250)`)

### Content Updates

All content is in component files—no CMS needed. Edit directly:
- `components/hero-section.tsx` - Hero content
- `components/what-i-do-section.tsx` - Services
- `app/faq/page.tsx` - FAQ items

---

## Deployment

**Vercel (recommended):**

```bash
vercel
```

**Other platforms:**
This is a standard Next.js app. Deploy to any platform supporting Next.js 15+.

---

## Templates

Email and outreach templates are in `/templates` folder. These are for personal use, not part of the deployed site.

---

## Design Notes

- **Brand Voice:** Authority + contrarian edge, accessible language
- **Visual Style:** 90% clean minimal (Stripe-like), 10% bold accents (deep blue)
- **Target Audience:** Executives (primary), Entrepreneurs (secondary)
- **Core Message:** "I build AI daily—not just advise on it"

---

## License

Private project. All rights reserved.

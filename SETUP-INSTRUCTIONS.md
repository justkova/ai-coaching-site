# Setup Instructions

## Required Customizations Before Deploy

### 1. Calendly Integration
Replace placeholder onClick handlers in:
- `components/hero-section.tsx`
- `components/final-cta-section.tsx`

**Option A: Direct link**
```typescript
const handleBookingClick = () => {
  window.open('https://calendly.com/your-link', '_blank');
};
```

**Option B: Embedded widget** (recommended)
Install Calendly React component:
```bash
npm install react-calendly
```

Then use `<PopupWidget>` or `<InlineWidget>` from `react-calendly`.

---

### 2. Personal Information
Update these files with actual information:

**Footer** (`components/footer.tsx`):
- Replace "David [LastName]" with full name
- Replace "contact@example.com" with actual email

**About Section** (`components/about-section.tsx`):
- Replace "David [LastName]" with full name
- Add any personal details to bio if desired

**Hero Section** (`components/hero-section.tsx`):
- Replace placeholder photo div with actual professional headshot

---

### 3. Photos
Add professional headshots:
- Hero section: 256x256px (or larger, will be styled as circle)
- About section: 256x256px+ rectangular
- Format: JPG or WebP for best performance

Place in `public/` folder and import in components.

---

### 4. FAQ Pricing (Optional)
Update `app/faq/page.tsx`:
- Replace "[rate]" with actual coaching session pricing
- Add specific industry examples if desired

---

### 5. Credibility Section (Optional)
Update `components/credibility-section.tsx`:
- Replace stats with actual project results if you have specific numbers
- Add certifications or credentials

---

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```
Use: kova@fastmail.com

3. Deploy:
```bash
vercel
```

Follow prompts:
- Link to existing project or create new
- Framework: Next.js (auto-detected)
- Build settings: Use defaults

4. For production deployment:
```bash
vercel --prod
```

---

### Custom Domain (Optional)

After deployment:
1. Go to Vercel dashboard
2. Select your project
3. Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

---

## Testing Checklist

Before going live:
- [ ] All CTAs link to Calendly (not placeholder alert)
- [ ] Personal info updated (name, email)
- [ ] Professional photos added
- [ ] Mobile responsive (test on phone)
- [ ] All pages load (/, /faq, /terms, /privacy)
- [ ] Links work (footer navigation)
- [ ] Fast load times (run Lighthouse in Chrome DevTools)

# Kintaraa Marketing Website

Official marketing website for Kintaraa, a GBV (Gender-Based Violence) support platform mobile app.

## 🎯 Purpose

This website serves as:
- Public-facing landing page for the Kintaraa mobile app
- Legal compliance hub (Privacy Policy & Terms of Service)
- App store submission requirement (Apple & Google require legal policy URLs)
- Trust-building platform for survivors and service providers

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Domain**: kintaraa.com

## 📦 Project Structure

```
kintaraa-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── privacy/           # Privacy Policy page
│   ├── terms/             # Terms of Service page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
├── PRD.md                 # Product Requirements Document
└── README.md              # This file
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/EvarestTechnologies/kintaraa-website.git
cd kintaraa-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push code to GitHub** (if not already done):
```bash
git add .
git commit -m "Initial commit: Kintaraa website"
git push origin claude/kintaraa-marketing-website-01AymWtnqib17kzSDbyggv3Q
```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import the `kintaraa-website` repository

3. **Configure project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete (~2-3 minutes)
   - You'll get a temporary URL like `kintaraa-website.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Deploy to production**:
```bash
vercel --prod
```

## 🌐 Custom Domain Setup (kintaraa.com)

### Step 1: Purchase Domain

**Recommended Registrars**:
1. **Namecheap** (recommended) - $8-12/year
   - Visit [namecheap.com](https://www.namecheap.com)
   - Search for "kintaraa.com"
   - Add to cart and purchase
   - Enable WhoisGuard (free privacy protection)

2. **Cloudflare Registrar** - $8-10/year (at-cost pricing)
   - Visit [cloudflare.com](https://www.cloudflare.com)
   - Create account and add domain

3. **Google Domains** (now Squarespace) - $12/year
   - Visit [domains.google.com](https://domains.google.com)

### Step 2: Configure DNS in Vercel

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter "kintaraa.com"
   - Click "Add"

2. **Copy DNS records** provided by Vercel:
   - A record: `76.76.21.21`
   - CNAME record: `cname.vercel-dns.com`

### Step 3: Update DNS in Domain Registrar

**For Namecheap**:
1. Log in to Namecheap
2. Go to "Domain List" → Click "Manage" next to kintaraa.com
3. Go to "Advanced DNS" tab
4. Add the following records:

| Type  | Host | Value                | TTL       |
|-------|------|----------------------|-----------|
| A     | @    | 76.76.21.21          | Automatic |
| CNAME | www  | cname.vercel-dns.com | Automatic |

5. Save changes

**For Cloudflare**:
1. Log in to Cloudflare
2. Select kintaraa.com
3. Go to "DNS" → "Records"
4. Add the same records as above
5. Set Proxy status to "DNS only" (gray cloud)

### Step 4: Wait for DNS Propagation

- DNS propagation typically takes 1-24 hours
- Check status: [whatsmydns.net](https://www.whatsmydns.net)
- Vercel will automatically provision SSL certificate once DNS is ready

### Step 5: Verify Deployment

Once DNS propagates, verify:
- ✅ https://kintaraa.com loads correctly
- ✅ https://kintaraa.com/privacy works
- ✅ https://kintaraa.com/terms works
- ✅ HTTPS (SSL) is enabled
- ✅ www.kintaraa.com redirects to kintaraa.com

## 📧 Email Setup (Optional)

For support@kintaraa.com:

### Option 1: Zoho Mail (Free)
1. Visit [zoho.com/mail](https://www.zoho.com/mail)
2. Sign up for free plan (5GB, 1 domain)
3. Add kintaraa.com domain
4. Configure MX records in your domain registrar
5. Create support@kintaraa.com mailbox

### Option 2: Google Workspace ($6/user/month)
1. Visit [workspace.google.com](https://workspace.google.com)
2. Sign up and add kintaraa.com
3. Configure MX records
4. Create support@kintaraa.com

### Option 3: Email Forwarding (Free via Namecheap)
1. In Namecheap dashboard
2. Go to "Email Forwarding"
3. Forward support@kintaraa.com to your personal email

## 🎨 Brand Colors

```css
--primary: #6366F1      /* Indigo */
--secondary: #8B5CF6    /* Purple */
--success: #10B981      /* Green */
--warning: #F59E0B      /* Amber */
--error: #EF4444        /* Red */
```

Gradients:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: linear-gradient(to right, #8B5CF6, #6366F1);
```

## 📝 Content Updates

### Updating Privacy Policy
Edit `/app/privacy/page.tsx`

### Updating Terms of Service
Edit `/app/terms/page.tsx`

### Updating Landing Page
Edit `/app/page.tsx`

After making changes:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically deploy changes.

## 🔍 SEO Checklist

- ✅ Meta tags configured in `app/layout.tsx`
- ✅ OpenGraph tags for social sharing
- ✅ `robots.txt` allows crawling
- ✅ Mobile responsive design
- ✅ Fast page load (<3s)
- ✅ Semantic HTML structure
- ✅ Alt text for images (add when images are available)

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant color contrast
- ✅ Keyboard navigation support
- ✅ Semantic HTML (headings, landmarks)
- ✅ Focus indicators on interactive elements
- ✅ Screen reader friendly
- ⚠️ Alt text needed for images when added

## 🔐 Security

- ✅ HTTPS/SSL via Vercel
- ✅ Secure headers configured
- ✅ No sensitive data exposed
- ✅ Dependencies regularly updated

## 📊 Performance

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### DNS not propagating
- Wait 24-48 hours
- Check DNS records are correct
- Use [whatsmydns.net](https://www.whatsmydns.net) to monitor

### SSL certificate not issued
- Verify DNS is properly configured
- Check Vercel dashboard for errors
- SSL is auto-provisioned once DNS is verified

## 📞 Support

For issues or questions:
- **Email**: support@kintaraa.com
- **Repository**: [github.com/EvarestTechnologies/kintaraa-website](https://github.com/EvarestTechnologies/kintaraa-website)

## 📄 License

Copyright © 2025 Kintaraa. All rights reserved.

## 🔗 Related Projects

- **Mobile App**: [kintaraa-app](https://github.com/EvarestTechnologies/kintaraa-app)
- **Backend API**: Deployed at api-kintara.onrender.com

---

**Built with ❤️ for GBV survivors**

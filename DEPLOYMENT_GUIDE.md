# Kintaraa Website Deployment Guide

Complete step-by-step guide to deploy the Kintaraa marketing website to production.

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] GitHub account with access to kintaraa-website repository
- [ ] Vercel account (free tier is sufficient)
- [ ] Credit card for domain purchase ($8-12)
- [ ] 2-4 hours of time (including DNS propagation wait)

## 🚀 Deployment Steps

### Phase 1: Push Code to GitHub (If Not Already Done)

```bash
# Ensure you're in the project directory
cd /path/to/kintaraa-website

# Check current status
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Initial release: Kintaraa marketing website with landing, privacy, and terms pages"

# Push to GitHub
git push -u origin claude/kintaraa-marketing-website-01AymWtnqib17kzSDbyggv3Q
```

**Expected Result**: Code is pushed to GitHub and visible in the repository.

---

### Phase 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended for First-Time Users)

1. **Sign in to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Find `kintaraa-website` in the repository list
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `kintaraa-website` (auto-filled)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
   - **Environment Variables**: None needed for now
   - Leave all other settings as default

4. **Deploy**:
   - Click "Deploy"
   - Watch the build logs (2-3 minutes)
   - Wait for "Congratulations!" message

5. **Verify Deployment**:
   - You'll receive a URL like `https://kintaraa-website-xxxxx.vercel.app`
   - Click "Visit" to open your deployed site
   - Test all pages:
     - ✅ Landing page loads
     - ✅ Navigation works
     - ✅ `/privacy` page works
     - ✅ `/terms` page works
     - ✅ Mobile responsive (test by resizing browser)

**Expected Result**: Website is live on a temporary Vercel URL.

#### Option B: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Your account)
# - Link to existing project? No
# - Project name? kintaraa-website
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

**Expected Result**: Website is live on a Vercel URL.

---

### Phase 3: Purchase Domain (kintaraa.com)

#### Recommended: Namecheap

1. **Search for Domain**:
   - Go to [namecheap.com](https://www.namecheap.com)
   - Search for "kintaraa.com"
   - Verify it's available

2. **Purchase**:
   - Add to cart
   - **Enable WhoisGuard** (free - protects your personal info)
   - Proceed to checkout
   - Create Namecheap account (if you don't have one)
   - Enter payment information
   - Complete purchase

3. **Cost**: $8-12/year (depending on promotions)

4. **Confirmation**:
   - You'll receive an email confirmation
   - Domain appears in your Namecheap dashboard under "Domain List"

**Expected Result**: You own kintaraa.com domain.

#### Alternative: Cloudflare Registrar

1. Go to [cloudflare.com](https://www.cloudflare.com)
2. Create account
3. Transfer or register domain
4. Follow Cloudflare's domain registration flow
5. Cost: ~$8-10/year (at-cost pricing)

---

### Phase 4: Configure Custom Domain in Vercel

1. **In Vercel Dashboard**:
   - Go to your project (`kintaraa-website`)
   - Click "Settings" tab
   - Click "Domains" in sidebar
   - Click "Add Domain" button

2. **Add Domain**:
   - Enter: `kintaraa.com`
   - Click "Add"
   - Vercel will show DNS configuration instructions

3. **Note the DNS Records**:
   Vercel will provide these records (example values):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   **Copy these values** - you'll need them in the next step.

4. **Add www Subdomain** (Recommended):
   - Click "Add Domain" again
   - Enter: `www.kintaraa.com`
   - Click "Add"
   - Vercel will auto-redirect www to apex domain

**Expected Result**: Domain added to Vercel, awaiting DNS verification.

---

### Phase 5: Configure DNS in Namecheap

1. **Access DNS Settings**:
   - Log in to [namecheap.com](https://www.namecheap.com)
   - Go to "Domain List"
   - Find `kintaraa.com`
   - Click "Manage"
   - Go to "Advanced DNS" tab

2. **Remove Existing Records** (if any):
   - Delete any existing A records pointing to parking pages
   - Delete any existing CNAME records for www

3. **Add Vercel DNS Records**:

   **Record 1 (Apex Domain)**:
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (or value from Vercel)
   - TTL: `Automatic`

   **Record 2 (WWW Subdomain)**:
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com` (or value from Vercel)
   - TTL: `Automatic`

4. **Save Changes**:
   - Click "Save All Changes"
   - Confirm changes

**Expected Result**: DNS records updated in Namecheap.

#### Alternative: Cloudflare DNS

1. **Access DNS Settings**:
   - Log in to Cloudflare
   - Select `kintaraa.com`
   - Click "DNS" → "Records"

2. **Add Records**:
   - Same records as above
   - **Important**: Set Proxy Status to "DNS only" (gray cloud icon)

3. **Save**

---

### Phase 6: Wait for DNS Propagation

DNS propagation can take anywhere from **1 to 24 hours**, but typically completes in 1-4 hours.

#### Monitor DNS Propagation:

1. **Use DNS Checker**:
   - Go to [whatsmydns.net](https://www.whatsmydns.net)
   - Enter: `kintaraa.com`
   - Select "A" record type
   - Check if it resolves to `76.76.21.21` globally

2. **Command Line Check**:
   ```bash
   # Check A record
   dig kintaraa.com

   # Check CNAME record
   dig www.kintaraa.com

   # Or use nslookup
   nslookup kintaraa.com
   nslookup www.kintaraa.com
   ```

3. **Vercel Dashboard**:
   - Go to Settings → Domains
   - Watch for "Valid Configuration" checkmark
   - SSL certificate will be auto-provisioned once DNS is verified

**Expected Timeline**:
- 0-1 hour: DNS starts propagating
- 1-4 hours: Most regions resolve correctly
- 4-24 hours: Complete global propagation
- SSL certificate: Auto-issued within minutes of DNS verification

**Expected Result**: DNS resolves globally, SSL certificate issued.

---

### Phase 7: Verify Production Deployment

Once DNS propagates and SSL is issued, verify everything works:

#### Automated Checks:

```bash
# Test HTTP redirects to HTTPS
curl -I http://kintaraa.com
# Should return: 301 Redirect to https://kintaraa.com

# Test HTTPS works
curl -I https://kintaraa.com
# Should return: 200 OK

# Test privacy page
curl -I https://kintaraa.com/privacy
# Should return: 200 OK

# Test terms page
curl -I https://kintaraa.com/terms
# Should return: 200 OK
```

#### Manual Verification Checklist:

- [ ] **Landing Page**:
  - [ ] https://kintaraa.com loads correctly
  - [ ] All sections visible (hero, features, providers, CTAs)
  - [ ] Navigation works
  - [ ] Footer links work
  - [ ] Mobile responsive

- [ ] **Privacy Policy**:
  - [ ] https://kintaraa.com/privacy loads
  - [ ] All sections visible
  - [ ] No broken links
  - [ ] Readable on mobile

- [ ] **Terms of Service**:
  - [ ] https://kintaraa.com/terms loads
  - [ ] All sections visible
  - [ ] No broken links
  - [ ] Readable on mobile

- [ ] **HTTPS/SSL**:
  - [ ] Green padlock in browser
  - [ ] Certificate is valid
  - [ ] HTTP redirects to HTTPS
  - [ ] No mixed content warnings

- [ ] **WWW Redirect**:
  - [ ] www.kintaraa.com redirects to kintaraa.com

- [ ] **Mobile Responsiveness**:
  - [ ] Test on actual mobile device (iPhone/Android)
  - [ ] All pages render correctly
  - [ ] Navigation menu works
  - [ ] Text is readable

- [ ] **Performance**:
  - [ ] Pages load in < 3 seconds
  - [ ] No console errors (F12 Developer Tools)
  - [ ] Images load correctly (when added)

#### Lighthouse Audit:

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Generate report"
5. Verify scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

**Expected Result**: All checks pass, website is live and fully functional.

---

### Phase 8: Update App Store Submission

Once the website is live, update your mobile app with the legal URLs:

1. **Update Mobile App Config**:
   ```javascript
   // In your mobile app (kintaraa-app)
   const LEGAL_URLS = {
     privacyPolicy: 'https://kintaraa.com/privacy',
     termsOfService: 'https://kintaraa.com/terms',
     website: 'https://kintaraa.com'
   }
   ```

2. **App Store Connect (iOS)**:
   - Log in to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
   - Go to your app
   - In "App Information" section:
     - Privacy Policy URL: `https://kintaraa.com/privacy`
   - In "App Review Information" section:
     - Additional information: Mention Terms at `https://kintaraa.com/terms`
   - Save changes

3. **Google Play Console (Android)**:
   - Log in to [play.google.com/console](https://play.google.com/console)
   - Go to your app
   - Go to "Store presence" → "App content"
   - Privacy policy: `https://kintaraa.com/privacy`
   - Go to app description and add:
     - Terms of Service: `https://kintaraa.com/terms`
   - Save changes

4. **Submit for Review**:
   - iOS: Submit app to App Store review
   - Android: Submit app to Google Play review

**Expected Result**: Mobile app submission includes valid legal URLs.

---

## 🔧 Post-Deployment Tasks

### 1. Set Up Email (Optional but Recommended)

Choose one of these options:

#### Option A: Zoho Mail (Free)
1. Sign up at [zoho.com/mail](https://www.zoho.com/mail)
2. Add domain `kintaraa.com`
3. Update MX records in Namecheap:
   ```
   Type: MX
   Host: @
   Value: mx.zoho.com
   Priority: 10

   Type: MX
   Host: @
   Value: mx2.zoho.com
   Priority: 20
   ```
4. Create mailbox: `support@kintaraa.com`
5. Access webmail at mail.zoho.com

#### Option B: Email Forwarding (Easiest, Free)
1. In Namecheap dashboard
2. Click "Email Forwarding" for kintaraa.com
3. Forward `support@kintaraa.com` to your personal email
4. Verify forwarding works

#### Option C: Google Workspace ($6/month)
1. Sign up at [workspace.google.com](https://workspace.google.com)
2. Add domain `kintaraa.com`
3. Update MX records (Google provides)
4. Create `support@kintaraa.com`
5. Access via Gmail

### 2. Set Up Analytics (Optional)

#### Vercel Analytics (Recommended - Free)
1. In Vercel dashboard → Settings → Analytics
2. Click "Enable Analytics"
3. View traffic data in Vercel dashboard

#### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `app/layout.tsx`
3. Monitor traffic and user behavior

### 3. Set Up Monitoring

#### Vercel Monitoring (Free)
- Automatic uptime monitoring
- Build status notifications
- Error tracking

#### UptimeRobot (Free)
1. Sign up at [uptimerobot.com](https://uptimerobot.com)
2. Add monitor for `https://kintaraa.com`
3. Get alerts if site goes down

### 4. SEO Optimization

#### Submit to Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `kintaraa.com`
3. Verify ownership (DNS verification recommended)
4. Submit sitemap: `https://kintaraa.com/sitemap.xml` (when created)

#### Submit to Bing Webmaster:
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site: `kintaraa.com`
3. Verify ownership
4. Submit sitemap

---

## 🐛 Troubleshooting Guide

### Issue: DNS Not Propagating After 24 Hours

**Symptoms**: Domain doesn't resolve, shows "DNS_PROBE_FINISHED_NXDOMAIN"

**Solutions**:
1. Verify DNS records are correct in registrar
2. Check TTL is set to "Automatic" or "300"
3. Flush local DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns

   # Linux
   sudo systemd-resolve --flush-caches
   ```
4. Try different DNS server (8.8.8.8, 1.1.1.1)
5. Contact domain registrar support

---

### Issue: SSL Certificate Not Issued

**Symptoms**: "Not Secure" warning, no HTTPS

**Solutions**:
1. Wait - SSL can take up to 24 hours after DNS verification
2. Check DNS is fully propagated
3. In Vercel: Settings → Domains → Click "Refresh" next to domain
4. Ensure DNS points to correct Vercel values
5. Check for CAA records blocking certificate issuance
6. Contact Vercel support if issue persists

---

### Issue: Build Fails on Vercel

**Symptoms**: Deployment fails with error messages

**Solutions**:
1. Check build logs in Vercel dashboard
2. Test build locally:
   ```bash
   npm run build
   ```
3. Common fixes:
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```
4. Ensure all dependencies are in `package.json`
5. Check for TypeScript errors: `npm run lint`

---

### Issue: Pages Return 404

**Symptoms**: `/privacy` or `/terms` return "404 Not Found"

**Solutions**:
1. Verify files exist in correct locations:
   - `app/privacy/page.tsx`
   - `app/terms/page.tsx`
2. Check file names are lowercase
3. Redeploy from Vercel dashboard
4. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
5. Wait 5 minutes for CDN to update

---

### Issue: Slow Page Load

**Symptoms**: Pages take > 5 seconds to load

**Solutions**:
1. Check Vercel region matches target audience
2. Enable Vercel Edge Network (automatic)
3. Optimize images (compress, use WebP)
4. Run Lighthouse audit to identify bottlenecks
5. Enable Vercel Analytics to monitor performance

---

### Issue: Mobile Layout Broken

**Symptoms**: Design looks wrong on mobile

**Solutions**:
1. Test in Chrome DevTools mobile emulator
2. Check Tailwind breakpoints are correct
3. Test on actual devices (iPhone, Android)
4. Verify viewport meta tag in `layout.tsx`
5. Check for fixed widths that don't scale

---

## 📊 Success Metrics

After deployment, monitor these metrics:

### Week 1:
- [ ] Zero downtime
- [ ] All pages load in < 3 seconds
- [ ] SSL certificate active
- [ ] No 404 errors
- [ ] Mobile responsiveness confirmed

### Week 2-4:
- [ ] Google Search Console indexed pages
- [ ] Lighthouse scores > 90
- [ ] Zero critical errors in Vercel logs
- [ ] Email forwarding works (if set up)

### Month 1-3:
- [ ] Organic search traffic begins
- [ ] App store submissions accepted (referencing legal URLs)
- [ ] User feedback collected
- [ ] Content updates as needed

---

## 📞 Getting Help

### Vercel Support:
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Email: support@vercel.com (for paid plans)

### Domain Support:
- Namecheap: [namecheap.com/support](https://www.namecheap.com/support)
- Cloudflare: [cloudflare.com/support](https://www.cloudflare.com/support)

### Kintaraa Support:
- Email: support@kintaraa.com
- Repository Issues: [github.com/EvarestTechnologies/kintaraa-website/issues](https://github.com/EvarestTechnologies/kintaraa-website/issues)

---

## ✅ Deployment Checklist

Print or copy this final checklist:

**Pre-Deployment**:
- [ ] Code pushed to GitHub
- [ ] Local build tested (`npm run build`)
- [ ] All pages manually verified
- [ ] Content reviewed for accuracy

**Deployment**:
- [ ] Vercel project created and deployed
- [ ] Temporary URL works correctly
- [ ] All pages tested on temporary URL

**Domain Setup**:
- [ ] Domain purchased (kintaraa.com)
- [ ] DNS records added in registrar
- [ ] Domain added in Vercel
- [ ] DNS propagation verified
- [ ] SSL certificate issued

**Verification**:
- [ ] https://kintaraa.com works
- [ ] https://kintaraa.com/privacy works
- [ ] https://kintaraa.com/terms works
- [ ] HTTPS enforced (HTTP redirects)
- [ ] WWW redirects to apex domain
- [ ] Mobile responsive confirmed
- [ ] Lighthouse scores > 90

**Post-Deployment**:
- [ ] Email set up (optional)
- [ ] Analytics enabled (optional)
- [ ] Google Search Console submitted
- [ ] App store URLs updated
- [ ] Documentation updated

**Maintenance**:
- [ ] Monitor Vercel dashboard for errors
- [ ] Set up uptime monitoring
- [ ] Schedule quarterly content reviews
- [ ] Keep dependencies updated

---

**Congratulations! Your Kintaraa website is now live! 🎉**

Next steps: Update mobile app and submit to App Store and Google Play.

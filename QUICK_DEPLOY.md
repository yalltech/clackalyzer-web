# Quick Deploy Checklist

Copy & paste these commands in order on your local machine.

---

## Step 1: Prepare Environment (2 min)

```bash




# Create .env.local
cp .env.example .env.local
```

Edit `.env.local` in your editor:
```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/clackalyzer/id6479999922
NEXT_PUBLIC_SITE_NAME=Clackalyzer
NEXT_PUBLIC_SITE_URL=https://clackalyzer.com
```

---

## Step 2: Install Dependencies (3 min)

```bash
npm install
```

If errors, try:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## Step 3: Build Locally (2 min)

```bash
npm run build
```

✓ Should see: `✓ Compiled successfully`

---

## Step 4: Test Locally (1 min)

```bash
npm run start
```

Visit: http://localhost:3000

Verify:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Feature pages load
- [ ] Use case pages load

Press `Ctrl+C` to stop.

---

## Step 5: Push to GitHub (2 min)

```bash
# Configure git (one-time)
git config --global user.name "Scott"
git config --global user.email "support@clackalyzer.com"

# Commit
git add .
git commit -m "Initial Clackalyzer website: 13 pages with features and use-cases"

# Push
git branch -M main
git remote add origin https://github.com/YourUsername/clackalyzer-web.git
git push -u origin main
```

**Replace `YourUsername` with your actual GitHub username.**

Verify on GitHub:
- Go to https://github.com/YourUsername/clackalyzer-web
- [ ] All files pushed
- [ ] `main` branch visible
- [ ] `app/` folder present

---

## Step 6: Deploy to Vercel (5 min)

1. Go to https://vercel.com
2. Sign in (create account if needed)
3. Click **"New Project"**
4. Click **"Import Git Repository"**
5. Search for `clackalyzer-web` → Click import

**Configure:**
- Project Name: `clackalyzer-web`
- Framework: Next.js (auto-detected)
- Root: `./`

**Add Environment Variables:**
| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_GA_ID` | (leave blank) |
| `NEXT_PUBLIC_APP_STORE_URL` | https://apps.apple.com/app/clackalyzer/id6479999922 |
| `NEXT_PUBLIC_SITE_NAME` | Clackalyzer |
| `NEXT_PUBLIC_SITE_URL` | https://clackalyzer.com |

Click **"Deploy"**

Wait 2–3 minutes for build to complete.

---

## Step 7: Verify Deployment (2 min)

Once Vercel shows ✓ complete:

1. Click the preview URL (e.g., `clackalyzer-web.vercel.app`)
2. Verify in browser:
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] All pages accessible
   - [ ] No console errors (DevTools → Console)

---

## Step 8: Connect Custom Domain (Optional, 5 min)

If you own `clackalyzer.com`:

1. In Vercel → **Settings → Domains**
2. Click **"Add Domain"**
3. Enter `clackalyzer.com`
4. Copy DNS records from Vercel
5. Update your domain registrar's DNS settings
6. Wait up to 24 hours for propagation

---

## All Done! ✓

**Production URL:** https://clackalyzer-web.vercel.app (or clackalyzer.com if domain configured)

**Auto-Deploy:** Every `git push` to `main` automatically deploys

---

## Troubleshooting Quick Fixes

**"npm install failed"**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**"Build failed in Vercel"**
1. Check Vercel build logs (Deployments tab)
2. Fix error locally
3. `git push origin main` to redeploy

**"Wrong environment variables showing"**
1. Vercel → Settings → Environment Variables
2. Add/edit values
3. Click "Redeploy" on Deployments tab

**"GitHub auth failing"**
```bash
git remote -v  # Check origin URL
git remote set-url origin https://github.com/YourUsername/clackalyzer-web.git
git push -u origin main
```

---

## Time Estimate

- Steps 1-4 (Local): **~8 minutes**
- Steps 5-6 (GitHub + Vercel): **~7 minutes**
- Step 7 (Verify): **~2 minutes**
- **Total: ~17 minutes to live**

---

**Status:** Ready to deploy locally

**Questions?** Check DEPLOYMENT.md for detailed instructions on any step.

# 🚀 Clackalyzer Web - Deployment Guide

Complete step-by-step guide to get your site live on Vercel.

## Step 1: Prepare Your GitHub Repository

### 1.1 Push code to GitHub

Make sure your code is on GitHub:

```bash
# If starting fresh
git init
git add .
git commit -m "Initial commit: Clackalyzer web + API"
git remote add origin https://github.com/YOUR_USERNAME/clackalyzer-web.git
git branch -M main
git push -u origin main
```

### 1.2 What GitHub needs

Your repo should have:
- ✅ `package.json`
- ✅ `pages/` folder
- ✅ `styles/` folder
- ✅ `next.config.js`
- ✅ `.gitignore` (so `node_modules` isn't committed)

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest for Beginners)

1. Go to **[vercel.com](https://vercel.com)** and sign up with GitHub
2. Click **"New Project"**
3. Find your `clackalyzer-web` repository and click **"Import"**
4. Vercel auto-detects Next.js. Click **"Continue"**
5. Under **Environment Variables**, add:
   ```
   NEXT_PUBLIC_API_KEY = choose-a-strong-key-here
   ```
6. Click **"Deploy"** and wait ~2 minutes
7. You'll get a URL like: `https://clackalyzer-web.vercel.app`

**That's it!** Your site is live. 🎉

### Option B: Vercel CLI (For Developers)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Follow prompts (link to GitHub repo)

# 5. Add environment variables when prompted
# NEXT_PUBLIC_API_KEY=your-strong-key
```

## Step 3: Configure Your API Key

### Production API Key

1. Go to your Vercel dashboard
2. Select your `clackalyzer-web` project
3. Click **Settings** → **Environment Variables**
4. Make sure `NEXT_PUBLIC_API_KEY` is set

For iOS app testing, use:
```
NEXT_PUBLIC_API_KEY = clackalyzer-prod-key-2026
```

## Step 4: Test Your API Endpoints

### Test Health Check
```bash
curl https://your-site.vercel.app/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "Clackalyzer backend is running",
  "timestamp": "...",
  "version": "1.0.0"
}
```

### Test Upload Endpoint
```bash
curl -X POST https://your-site.vercel.app/api/upload \
  -H "Content-Type: application/json" \
  -H "x-api-key: clackalyzer-prod-key-2026" \
  -d '{
    "userId": "test-user-123",
    "dataType": "keystrokes",
    "timestamp": "2026-05-09T12:00:00Z",
    "data": {
      "wpm": 85,
      "accuracy": 94.5,
      "totalKeys": 1000
    }
  }'
```

## Step 5: Update Your iOS App

In Xcode, update your API configuration:

```swift
// Config.swift or similar
let API_URL = "https://your-site.vercel.app"
let API_KEY = "clackalyzer-prod-key-2026"
```

Then use in your URLRequest:
```swift
var request = URLRequest(url: URL(string: "\(API_URL)/api/upload")!)
request.addValue(API_KEY, forHTTPHeaderField: "x-api-key")
```

## Step 6: Set Up Auto-Deployment

**Great news:** Vercel auto-deploys on every GitHub push!

### How it works:
1. You make changes locally
2. Commit and push to GitHub: `git push`
3. Vercel automatically builds and deploys
4. Your site updates within 1-2 minutes

No manual steps needed after deployment! 🚀

## Step 7: Custom Domain (Optional)

If you want `clackalyzer.com` instead of `vercel.app`:

1. Buy a domain at GoDaddy, Namecheap, etc.
2. In Vercel dashboard:
   - Project **Settings** → **Domains**
   - Add your custom domain
   - Follow DNS instructions
3. Done! (DNS takes 24-48 hours to propagate)

## Troubleshooting

### API returns 404
- Make sure files are in `pages/api/` folder
- Check file names match exactly: `upload.js`, `data.js`, `health.js`

### Environment variable not working
- Vercel requires `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding env vars:
  - Click **"Redeploy"** in Vercel dashboard, or
  - Push new commit to GitHub

### 500 Error on upload
- Check API key matches in your iOS app and Vercel env vars
- Verify request body has all required fields
- Check browser console for error messages

### Slow deployments
- First deploy takes ~3-5 minutes
- Subsequent deploys are faster (~1-2 minutes)
- Check build logs in Vercel dashboard

## What's Next?

✅ Landing page is live  
✅ API backend is running  
✅ Ready to connect iOS app  

Next steps:
1. Update your iOS app with the API URL
2. Test file uploads from the app
3. Monitor uploads in Vercel logs
4. Consider adding a database soon

---

**Need help?** 
- Check Vercel docs: https://vercel.com/docs
- Check Next.js docs: https://nextjs.org/docs
- Open GitHub Issues if stuck

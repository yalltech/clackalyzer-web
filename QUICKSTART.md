# ⚡ Clackalyzer Web - Quick Start

## What I Built For You

✅ **Beautiful Landing Page**
- Modern dark theme with cyan accents
- Features showcase
- Stats display
- Download buttons
- Fully responsive

✅ **Backend API** (3 endpoints)
- `/api/upload` - iOS app uploads keystroke data
- `/api/data` - retrieve user's data
- `/api/health` - check backend status

✅ **Production Ready**
- Optimized for Vercel
- Environment variables configured
- Error handling
- Security with API keys

## File Structure

```
clackalyzer-web/
├── pages/
│   ├── api/
│   │   ├── upload.js
│   │   ├── data.js
│   │   └── health.js
│   ├── index.js (Landing page)
│   ├── _app.js
│   └── _document.js
├── styles/
│   ├── home.module.css (Page styles)
│   └── globals.css
├── public/
│   └── uploads/ (Data storage)
├── README.md
├── DEPLOYMENT.md (Step-by-step)
├── iOS_INTEGRATION.md (Swift guide)
└── package.json
```

## Next Steps

### Step 1️⃣ : Push to GitHub (2 minutes)

```bash
# In your terminal, in the clackalyzer-web folder:
git init
git add .
git commit -m "Clackalyzer web + API"
git remote add origin https://github.com/YOUR_USERNAME/clackalyzer-web.git
git branch -M main
git push -u origin main
```

### Step 2️⃣ : Deploy to Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select `clackalyzer-web`
5. Add environment variable:
   - Name: `NEXT_PUBLIC_API_KEY`
   - Value: `clackalyzer-prod-key-2026`
6. Click "Deploy"
7. Wait ~2 minutes
8. You get a live URL! 🎉

### Step 3️⃣ : Update iOS App (5 minutes)

Copy `APIClient.swift` from `iOS_INTEGRATION.md` into your Xcode project.

Update the URL in APIClient.swift:
```swift
let baseURL = "https://your-vercel-url.vercel.app"
```

Test it:
```swift
APIClient.shared.uploadKeystrokeData(
    userId: "test-user",
    wpm: 85,
    accuracy: 94,
    totalKeys: 1000,
    sessionDuration: 3600
) { result in
    switch result {
    case .success(let response):
        print("✅ Upload success: \(response.fileId)")
    case .failure(let error):
        print("❌ Error: \(error.description)")
    }
}
```

## 📚 Documentation Files

Read these in order:

1. **README.md** - Overview & API reference
2. **DEPLOYMENT.md** - Detailed deployment steps
3. **iOS_INTEGRATION.md** - Swift code & examples

## 🎯 What You Can Do Now

### Landing Page Features
- ✅ Showcase your app
- ✅ Marketing content
- ✅ Download links
- ✅ Beautiful animations

### Backend Features
- ✅ Accept data from iOS app
- ✅ Store files on Vercel
- ✅ Retrieve data via API
- ✅ API key protection

### iOS Integration
- ✅ Upload session data
- ✅ Retrieve past sessions
- ✅ Check backend health
- ✅ Error handling

## 🔧 Configuration

**API Key** (change in production):
```
NEXT_PUBLIC_API_KEY = clackalyzer-prod-key-2026
```

**API URL** (your Vercel domain):
```
https://your-site.vercel.app
```

Update both in your iOS app!

## ⚙️ Local Development

Run locally before deploying:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000
```

API endpoints work the same locally!

## 🚀 Future Improvements

Consider adding:
- Database (PostgreSQL/MongoDB)
- User authentication
- Advanced analytics dashboard
- Real-time updates
- Data export (CSV/PDF)
- Rate limiting

## ❓ Quick Troubleshooting

**"API not found"**
- Check file names in `pages/api/`
- Redeploy on Vercel

**"Unauthorized error"**
- Make sure API key matches between iOS app and Vercel
- Check environment variables on Vercel dashboard

**"Upload failed"**
- Check network connection
- Verify API URL is correct
- Look at browser console for errors

## 📞 Support

- Check **README.md** for detailed docs
- Check **DEPLOYMENT.md** for deployment help
- Check **iOS_INTEGRATION.md** for Swift code examples

---

**Everything is ready!** 🎉

1. Push to GitHub
2. Deploy to Vercel
3. Update iOS app with new URL
4. Start uploading data!

Happy coding! ⌨️

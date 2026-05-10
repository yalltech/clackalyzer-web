# Clackalyzer Web

Beautiful landing page + backend API for the Clackalyzer iOS app. Track and analyze keyboard performance.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- GitHub account (for deployment)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/clackalyzer-web.git
cd clackalyzer-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. The API will be available at `http://localhost:3000/api/`.

## 📁 Project Structure

```
clackalyzer-web/
├── pages/
│   ├── api/
│   │   ├── upload.js      # POST endpoint to upload app data
│   │   ├── data.js        # GET endpoint to retrieve user data
│   │   └── health.js      # Health check endpoint
│   ├── index.js           # Landing page
│   ├── _app.js            # Next.js app wrapper
│   └── _document.js       # HTML document setup
├── styles/
│   ├── home.module.css    # Landing page styles
│   └── globals.css        # Global styles
├── public/
│   └── uploads/           # User data storage (local dev)
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
└── package.json
```

## 🔌 API Endpoints

### Upload Data
**POST** `/api/upload`

Upload keystroke data or analytics from your iOS app.

**Headers:**
```
Content-Type: application/json
x-api-key: your-api-key
```

**Body:**
```json
{
  "userId": "unique-user-id",
  "dataType": "keystrokes",
  "timestamp": "2026-05-09T12:34:56Z",
  "data": {
    "wpm": 85,
    "accuracy": 94.5,
    "totalKeys": 8432,
    "sessionDuration": 3600
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Data uploaded successfully",
  "fileId": "uuid",
  "fileName": "user-id-keystrokes-uuid.json"
}
```

### Retrieve Data
**GET** `/api/data?userId=user-id&dataType=keystrokes`

Get all uploaded data for a specific user, optionally filtered by data type.

**Headers:**
```
x-api-key: your-api-key
```

**Response:**
```json
{
  "success": true,
  "userId": "user-id",
  "dataType": "all",
  "count": 42,
  "data": [...]
}
```

### Health Check
**GET** `/api/health`

Check if the backend is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Clackalyzer backend is running",
  "timestamp": "2026-05-09T12:34:56Z",
  "version": "1.0.0"
}
```

## 📱 iOS Integration

In your Xcode app, configure the API base URL:

```swift
let API_KEY = "your-api-key"
let API_URL = "https://your-deployed-site.vercel.app"

// Example upload
func uploadKeystrokeData(_ data: KeystrokeData) {
    let url = URL(string: "\(API_URL)/api/upload")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.addValue("application/json", forHTTPHeaderField: "Content-Type")
    request.addValue(API_KEY, forHTTPHeaderField: "x-api-key")
    
    let body = [
        "userId": UIDevice.current.identifierForVendor?.uuidString ?? "unknown",
        "dataType": "keystrokes",
        "timestamp": ISO8601DateFormatter().string(from: Date()),
        "data": data.dictionary
    ]
    
    request.httpBody = try? JSONSerialization.data(withJSONObject: body)
    
    URLSession.shared.dataTask(with: request) { data, response, error in
        if let data = data, let json = try? JSONSerialization.jsonObject(with: data) {
            print("Upload successful: \(json)")
        }
    }.resume()
}
```

## 🚢 Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to connect your GitHub repo
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your `clackalyzer-web` repository
5. Vercel auto-detects Next.js configuration
6. Set environment variables:
   - `NEXT_PUBLIC_API_KEY` = your-secure-api-key
7. Click "Deploy"

### Post-Deployment

1. Update your `.env.local` to production URL:
```
NEXT_PUBLIC_API_URL=https://your-deployed-site.vercel.app
```

2. Update your iOS app's `API_URL` to the Vercel domain

3. Test the API:
```bash
curl https://your-deployed-site.vercel.app/api/health
```

## 🔒 Security Notes

⚠️ **API Key**: The `NEXT_PUBLIC_` prefix makes this visible to clients. This is intentional for client-side validation, but:
- Use a stronger key in production
- Consider rate limiting
- Validate all inputs server-side
- Never commit `.env.local` to git (included in `.gitignore`)

For production, consider:
- Using a real database instead of file storage
- Implementing user authentication
- Adding rate limiting
- Using environment-based API keys

## 📊 Future Enhancements

- [ ] Database integration (PostgreSQL, MongoDB)
- [ ] User authentication system
- [ ] Advanced analytics dashboard
- [ ] Data visualization
- [ ] Export to CSV/PDF
- [ ] Real-time sync with WebSockets

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📝 License

MIT License - feel free to use for your project!

## 🤝 Support

For issues or questions, open an issue on GitHub or contact the team.

---

Built with ⌨️ and ❤️ for keyboard enthusiasts

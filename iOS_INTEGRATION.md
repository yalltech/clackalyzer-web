# 📱 Clackalyzer iOS Integration Guide

How to connect your Xcode app to the Clackalyzer backend.

## Configuration

### 1. Create an APIClient class

Create a new Swift file: `APIClient.swift`

```swift
import Foundation

class APIClient {
    // Configuration
    static let shared = APIClient()
    
    #if DEBUG
    let baseURL = "http://localhost:3000"
    #else
    let baseURL = "https://your-deployed-site.vercel.app"
    #endif
    
    let apiKey = "clackalyzer-prod-key-2026"
    
    // MARK: - Upload Data
    
    func uploadKeystrokeData(
        userId: String,
        wpm: Double,
        accuracy: Double,
        totalKeys: Int,
        sessionDuration: Int,
        completion: @escaping (Result<UploadResponse, APIError>) -> Void
    ) {
        let endpoint = "\(baseURL)/api/upload"
        guard let url = URL(string: endpoint) else {
            completion(.failure(.invalidURL))
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.addValue(apiKey, forHTTPHeaderField: "x-api-key")
        
        let body: [String: Any] = [
            "userId": userId,
            "dataType": "keystrokes",
            "timestamp": ISO8601DateFormatter().string(from: Date()),
            "data": [
                "wpm": wpm,
                "accuracy": accuracy,
                "totalKeys": totalKeys,
                "sessionDuration": sessionDuration
            ]
        ]
        
        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: body)
        } catch {
            completion(.failure(.encodingError))
            return
        }
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                completion(.failure(.networkError(error)))
                return
            }
            
            guard let data = data else {
                completion(.failure(.noData))
                return
            }
            
            do {
                let response = try JSONDecoder().decode(UploadResponse.self, from: data)
                completion(.success(response))
            } catch {
                completion(.failure(.decodingError))
            }
        }.resume()
    }
    
    // MARK: - Retrieve Data
    
    func getUserData(
        userId: String,
        dataType: String? = nil,
        completion: @escaping (Result<DataResponse, APIError>) -> Void
    ) {
        var endpoint = "\(baseURL)/api/data?userId=\(userId)"
        if let dataType = dataType {
            endpoint += "&dataType=\(dataType)"
        }
        
        guard let url = URL(string: endpoint) else {
            completion(.failure(.invalidURL))
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.addValue(apiKey, forHTTPHeaderField: "x-api-key")
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                completion(.failure(.networkError(error)))
                return
            }
            
            guard let data = data else {
                completion(.failure(.noData))
                return
            }
            
            do {
                let response = try JSONDecoder().decode(DataResponse.self, from: data)
                completion(.success(response))
            } catch {
                completion(.failure(.decodingError))
            }
        }.resume()
    }
    
    // MARK: - Health Check
    
    func checkHealth(completion: @escaping (Bool) -> Void) {
        guard let url = URL(string: "\(baseURL)/api/health") else {
            completion(false)
            return
        }
        
        URLSession.shared.dataTask(with: url) { _, response, error in
            let success = error == nil && (response as? HTTPURLResponse)?.statusCode == 200
            DispatchQueue.main.async {
                completion(success)
            }
        }.resume()
    }
}

// MARK: - Models

struct UploadResponse: Codable {
    let success: Bool
    let message: String
    let fileId: String
    let fileName: String
}

struct DataResponse: Codable {
    let success: Bool
    let userId: String
    let dataType: String
    let count: Int
    let data: [UploadedData]
}

struct UploadedData: Codable {
    let id: String
    let userId: String
    let dataType: String
    let timestamp: String
    let data: [String: AnyCodable]
    let uploadedAt: String
}

// Helper for dynamic JSON
enum AnyCodable: Codable {
    case null
    case bool(Bool)
    case int(Int)
    case double(Double)
    case string(String)
    case array([AnyCodable])
    case object([String: AnyCodable])
    
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        
        if container.decodeNil() {
            self = .null
        } else if let bool = try? container.decode(Bool.self) {
            self = .bool(bool)
        } else if let int = try? container.decode(Int.self) {
            self = .int(int)
        } else if let double = try? container.decode(Double.self) {
            self = .double(double)
        } else if let string = try? container.decode(String.self) {
            self = .string(string)
        } else if let array = try? container.decode([AnyCodable].self) {
            self = .array(array)
        } else if let object = try? container.decode([String: AnyCodable].self) {
            self = .object(object)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "Cannot decode AnyCodable")
        }
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .null:
            try container.encodeNil()
        case .bool(let value):
            try container.encode(value)
        case .int(let value):
            try container.encode(value)
        case .double(let value):
            try container.encode(value)
        case .string(let value):
            try container.encode(value)
        case .array(let value):
            try container.encode(value)
        case .object(let value):
            try container.encode(value)
        }
    }
}

// MARK: - Error Handling

enum APIError: Error {
    case invalidURL
    case networkError(Error)
    case noData
    case decodingError
    case encodingError
    
    var description: String {
        switch self {
        case .invalidURL:
            return "Invalid URL"
        case .networkError(let error):
            return "Network error: \(error.localizedDescription)"
        case .noData:
            return "No data received from server"
        case .decodingError:
            return "Failed to decode response"
        case .encodingError:
            return "Failed to encode request"
        }
    }
}
```

## Usage Examples

### Upload Keystroke Data

```swift
import SwiftUI

struct ContentView: View {
    @State var isUploading = false
    @State var uploadMessage = ""
    
    var body: some View {
        VStack {
            Text("Clackalyzer")
                .font(.title)
            
            Button("Upload Session Data") {
                uploadData()
            }
            .disabled(isUploading)
            
            if !uploadMessage.isEmpty {
                Text(uploadMessage)
                    .foregroundColor(.green)
            }
        }
    }
    
    func uploadData() {
        isUploading = true
        let userId = UIDevice.current.identifierForVendor?.uuidString ?? "unknown"
        
        APIClient.shared.uploadKeystrokeData(
            userId: userId,
            wpm: 85.5,
            accuracy: 94.2,
            totalKeys: 8432,
            sessionDuration: 3600
        ) { result in
            DispatchQueue.main.async {
                isUploading = false
                switch result {
                case .success(let response):
                    uploadMessage = "✅ Upload successful! File ID: \(response.fileId)"
                case .failure(let error):
                    uploadMessage = "❌ Error: \(error.description)"
                }
            }
        }
    }
}
```

### Retrieve User Data

```swift
func loadUserData() {
    let userId = UIDevice.current.identifierForVendor?.uuidString ?? "unknown"
    
    APIClient.shared.getUserData(userId: userId, dataType: "keystrokes") { result in
        switch result {
        case .success(let response):
            print("Found \(response.count) sessions")
            for session in response.data {
                print("Session: \(session.uploadedAt)")
            }
        case .failure(let error):
            print("Error: \(error.description)")
        }
    }
}
```

### Check Backend Health

```swift
func checkBackendStatus() {
    APIClient.shared.checkHealth { isHealthy in
        if isHealthy {
            print("✅ Backend is running")
        } else {
            print("❌ Backend is down")
        }
    }
}
```

## Configuration for Different Environments

### Development (Local)
Update `APIClient.swift`:
```swift
#if DEBUG
let baseURL = "http://localhost:3000"  // Local development
#else
let baseURL = "https://your-site.vercel.app"  // Production
#endif
```

### Change API Key
Update in `APIClient.swift`:
```swift
let apiKey = "clackalyzer-prod-key-2026"
```

## Testing in Simulator

1. Make sure your backend is running (local `npm run dev`)
2. In Simulator, test with: `http://localhost:3000`
3. For real device testing, use your Vercel URL

## Debugging

### Enable Network Logging
Add to your app delegate:

```swift
URLSessionConfiguration.default.waitsForConnectivity = true

// Or use network debugging:
let config = URLSessionConfiguration.default
config.waitsForConnectivity = true
URLSession.shared = URLSession(configuration: config)
```

### Check API Responses
Monitor using:
- Xcode Console (print statements)
- Network Link Conditioner (simulate network conditions)
- Charles Proxy (intercept requests)

## Best Practices

✅ **Do:**
- Always handle API errors gracefully
- Show loading indicators during uploads
- Validate data before sending
- Use background sessions for large uploads
- Cache responses when possible

❌ **Don't:**
- Store API keys in code (use config files)
- Send sensitive data unencrypted
- Block UI while waiting for network responses
- Ignore error handling
- Make requests on the main thread

## Next Steps

1. ✅ Copy `APIClient.swift` to your Xcode project
2. ✅ Update API URL in APIClient.swift
3. ✅ Call `uploadKeystrokeData()` when user completes session
4. ✅ Call `getUserData()` to show stats
5. ✅ Test uploads from the app

---

Questions? Check the main README.md or open an issue on GitHub!

# CodeRunner - Online Compiler

A modern, frontend-only online compiler built with React and Vite. Execute code in multiple programming languages directly in your browser using the Judge0 API.

![CodeRunner](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.3-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Multiple Languages**: Support for Python, C, C++, Java, and JavaScript
- **Monaco Editor**: VS Code-powered editor with syntax highlighting and IntelliSense
- **Real-time Execution**: Execute code and see results instantly
- **Standard Input Support**: Provide stdin input for interactive programs
- **Error Handling**: Comprehensive error messages and execution statistics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Beautiful dark theme with custom styling
- **No Backend Required**: Runs entirely in the browser using Judge0 API

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- RapidAPI account (for Judge0 API key)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd online-compiler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your Judge0 API key**
   - Visit [RapidAPI - Judge0](https://rapidapi.com/judge0-official/api/judge0-ce)
   - Sign up for a free account
   - Subscribe to the Judge0 CE API (free tier available)
   - Copy your API key

4. **Configure API key**
   - Open `src/utils/api.js`
   - Replace `YOUR_RAPIDAPI_KEY_HERE` with your actual API key:
   
   ```javascript
   const RAPIDAPI_HEADERS = {
     'content-type': 'application/json',
     'X-RapidAPI-Key': 'your-actual-api-key-here',
     'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
   };
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start coding!

## 📁 Project Structure

```
online-compiler/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx    # Navigation bar
│   │   └── Navbar.css    # Navbar styles
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Home.css      # Home page styles
│   │   ├── Compiler.jsx  # Main compiler page
│   │   ├── Compiler.css  # Compiler styles
│   │   ├── About.jsx     # About page
│   │   └── About.css     # About page styles
│   ├── utils/            # Utility functions
│   │   ├── api.js        # Judge0 API integration
│   │   └── languages.js  # Language configurations
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Monaco Editor** - Code editor (same as VS Code)
- **Judge0 API** - Code compilation and execution
- **Axios** - HTTP client for API requests
- **Bootstrap 5** - CSS framework for responsive grid
- **Custom CSS** - Distinctive dark theme styling

## 💻 Supported Languages

| Language   | Version        | Judge0 ID |
|------------|----------------|-----------|
| Python     | 3.10           | 71        |
| C          | GCC 9.2.0      | 50        |
| C++        | GCC 9.2.0      | 54        |
| Java       | OpenJDK 13     | 62        |
| JavaScript | Node.js 12     | 63        |

## 🎯 How It Works

1. **Write Code**: Use the Monaco editor to write your code with syntax highlighting
2. **Provide Input**: Optionally provide stdin input for your program
3. **Submit to Judge0**: Code is submitted to the Judge0 API for compilation
4. **Poll for Results**: Application polls the API to check execution status
5. **Display Output**: Results, errors, and execution statistics are displayed

### API Flow

```
User clicks "Run" 
  → Code submitted to Judge0 API
  → Receives submission token
  → Polls API for result (every 1 second, max 10 attempts)
  → Displays output/error when complete
```

## ⚙️ Configuration

### Language IDs

You can add more languages by updating `src/utils/languages.js`. Find Judge0 language IDs in the [Judge0 documentation](https://ce.judge0.com/#statuses-and-languages-language).

### API Settings

Modify API settings in `src/utils/api.js`:
- Polling interval (default: 1000ms)
- Max polling attempts (default: 10)
- API endpoint URL

## 🚨 Limitations

### Frontend-Only Approach
- **API Key Exposure**: API key is visible in frontend code (use environment variables in production)
- **Rate Limits**: Free tier has request limits (50 requests/day typically)
- **CORS**: Must use Judge0 public API that supports CORS
- **No File Storage**: Cannot save code between sessions (use browser localStorage if needed)

### Judge0 Limitations
- **Execution Time**: Limited to a few seconds per execution
- **Memory Limits**: Memory usage restricted by Judge0
- **No File I/O**: File operations are not supported
- **Network Disabled**: Programs cannot make network requests

## 📈 Future Improvements

- [ ] Add more programming languages
- [ ] Implement code saving to browser localStorage
- [ ] Add code sharing functionality
- [ ] Implement syntax error detection before submission
- [ ] Add code templates and examples
- [ ] Implement dark/light theme toggle
- [ ] Add keyboard shortcuts (Ctrl+Enter to run)
- [ ] Implement code formatting
- [ ] Add multiple test cases support
- [ ] Create user authentication and cloud saving

## 🔒 Security Considerations

⚠️ **Important for Production:**

1. **API Key**: Never expose API keys in frontend code in production
   - Use environment variables
   - Implement a backend proxy server
   - Or use serverless functions (AWS Lambda, Netlify Functions)

2. **Rate Limiting**: Implement client-side rate limiting to prevent abuse

3. **Input Validation**: Validate code and input before submission

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Judge0](https://judge0.com/) - Open source online code execution system
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - VS Code's editor
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Judge0 documentation](https://ce.judge0.com/)
2. Review the code comments in `src/utils/api.js`
3. Ensure your API key is correctly configured
4. Check browser console for error messages

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using React and Judge0 API**
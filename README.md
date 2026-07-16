# 🧹 Royal Cleaning & Sterilization

> Professional cleaning and sterilization service management platform

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built with React](https://img.shields.io/badge/Built%20with-React%2019-61DAFB?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Real--time-orange)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

**Live Demo:** [royal-cleaning-sterilization.vercel.app](https://royal-cleaning-sterilization.vercel.app)

## Overview

Royal Cleaning & Sterilization is a modern web application designed for managing professional cleaning and sterilization services. It provides an intuitive interface for scheduling, tracking, and managing cleaning operations with real-time updates.

## ✨ Features

- 📅 **Booking System** - Easy appointment scheduling
- 🗓️ **Calendar Management** - Visual schedule overview
- 👥 **Team Management** - Manage staff and assignments
- 📊 **Analytics Dashboard** - Real-time performance metrics
- 🗺️ **Service Mapping** - Location tracking
- 💰 **Invoice Management** - Billing and payments
- 📱 **Mobile Responsive** - Works on all devices
- 🔄 **Real-time Updates** - Firebase integration
- 🎨 **Modern Design** - Beautiful, professional UI

## 🛠️ Prerequisites

- Node.js 18 or higher
- npm or yarn
- Firebase account
- Google Genai SDK

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ZOOKA-AI/Royal-Cleaning-Sterilization.git
cd Royal-Cleaning-Sterilization

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser - server runs at http://localhost:5173
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Royal-Cleaning-Sterilization/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard/      # Dashboard components
│   │   ├── Booking/        # Booking system
│   │   ├── Analytics/      # Analytics dashboard
│   │   └── Common/         # Shared components
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── services/           # Firebase services
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── .env.local             # Environment configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|----------|
| React | ^19.2.0 | UI Framework |
| TypeScript | ^5.8.2 | Type Safety |
| Vite | ^6.2.0 | Build Tool |
| Firebase | ^12.6.0 | Backend & Real-time DB |
| @google/genai | ^1.30.0 | AI Integration |
| Recharts | ^3.5.1 | Analytics Charts |
| Lucide React | ^0.555.0 | Icons |
| React Router | ^7.10.0 | Navigation |
| Tailwind CSS | Included | Styling |

## 🔧 Environment Setup

Create `.env.local` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 📊 Dashboard Features

### Booking Management
- Create and manage service bookings
- Automatic scheduling
- Conflict detection
- Cancellation handling

### Analytics
- Service completion rates
- Revenue tracking
- Team performance metrics
- Customer satisfaction scores

### Team Management
- Staff assignments
- Availability tracking
- Performance metrics
- Shift management

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys
# Configure environment variables in Vercel dashboard
```

### Docker

```bash
# Build image
docker build -t royal-cleaning .

# Run container
docker run -p 3000:3000 royal-cleaning
```

## 🔐 Security

- Firebase security rules enabled
- Environment variables for secrets
- HTTPS enforced
- Regular dependency updates
- See [SECURITY.md](./SECURITY.md)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

MIT License - see [LICENSE](./LICENSE) for details

## 📧 Support & Contact

- **Website**: [royal-cleaning-sterilization.vercel.app](https://royal-cleaning-sterilization.vercel.app)
- **Security Issues**: security@zooka-ai.com
- **Bug Reports**: [GitHub Issues](https://github.com/ZOOKA-AI/Royal-Cleaning-Sterilization/issues)
- **Questions**: [GitHub Discussions](https://github.com/ZOOKA-AI/Royal-Cleaning-Sterilization/discussions)

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vite Guide](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📈 Performance

- ⚡ <2s initial load
- 🔄 Real-time updates
- 📱 Mobile optimized
- ♿ Accessibility compliant

---

Made with ❤️ by [ZOOKA-AI](https://github.com/ZOOKA-AI)
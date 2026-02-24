# 🏋️ FitBase - Complete Gym Management System

A modern, full-featured gym management web application built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎯 User Portal
- **Dashboard**: Real-time stats, weekly activity charts, today's schedule
- **Workouts**: Browse 6+ workout programs with filters and detailed views
- **Schedule**: Interactive calendar, class booking system
- **Profile**: Personal information, achievements, progress tracking

### 👨‍💼 Admin Portal
- **Dashboard**: Overview with key metrics
- **Members**: Complete member management
- **Trainers**: Trainer profiles and scheduling
- **Equipment**: Equipment tracking and maintenance
- **Classes**: Class scheduling and management
- **Plans**: Membership plan management
- **Payments**: Payment processing and history
- **Reports**: Analytics and reporting
- **Settings**: System configuration

### 🌐 Public Pages
- **Welcome**: Animated landing page
- **Home**: Hero section, facilities, trainers, membership plans
- **Login/Signup**: User authentication
- **Contact**: Contact form
- **Membership**: Detailed plan comparison
- **Payment**: Secure payment processing

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (Download from https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
fitbase/
├── src/
│   ├── components/
│   │   ├── Router.jsx          # Main application router
│   │   ├── AdminLayout.jsx     # Admin navigation layout
│   │   └── UserLayout.jsx      # User navigation layout
│   │
│   ├── pages/
│   │   ├── WelcomePage.jsx     # Landing page
│   │   ├── LoginPage.jsx       # User login
│   │   ├── SignupPage.jsx      # User registration
│   │   ├── ContactPage.jsx     # Contact form
│   │   ├── MembershipPage.jsx  # Membership plans
│   │   ├── PaymentPage.jsx     # Payment processing
│   │   │
│   │   ├── admin/              # Admin pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Members.jsx
│   │   │   ├── Trainers.jsx
│   │   │   ├── Equipment.jsx
│   │   │   ├── Classes.jsx
│   │   │   ├── Plans.jsx
│   │   │   ├── Payments.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   └── user/               # User pages
│   │       ├── Dashboard.jsx   # User dashboard
│   │       ├── Workouts.jsx    # Workout library
│   │       ├── Schedule.jsx    # Class schedule
│   │       └── Profile.jsx     # User profile
│   │
│   ├── assets/
│   │   └── logo.png            # Application logo
│   │
│   ├── App.jsx                 # Home page component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
│
├── public/
│   └── vite.svg                # Vite logo
│
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite 4** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Lucide React** - Icon library

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## 🎯 Navigation Flow

### Public Access
```
Welcome Page → Home Page → Login/Signup
```

### After Login (User)
```
User Dashboard ↔ Workouts ↔ Schedule ↔ Profile
```

### Admin Access
```
Admin Dashboard → Members/Trainers/Equipment/Classes/Plans/Payments/Reports/Settings
```

## ✅ Features Implemented

### Animations
- ✨ Page transitions
- ✨ Hover effects
- ✨ Loading states
- ✨ Smooth scrolling
- ✨ Interactive elements

### UI Components
- 📊 Interactive charts
- 📅 Calendar views
- 🎴 Card layouts
- 📋 Data tables
- 🔘 Modal dialogs
- 📱 Bottom navigation (mobile)
- 🍔 Hamburger menu (mobile)

### User Experience
- 🎯 Intuitive navigation
- 🚀 Fast page loads
- 📱 Touch-friendly
- ♿ Accessible
- 🎨 Modern design

## 🐛 Troubleshooting

### White Screen?
**Solution**: Run `npm install` to install dependencies

### npm not recognized?
**Solution**: Install Node.js from https://nodejs.org/

### Port already in use?
**Solution**: Vite will automatically use another port

### Dependencies error?
**Solution**: Delete `node_modules` and run `npm install` again

## 📸 Screenshots

### User Dashboard
- Real-time fitness stats
- Weekly activity chart
- Today's schedule
- Quick action buttons

### Workouts Library
- Category filters
- Workout cards with images
- Detailed workout modals
- Start workout functionality

### Class Schedule
- Interactive week calendar
- Class booking system
- Available spots tracking
- Booking confirmation

### User Profile
- Personal information
- Statistics tracking
- Achievement badges
- Progress monitoring

## 🔐 Authentication

Currently uses client-side navigation. To add real authentication:
1. Integrate with backend API
2. Add JWT token management
3. Implement protected routes
4. Add session management

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is open source and available for educational purposes.

## 👥 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

For issues or questions:
1. Check the browser console (F12)
2. Review the SETUP_GUIDE.md
3. Check the TEST_APP.md for debugging

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion**

**Status**: ✅ Production Ready
**Version**: 0.0.1
**Last Updated**: 2026

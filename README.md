# CodeHerWay Education Platform

A modern frontend learning platform built with React and designed to guide users from beginner concepts to real-world application.

This project is part of a frontend portfolio and demonstrates scalable architecture, clean routing, and product-focused UI design.

---

## 🚀 Overview

The CodeHerWay Education Platform is being built as an interactive system where users can:

- Learn frontend development concepts step-by-step
- Complete lessons and quizzes
- Track progress over time
- Transition from learning → building → confidence

This project focuses heavily on **real-world frontend architecture**, not just UI.

---

## 🧱 Current Status

✅ Phase 1 Complete:
- Project scaffolded with Vite + React
- Clean folder architecture
- Routing system with protected/admin structure
- Layout system (public, app, admin)
- Page shells for all major routes
- Base styling system

🚧 In Progress:
- Authentication system integration
- Lesson system architecture
- Interactive learning experience

---

## 🧩 Tech Stack

- React (Vite)
- React Router
- JavaScript (ES6+)
- CSS (modular structure)

Planned:
- Authentication (Supabase or similar)
- State management via custom providers
- Interactive lesson + quiz system

---

## 📁 Project Structure

```txt
src/
├── assets/
├── components/
│   ├── admin/
│   ├── auth/
│   ├── shared/
│   └── ui/
├── layouts/
├── pages/
│   ├── public/
│   ├── app/
│   └── admin/
├── routes/
├── styles/
├── App.jsx
└── main.jsx

🔐 Routing Architecture

The app is structured around three access layers:

Public Routes
/
/demo
/login
/signup
Authenticated Routes
/app/dashboard
/app/profile
/app/settings
Admin Routes
/admin

Route guards are currently mocked and will be replaced with real authentication logic.

Clone the repo:
git clone https://github.com/itcodegirl/codeherway-education-platform.git
cd codeherway-education-platform

Install dependencies:
npm install

Start development server:
npm run dev

🎯 Project Goals

This project is designed to demonstrate:

Clean, scalable frontend architecture
Separation of concerns (routes, layouts, pages)
Real-world application structure
Product-oriented thinking (not just components)

👩‍💻 Author

Jenna Zawaski
Frontend Developer | CodeHerWay Founder
Building modern, interactive learning experiences for the next generation of developers.

🌱 Future Improvements
Full authentication flow
Lesson + quiz system
Progress tracking dashboard
Enhanced UI/UX polish
Mobile optimization
Animation layer (GSAP / interaction polish)
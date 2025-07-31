# 📚 LMS Monorepo

A scalable **Learning Management System (LMS)** built with a **Turborepo**, featuring:

- `student-ui` — [Next.js](https://nextjs.org/) frontend for students
- `admin-ui` — [Vite + React](https://vitejs.dev/) frontend for admins
- `backend-api` — Node.js/Express backend with MongoDB
- Google Auth with JWT
- Swagger UI for backend API documentation
- Shared packages support
- SCSS/SASS for styling
- Monorepo management via [Turborepo](https://turbo.build/)
- Package management with [PNPM](https://pnpm.io)

---

## 🚀 Tech Stack

| Layer          | Technology               |
|----------------|--------------------------|
| Frontend       | Next.js (Student UI)     |
| Admin Panel    | Vite + React (Admin UI)  |
| Backend        | Node.js + Express        |
| Database       | MongoDB (via Compass)    |
| Authentication | Google OAuth + JWT       |
| Styling        | SCSS / SASS              |
| Monorepo       | Turborepo + PNPM         |
| API Docs       | Swagger UI               |

---

## 📄 Product Requirements (PRD)

### 🎯 Goal

Build a full-stack LMS platform that enables:

- 📚 **Students** to register, view course content, submit assignments
- 🛠 **Admins** to manage courses, users, submissions
- 🔐 Secure authentication using **Google OAuth** and **JWT**
- 📑 Well-documented APIs using **Swagger UI**
- ⚡ Fast frontend performance via **Next.js** and **Vite**

### 👨‍🎓 Student Features

- Google login
- View courses, enrollments
- Watch lectures, submit assignments
- View grades and feedback

### 👩‍💼 Admin Features

- Google login
- Manage users, instructors, and students
- Add/update/delete courses
- View student progress
- Review and grade submissions

### 📡 Backend API Features

- Auth endpoints (login/register/refresh)
- CRUD for users, courses, lessons, assignments
- MongoDB integration
- Swagger UI at `/api-docs`

---

## 🗂 Monorepo Structure

```bash
lms-monorepo/
│
├── apps/
│   ├── student-ui/   # Next.js application
│   ├── admin-ui/     # Vite + React app
│   └── backend-api/  # Express API
│
├── packages/         # Shared packages (UI, utils, hooks)
├── turbo.json        # Turborepo pipeline
├── pnpm-workspace.yaml
└── README.md

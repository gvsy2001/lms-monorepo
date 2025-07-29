# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

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

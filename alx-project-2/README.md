# Next.js Project Setup and Basics

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app) for **ALX Project 0x02**.

## 🚀 Project Features

- **Next.js 15+** with Pages Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality
- Organized folder structure with components and interfaces

## 📁 Project Structure

```
alx-project-2/
├── components/
│   └── layout/
│       └── Header.tsx          # Main header component
├── interfaces/
│   └── index.ts                # TypeScript interfaces
├── pages/
│   ├── _app.tsx               # Next.js App component
│   ├── _document.tsx          # Next.js Document component
│   ├── index.tsx              # Home page with welcome message
│   └── api/                   # API routes
├── public/
│   └── assets/
│       └── images/            # Image assets directory
├── styles/                    # Global styles
└── README.md                  # This file
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🛠️ Development Guide

### Components
- Add new components in the `components/` directory
- Use the `Header` component as a reference for structure
- Import interfaces from `interfaces/index.ts`

### Styling
- This project uses Tailwind CSS for styling
- Global styles are in the `styles/` directory
- Use Tailwind classes directly in components

### TypeScript
- All components and pages use TypeScript
- Define interfaces in `interfaces/index.ts`
- Take advantage of type safety throughout the project

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 📋 Requirements Checklist

- ✅ Next.js project scaffolded with TypeScript
- ✅ Tailwind CSS enabled
- ✅ ESLint configured
- ✅ `/components/layout/Header.tsx` created
- ✅ `/interfaces/index.ts` created
- ✅ `/public/assets/images/` directory created
- ✅ `pages/index.tsx` updated with welcome message
- ✅ Project runs on port 3000

## 🚀 Run the Application

To start the development server on port 3000:

```bash
npm run dev -- -p 3000
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

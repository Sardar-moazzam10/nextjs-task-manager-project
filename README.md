Next.js Task Manager

A beautiful and functional task management application built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Add, edit, and delete tasks
- 🎯 Mark tasks as high priority
- 📊 View task statistics
- 🔍 Filter tasks (all, active, completed)
- 💾 Persistent storage using localStorage
- 📱 Responsive design
- ⚡ Fast and optimized with Next.js

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer (version 14 or higher).

### Installation

1. Create a new directory for your project:
```bash
mkdir nextjs-task-manager
cd nextjs-task-manager
```

2. Create all the files with the code provided above in their respective directories:
```
nextjs-task-manager/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
├── README.md
├── pages/
│   ├── _app.js
│   └── index.js
├── components/
│   └── TaskManager.js
├── styles/
│   └── globals.css
└── public/
    └── favicon.ico
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **localStorage** - Browser storage for persistence

## Project Structure

- `pages/` - Next.js pages
- `components/` - React components
- `styles/` - Global styles
- `public/` - Static assets

## Customization

You can easily customize the app by:
- Modifying colors in `tailwind.config.js`
- Adding new features in `components/TaskManager.js`
- Changing styles in `styles/globals.css`

## Deployment

To deploy this app:

1. Build the project:
```bash
npm run build
```

2. Deploy to platforms like Vercel, Netlify, or any hosting service that supports Next.js.

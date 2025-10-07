# React.js + Next.js Integration Guide

This project now supports both React.js (Create React App) and Next.js frameworks. You can run the application using either framework.

## Available Scripts

### React.js (Create React App)

- `npm start` - Runs the React app in development mode
- `npm run build` - Builds the React app for production
- `npm test` - Launches the test runner

### Next.js

- `npm run dev` - Runs the Next.js app in development mode
- `npm run next-build` - Builds the Next.js app for production
- `npm run next-start` - Runs the production Next.js build
- `npm run next-export` - Exports the Next.js app as static files

## Project Structure

```
expense-tracking-app/
├── src/                    # React.js source files (existing)
│   ├── components/         # React components
│   ├── pages/             # React Router pages
│   └── types/             # TypeScript types
├── pages/                 # Next.js pages (new)
│   ├── _app.tsx          # Next.js app wrapper
│   ├── _document.tsx     # Next.js document wrapper
│   ├── index.tsx         # Home page (Next.js)
│   └── newpage.tsx       # New page (Next.js)
├── next.config.js        # Next.js configuration
├── next-env.d.ts         # Next.js TypeScript definitions
└── tsconfig.json         # Updated TypeScript config
```

## How to Use

### Running with React.js (Original)

```bash
npm start
```

This will start the original React.js application with React Router.

### Running with Next.js

```bash
npm run dev
```

This will start the Next.js application with file-based routing.

## Key Differences

### Routing

- **React.js**: Uses React Router with `<BrowserRouter>`, `<Route>`, and `<Switch>`
- **Next.js**: Uses file-based routing in the `pages/` directory

### Navigation

- **React.js**: Uses `<Link to="/path">` from react-router-dom
- **Next.js**: Uses `<Link href="/path">` from next/link

### Components

Both frameworks share the same components in the `src/components/` directory, ensuring consistency across both implementations.

## Development Workflow

1. **Component Development**: Develop components in `src/components/` - they work with both frameworks
2. **Page Development**:
   - For React.js: Add pages to `src/pages/` and update routing in `App.tsx`
   - For Next.js: Add pages to `pages/` directory following Next.js conventions
3. **Styling**: CSS files in `src/components/` work with both frameworks

## Benefits of This Setup

1. **Flexibility**: Choose the framework that best fits your needs
2. **Component Reuse**: Share components between both implementations
3. **Gradual Migration**: Migrate from React.js to Next.js at your own pace
4. **Learning**: Compare both frameworks side by side

## Production Deployment

### React.js Build

```bash
npm run build
```

Deploy the `build/` directory to any static hosting service.

### Next.js Build

```bash
npm run next-build
npm run next-start
```

Deploy using Next.js deployment options or export as static files with `npm run next-export`.

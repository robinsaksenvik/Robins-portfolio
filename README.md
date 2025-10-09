# Robin's Portfolio

A modern, full-stack portfolio website built with React, TypeScript, and Express. Features a sleek design with animations, typewriter effects, and a responsive layout showcasing projects and professional information.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3 + Radix UI components
- **Backend**: Express.js server with serverless functions
- **Deployment**: Netlify with automatic deployments
- **Package Manager**: npm
- **Testing**: Vitest
- **Icons**: Lucide React

## 🏗️ Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components
│   ├── Index.tsx         # Home page with hero section
│   ├── About.tsx         # About page
│   ├── Projects.tsx      # Projects showcase
│   ├── FindMe.tsx        # Contact information
│   └── NotFound.tsx      # 404 page
├── components/
│   ├── ui/               # Pre-built UI component library (Radix + Tailwind)
│   └── layout/           # Layout components
├── data/                 # Static data for projects and content
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── App.tsx               # Main app with routing setup
└── global.css            # TailwindCSS configuration and global styles

server/                   # Express API backend
├── index.ts              # Main server setup
└── routes/               # API route handlers

netlify/
└── functions/            # Serverless functions for deployment

shared/                   # Shared types between client & server
└── api.ts                # API interface definitions

public/                   # Static assets
├── robin-profile.jpg     # Profile image
└── placeholder.svg       # Placeholder assets
```

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Custom CSS animations and transitions
- **Typewriter Effect**: Interactive text animations on the homepage
- **Dark/Light Mode**: Theme support with CSS custom properties
- **SPA Routing**: Client-side routing with React Router 6
- **Component Library**: Pre-built UI components using Radix UI
- **TypeScript**: Full type safety across the entire application
- **Hot Reload**: Development server with instant updates
- **Serverless Functions**: API endpoints deployed as Netlify functions
- **Modern Tooling**: Vite for fast builds and development

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/robinsaksenvik/Robins-portfolio.git
cd Robins-portfolio

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server (runs both client and server)
npm run dev
```

The application will be available at `http://localhost:8080`

### Build Commands

```bash
# Build for production (client + server)
npm run build

# Build client only
npm run build:client

# Build server only  
npm run build:server

# Type checking
npm run typecheck

# Run tests
npm test
```

## 🚀 Deployment

The project is configured for automatic deployment on Netlify:

1. **Automatic Deployments**: Connected to GitHub for automatic deployments on push to `main`
2. **Serverless Functions**: API routes are deployed as Netlify functions
3. **SPA Routing**: Configured with proper redirects for client-side routing

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Netlify (if CLI is configured)
netlify deploy --prod
```

## 🎨 Customization

### Adding New Pages

1. Create a new component in `client/pages/`
2. Add the route in `client/App.tsx`:

```typescript
<Route path="/your-page" element={<YourPage />} />
```

### Adding API Endpoints

1. Create a route handler in `server/routes/`
2. Register it in `server/index.ts`
3. Use shared types from `shared/api.ts` for type safety

### Styling

- **Global Styles**: Modify `client/global.css` for theme and global styles
- **Component Styles**: Use Tailwind utility classes
- **UI Components**: Pre-built components in `client/components/ui/`
- **Utility Function**: Use `cn()` for conditional class combinations

### Data Management

- **Projects**: Update `client/data/projects.ts`
- **About Information**: Update `client/data/about.ts`
- **Static Assets**: Place in `public/` directory

## 📁 Key Files

- `netlify.toml` - Netlify deployment configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `vite.config.ts` - Vite build configuration for client
- `vite.config.server.ts` - Vite configuration for server build
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI component configuration

## 🔧 Architecture Notes

- **Single Port Development**: Vite dev server proxies API requests to Express
- **Type Safety**: Shared TypeScript interfaces between client and server
- **Component Architecture**: Modular, reusable components with proper separation
- **Performance**: Optimized builds with code splitting and tree shaking
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📝 License

This project is personal portfolio code. Please respect the original work and credit appropriately if you use any parts of this code.

## 👨‍💻 Author

**Robin S. Karlsen**
- Portfolio: [Your deployed URL]
- GitHub: [@robinsaksenvik](https://github.com/robinsaksenvik)

---

Built with ❤️ using modern web technologies
# Professional Freelance Web Developer Portfolio

## Overview

This is a modern full-stack web application built as a portfolio website for a freelance web developer. The project showcases a clean, professional design with multiple sections including hero, about, services, portfolio, experience, testimonials, and contact information. The application uses a modern tech stack with React frontend and Express backend, designed to demonstrate technical skills and attract potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: In-memory storage implementation for rapid prototyping
- **API Structure**: RESTful API design with `/api` prefix

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **About**: Personal story, skills showcase, and statistics
- **Services**: Grid layout showcasing different service offerings
- **Portfolio**: Project gallery with technology tags
- **Experience**: Timeline of work experience and education
- **Testimonials**: Client feedback carousel
- **Contact**: Contact information and professional guarantees

### UI System
- **Design System**: Based on shadcn/ui with neutral color scheme
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Icons**: Lucide React icons with additional React Icons for brand icons

### Backend Structure
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Route Registration**: Centralized route management system
- **Middleware**: Custom logging and error handling
- **Development Tools**: Vite integration for hot module replacement

## Data Flow

### Development Mode
1. Client requests are served through Vite development server
2. API requests are proxied to Express server
3. Express server uses in-memory storage for rapid development
4. Real-time updates via HMR (Hot Module Replacement)

### Production Mode
1. Static assets are built and served by Express
2. API routes handle business logic
3. Database operations through Drizzle ORM
4. PostgreSQL database for persistent storage

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Extensible Design**: Schema designed for easy expansion with additional entities

## External Dependencies

### Frontend Dependencies
- **UI/UX**: Radix UI primitives, shadcn/ui components, Tailwind CSS
- **Functionality**: TanStack Query, React Hook Form, Framer Motion
- **Development**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Hot Reload**: Runtime error overlay and cartographer integration
- **Database Management**: Drizzle Kit for schema migrations

## Deployment Strategy

### Development Environment
- Uses tsx for running TypeScript directly
- Vite dev server with HMR for frontend development
- In-memory storage for rapid iteration
- Replit-specific development tools integration

### Production Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command
4. **Asset Serving**: Express serves static files and API routes

### Database Configuration
- **Development**: Can use in-memory storage or PostgreSQL
- **Production**: Requires `DATABASE_URL` environment variable
- **Migrations**: Schema changes managed through Drizzle Kit
- **Provider**: Configured for Neon Database but compatible with any PostgreSQL provider

### Environment Requirements
- Node.js environment with ESM support
- PostgreSQL database (Neon recommended)
- Environment variables: `DATABASE_URL`, `NODE_ENV`

The architecture is designed for easy scaling, with clear separation of concerns and modern development practices. The portfolio showcases professional web development capabilities while maintaining clean, maintainable code structure.
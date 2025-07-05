# Hackathon Hub Platform

A comprehensive platform for planning, hosting, and managing hackathons built with React, TypeScript, and Supabase.

## Features

- **Event Management**: Create and manage hackathon events
- **Team Formation**: Tools for creating and joining teams
- **Project Submissions**: Submit and showcase projects
- **Judging System**: Comprehensive judging and voting system
- **Real-time Communication**: Built-in messaging and forums
- **Analytics**: Track engagement and participation
- **Multi-theme Support**: Light/dark mode with multiple color schemes

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd hackathon-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   
   Run the migration file in your Supabase SQL editor:
   ```sql
   -- Copy and paste the contents of supabase/migrations/20250513132523_fierce_wood.sql
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

### Getting Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy the "Project URL" and "anon public" key
4. Paste these values in your `.env` file

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/         # Layout components (Header, Sidebar, Footer)
├── contexts/           # React contexts (Auth, Theme)
├── pages/              # Page components
│   └── static/         # Static pages (About, Pricing, etc.)
├── lib/                # Utilities and configurations
└── styles/             # Global styles and CSS

supabase/
└── migrations/         # Database migration files
```

## Key Features

### Authentication
- Email/password authentication via Supabase
- User profiles with role-based access
- Protected routes for authenticated users

### Theme System
- Light/dark mode support
- Multiple color schemes (Default, Ocean, Forest, Royal, Sunset)
- System theme detection
- Persistent theme preferences

### Event Management
- Create and configure hackathon events
- Event scheduling and timeline management
- Participant registration and management
- Real-time event status tracking

### Team Collaboration
- Team formation and management
- Skill-based team matching
- Team communication tools
- Project collaboration features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact support@hackathonhub.com or create an issue in the repository.
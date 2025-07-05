import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Home, 
  Calendar, 
  Award, 
  Users, 
  BarChart3, 
  Settings, 
  FolderKanban, 
  Gavel,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

interface SidebarLink {
  name: string;
  to: string;
  icon: React.ReactNode;
  roles?: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const { user } = useAuth();
  const location = useLocation();

  const links: SidebarLink[] = [
    { 
      name: 'Dashboard', 
      to: '/dashboard', 
      icon: <Home className="h-5 w-5" /> 
    },
    { 
      name: 'Events', 
      to: '/events', 
      icon: <Calendar className="h-5 w-5" /> 
    },
    { 
      name: 'Projects', 
      to: '/projects', 
      icon: <FolderKanban className="h-5 w-5" /> 
    },
    { 
      name: 'Teams', 
      to: '/teams', 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      name: 'Awards', 
      to: '/awards', 
      icon: <Award className="h-5 w-5" /> 
    },
    { 
      name: 'Judging', 
      to: '/judging', 
      icon: <Gavel className="h-5 w-5" />,
      roles: ['admin', 'organizer', 'judge']
    },
    { 
      name: 'Analytics', 
      to: '/analytics', 
      icon: <BarChart3 className="h-5 w-5" />,
      roles: ['admin', 'organizer', 'sponsor']
    },
    { 
      name: 'Settings', 
      to: '/settings', 
      icon: <Settings className="h-5 w-5" /> 
    },
  ];

  // Filter links based on user role
  const filteredLinks = links.filter(link => 
    !link.roles || link.roles.includes(user?.role || '')
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 md:hidden" 
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--card-bg)] shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0 border-r border-gray-200 dark:border-gray-700 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-600 font-bold text-lg">Hackathon Hub</span>
          </Link>
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" 
            onClick={closeSidebar}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-1">
            {filteredLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={closeSidebar}
                >
                  <span className={`mr-3 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'}`}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
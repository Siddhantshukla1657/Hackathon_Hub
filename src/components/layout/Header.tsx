import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, Bell, User, ChevronDown, Settings, LogOut, Search } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, profile, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setProfileDropdownOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-[var(--card-bg)] shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {isAuthenticated && (
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden transition-colors"
                onClick={toggleSidebar}
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-primary-600 font-bold text-2xl">Hackathon Hub</span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-[var(--card-bg)] text-[var(--primary-text)] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <Bell className="h-6 w-6" />
                </button>
                
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center space-x-2"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  >
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                      {profile?.avatar_url ? (
                        <img src={profile.avatar_url} alt={profile.full_name || ''} className="h-full w-full object-cover" />
                      ) : (
                        <User className="h-full w-full p-1 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-[var(--primary-text)]">{profile?.full_name}</span>
                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  
                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-[var(--card-bg)] rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
                      <Link 
                        to="/profile" 
                        className="flex items-center px-4 py-2 text-sm text-[var(--primary-text)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Your Profile
                      </Link>
                      <Link 
                        to="/settings" 
                        className="flex items-center px-4 py-2 text-sm text-[var(--primary-text)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button 
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-[var(--primary-text)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors">
                  Log in
                </Link>
                <Link to="/register" className="btn btn-primary text-sm">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
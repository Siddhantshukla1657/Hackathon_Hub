import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { User, Lock, Bell, Globe, Palette, Shield, Mail, CreditCard, Sun, Moon, Monitor } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = React.useState('profile');
  const { theme, colorScheme, setTheme, setColorScheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  const colorSchemes = [
    { id: 'default', name: 'Default', primaryColor: 'bg-primary-500', secondaryColor: 'bg-secondary-500' },
    { id: 'blue', name: 'Ocean', primaryColor: 'bg-blue-500', secondaryColor: 'bg-cyan-500' },
    { id: 'green', name: 'Forest', primaryColor: 'bg-emerald-500', secondaryColor: 'bg-green-500' },
    { id: 'purple', name: 'Royal', primaryColor: 'bg-purple-500', secondaryColor: 'bg-violet-500' },
    { id: 'orange', name: 'Sunset', primaryColor: 'bg-orange-500', secondaryColor: 'bg-amber-500' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="h-5 w-5 inline-block mr-2" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'security'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Lock className="h-5 w-5 inline-block mr-2" />
              Security
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'notifications'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Bell className="h-5 w-5 inline-block mr-2" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'appearance'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Palette className="h-5 w-5 inline-block mr-2" />
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Shield className="h-5 w-5 inline-block mr-2" />
              Privacy
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Tell us about yourself"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Picture</h3>
                <div className="flex items-center space-x-6">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <button className="btn btn-outline mb-2">
                      Change Photo
                    </button>
                    <p className="text-xs text-gray-500">
                      JPG, GIF or PNG. Max size of 2MB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <button className="btn btn-outline">
                    Enable 2FA
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Event Updates</p>
                      <p className="text-sm text-gray-500">Get notified about event changes and announcements</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Team Activity</p>
                      <p className="text-sm text-gray-500">Receive updates about your team's activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Mode</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-4 border-2 rounded-lg hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      theme === 'light' ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center h-20 bg-white rounded mb-2 border border-gray-200">
                      <Sun className="h-8 w-8 text-warning-500" />
                    </div>
                    <p className="text-sm font-medium text-center">Light</p>
                  </button>

                  <button
                    onClick={() => handleThemeChange('dark')}
                    className={`p-4 border-2 rounded-lg hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      theme === 'dark' ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center h-20 bg-gray-900 rounded mb-2">
                      <Moon className="h-8 w-8 text-gray-100" />
                    </div>
                    <p className="text-sm font-medium text-center">Dark</p>
                  </button>

                  <button
                    onClick={() => handleThemeChange('system')}
                    className={`p-4 border-2 rounded-lg hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      theme === 'system' ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center h-20 bg-gradient-to-b from-white to-gray-900 rounded mb-2">
                      <Monitor className="h-8 w-8 text-primary-500" />
                    </div>
                    <p className="text-sm font-medium text-center">System</p>
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Choose how Hackathon Hub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Color Scheme</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => setColorScheme(scheme.id as any)}
                      className={`p-4 border-2 rounded-lg hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                        colorScheme === scheme.id ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <div className="h-12 rounded-md mb-2 overflow-hidden">
                        <div className={`h-6 ${scheme.primaryColor}`}></div>
                        <div className={`h-6 ${scheme.secondaryColor}`}></div>
                      </div>
                      <p className="text-sm font-medium text-center">{scheme.name}</p>
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Choose a color scheme that matches your style. Each scheme includes a carefully selected palette of complementary colors.
                </p>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-gray-500">Control who can see your profile information</p>
                    </div>
                    <select className="form-input">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Team Only</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
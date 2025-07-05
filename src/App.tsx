import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import EnvironmentCheck from './components/common/EnvironmentCheck';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import HostEventPage from './pages/HostEventPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import JudgingPage from './pages/JudgingPage';
import ProfilePage from './pages/ProfilePage';
import TeamsPage from './pages/TeamsPage';
import AwardsPage from './pages/AwardsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

// Static Pages
import Features from './pages/static/Features';
import Pricing from './pages/static/Pricing';
import CaseStudies from './pages/static/CaseStudies';
import Testimonials from './pages/static/Testimonials';
import HelpCenter from './pages/static/HelpCenter';
import Documentation from './pages/static/Documentation';
import ContactUs from './pages/static/ContactUs';
import Status from './pages/static/Status';
import Legal from './pages/static/Legal';
import PrivacyPolicy from './pages/static/legal/PrivacyPolicy';
import TermsOfService from './pages/static/legal/TermsOfService';
import CookiePolicy from './pages/static/legal/CookiePolicy';

import './App.css';
import { useAuth } from './contexts/AuthContext';

// PrivateRoute component needs to be inside AuthProvider to use useAuth
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// App Routes component that has access to AuthProvider
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/events" element={<PrivateRoute><EventsPage /></PrivateRoute>} />
          <Route path="/events/:id" element={<PrivateRoute><EventDetailsPage /></PrivateRoute>} />
          <Route path="/events/host" element={<PrivateRoute><HostEventPage /></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
          <Route path="/projects/:id" element={<PrivateRoute><ProjectDetailsPage /></PrivateRoute>} />
          <Route path="/judging" element={<PrivateRoute><JudgingPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/teams" element={<PrivateRoute><TeamsPage /></PrivateRoute>} />
          <Route path="/awards" element={<PrivateRoute><AwardsPage /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />

          {/* Static Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/status" element={<Status />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

function App() {
  // Ultra-simple debug without state
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🔧 Ultra Debug Mode</h1>
      <p>If you see this, React is working fine.</p>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#dbeafe', 
        marginTop: '20px',
        border: '2px solid #3b82f6'
      }}>
        <h2 style={{ color: '#1e40af' }}>Step 2 Test - Inline Styles</h2>
        <p style={{ color: '#2563eb' }}>This should have a blue background if CSS works.</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => {
            console.log('Button clicked!');
            alert('JavaScript is working!');
          }}
          style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            padding: '10px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Test JavaScript
        </button>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fee2e2' }}>
        <p><strong>Debug Info:</strong></p>
        <p>• React: Working if you see this</p>
        <p>• CSS: Working if box above is blue</p>
        <p>• JS: Click button to test</p>
      </div>
    </div>
  );
}

export default App;
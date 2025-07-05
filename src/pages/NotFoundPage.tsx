import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="rounded-full bg-error-100 p-4 mb-6">
        <AlertCircle className="h-12 w-12 text-error-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="space-x-4">
        <Link to="/" className="btn btn-primary flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
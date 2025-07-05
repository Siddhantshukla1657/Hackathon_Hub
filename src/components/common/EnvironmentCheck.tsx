import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

const EnvironmentCheck: React.FC = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const hasValidConfig = supabaseUrl && 
    supabaseAnonKey && 
    supabaseUrl !== 'your_supabase_url_here' && 
    supabaseAnonKey !== 'your_supabase_anon_key_here' &&
    !supabaseUrl.includes('placeholder') &&
    supabaseUrl.includes('supabase.co') &&
    supabaseAnonKey.length > 20;

  // In production (Vercel), we assume credentials are properly configured
  // Only show the setup dialog in development when credentials are clearly missing
  if (hasValidConfig || import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-warning-100">
            <AlertTriangle className="h-6 w-6 text-warning-600" />
          </div>
          <h2 className="ml-3 text-lg font-semibold text-gray-900">
            Setup Required
          </h2>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            To use this application, you need to configure Supabase credentials.
          </p>
          
          <div className="bg-gray-50 rounded-md p-4 mb-4">
            <h3 className="font-medium text-gray-900 mb-2">Quick Setup:</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Create a <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Supabase account</a></li>
              <li>2. Create a new project</li>
              <li>3. Copy your project URL and anon key</li>
              <li>4. Create a <code className="bg-gray-200 px-1 rounded">.env</code> file in your project root</li>
              <li>5. Add your credentials to the <code className="bg-gray-200 px-1 rounded">.env</code> file</li>
            </ol>
          </div>
          
          <div className="bg-gray-900 rounded-md p-3 text-sm">
            <div className="text-gray-300 mb-1"># .env file content:</div>
            <div className="text-green-400">VITE_SUPABASE_URL=your_project_url</div>
            <div className="text-green-400">VITE_SUPABASE_ANON_KEY=your_anon_key</div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <a
            href="https://supabase.com/docs/guides/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center text-sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Documentation
          </a>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary text-sm"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentCheck;
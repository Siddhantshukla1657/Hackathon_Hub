import React from 'react';

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will be added here */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-gray-600">Projects will appear here once they are created.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
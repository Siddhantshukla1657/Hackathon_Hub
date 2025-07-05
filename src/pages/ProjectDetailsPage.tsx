import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card p-6">
        <h1 className="mb-6">Project Details</h1>
        <p className="text-gray-600">Project ID: {id}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
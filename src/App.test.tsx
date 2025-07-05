import React from 'react';

function TestApp() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>Hackathon Hub - Test Mode</h1>
      <p>If you can see this, React is working correctly!</p>
      <div style={{ 
        backgroundColor: '#3045FF', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        margin: '10px 0'
      }}>
        This is a test to verify the app loads properly.
      </div>
    </div>
  );
}

export default TestApp;

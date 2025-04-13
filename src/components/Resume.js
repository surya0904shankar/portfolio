import React from 'react';

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1>My Resume</h1>
        </div>
        
        <div className="resume-viewer">
          <a 
            href="/assets/Surya_2025_resume-1.pdf" 
            download 
            className="resume-download-link"
            title="Click to download resume"
          >
            <img 
              src="/assets/WhatsApp Image 2025-04-12 at 9.57.14 PM.jpeg"
              alt="Resume Preview"
              className="resume-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume; 
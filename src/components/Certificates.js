import React, { useState } from 'react';

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 10.02.16 PM.jpeg`
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Advanced course on data structures and algorithms with practical implementations",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.58.44 PM.jpeg`
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      description: "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.18 PM (1).jpeg`
    },
    {
      id: 4,
      title: "Python for Data Science",
      description: "Data analysis and visualization using Python, Pandas, NumPy, and Matplotlib",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.18 PM.jpeg`
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning algorithms, neural networks, and deep learning",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.17 PM (1).jpeg`
    },
    {
      id: 6,
      title: "DevOps Engineering",
      description: "CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.17 PM.jpeg`
    },
    {
      id: 7,
      title: "Cybersecurity Essentials",
      description: "Network security, cryptography, and ethical hacking fundamentals",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.16 PM.jpeg`
    },
    {
      id: 8,
      title: "Mobile App Development",
      description: "Cross-platform mobile development using React Native and Flutter",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.15 PM (1).jpeg`
    },
    {
      id: 9,
      title: "Database Management",
      description: "SQL, NoSQL databases, and database design principles",
      image: `${process.env.PUBLIC_URL}/assets/certificates/WhatsApp Image 2025-04-12 at 9.57.15 PM.jpeg`
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certificates-container">
      <div className="certificates-content">
        <div className="certificates-header">
          <h1>My Certificates</h1>
        </div>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="certificate-card"
              onClick={() => handleImageClick(cert.image)}
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                className="certificate-image"
              />
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
              <div className="certificate-overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleClose}>×</button>
              <img src={selectedImage} alt="Certificate" className="modal-image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificates; 
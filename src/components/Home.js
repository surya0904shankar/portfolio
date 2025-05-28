import React from 'react';

function Home() {
  const skills = [
    { name: 'HTML', logo: '/assets/skills/html5.png' },
    { name: 'CSS', logo: '/assets/skills/css3.png' },
    { name: 'JavaScript', logo: '/assets/skills/javascript.png' },
    { name: 'TypeScript', logo: '/assets/skills/typescript.png' },
    { name: 'React', logo: '/assets/skills/react.png' },
    { name: 'Node.js', logo: '/assets/skills/nodejs.png' },
    { name: 'Java', logo: '/assets/skills/java.png' },
    { name: 'Spring', logo: '/assets/skills/spring.png' },
    { name: 'C++', logo: '/assets/skills/cpp.png' },
    { name: 'Python', logo: '/assets/skills/python.png' },
    { name: 'Git', logo: '/assets/skills/git.png' },
    { name: 'SQL', logo: '/assets/skills/sql.png' },
    { name: 'REST API', logo: '/assets/skills/api.png' }
  ];

  return (
    <div className="home-container">
      <h1 className="welcome-heading">Welcome to My Portfolio</h1>
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-text">
            <p>
              I'm S Surya, a Computer Science undergraduate at SRM Institute of Science and Technology, specializing in Artificial Intelligence and Machine Learning. I'm passionate about leveraging technology to solve real-world problems and enjoy exploring domains like AI, systems design, and full-stack development.
            </p>
            <p>
              I'm proficient in Java, Python, SQL, HTML/CSS, JavaScript, and work with frameworks and libraries such as Spring and React. Outside the classroom, I'm an active member of Codezilla, SRM's tech club, where I organize technical events, host quizzes, and mentor fellow students in programming and problem-solving.
            </p>
          </div>
          <div className="profile-image-container">
            <img 
             src={`${process.env.PUBLIC_URL}/assets/profile-photo.jpeg`}
              alt="Profile Photo" 
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="skill-icon">
                <img src={skill.logo} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 

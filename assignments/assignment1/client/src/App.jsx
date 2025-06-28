import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const App = () => {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview").then(res => res.json()).then(setOverview);
    fetch("http://localhost:8000/getEdu").then(res => res.json()).then(setEducation);
    fetch("http://localhost:8000/getExp").then(res => res.json()).then(setExperience);
  }, []);

  return (
    <Container className="py-4">
      <Card className="mb-4 p-3">
        <h2 style={{ fontSize: '24px' }}>{overview.name}</h2>
        <p style={{ fontSize: '16px' }}>{overview.summary}</p>
      </Card>

      <Card className="mb-4 p-3">
        <h3 style={{ fontSize: '18px' }}>Education</h3>
        {education.map((edu, index) => (
          <div key={index} style={{ padding: '10px 0' }}>
            <strong>{edu.degree}</strong><br />
            {edu.institution} ({edu.year})
          </div>
        ))}
      </Card>

      <Card className="p-3">
        <h3 style={{ fontSize: '18px' }}>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index} style={{ padding: '10px 0' }}>
            <strong>{exp.role}</strong><br />
            {exp.company} ({exp.years})
          </div>
        ))}
      </Card>
    </Container>
  );
};

export default App;

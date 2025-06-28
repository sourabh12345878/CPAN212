// assignment1/server/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

// Resume Data
const overview = {
  name: "Sourabh Kumar",
  title: "Full-Stack Developer",
  summary: "A passionate full-stack developer eager to contribute to team success through hard work, continuous learning, and hands-on development in modern web technologies."
};

const education = [
  {
    degree: "DCA – Diploma in Computer Application",
    institution: "Indian Institute of Computer Technology",
    year: "2023"
  },
  {
    degree: "Diploma in Computer Programming",
    institution: "Humber Polytechnic",
    year: "2023 - Present"
  },
  {
    degree: "High School Diploma",
    institution: "DAV Public School",
    year: "2022 - 2023"
  }
];

const experience = [
  {
    role: "Frontend Developer",
    company: "WebTech Inc.",
    years: "2023 - Present",
    description: "Built user interfaces using React, managed state with Redux, and integrated APIs for dynamic data."
  },

];

// Endpoints
app.get('/getOverview', (req, res) => res.json(overview));
app.get('/getEdu', (req, res) => res.json(education));
app.get('/getExp', (req, res) => res.json(experience));

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

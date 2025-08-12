import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Recipe Server App',
    description: 'A Node.js + Express + MongoDB backend for managing recipes with full CRUD operations.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    githubLink: 'https://github.com/sourabh12345878/CPAN212/tree/main/assignments/assignment2',
    demoLink: '',
    image: '/projects/recipe-server.jpg',
  },
  {
    title: 'Portfolio (React + Express)',
    description: 'Online resume and portfolio with API backend to serve education, experience, and overview data.',
    technologies: ['React', 'Express', 'REST API'],
    githubLink: 'https://github.com/sourabh12345878/CPAN212/tree/main/assignments/assignment1',
    demoLink: '',
    image: '/projects/portfolio.jpg',
  },
  {
    title: 'Node.js Bookstore Server',
    description: 'A Node.js HTTP server serving bookstore pages with holiday utilities using Lodash.',
    technologies: ['Node.js', 'Lodash', 'HTML'],
    githubLink: 'https://github.com/sourabh12345878/CPAN212/tree/main/labs/lab01',
    demoLink: '',
    image: '/projects/bookstore-server.jpg',
  },
  {
    title: 'Express Basic Routes',
    description: 'Basic Express server with routes for greetings, adding numbers, and a calculator API.',
    technologies: ['Node.js', 'Express'],
    githubLink: 'https://github.com/sourabh12345878/CPAN212/tree/main/labs/lab02',
    demoLink: '',
    image: '/projects/basic-express.jpg',
  },
  {
    title: 'Image Upload Gallery',
    description: 'Full-stack React and Express app for uploading, storing, and displaying images. Includes dog API integration.',
    technologies: ['React', 'Express', 'REST API'],
    githubLink: 'https://github.com/sourabh12345878/CPAN212/tree/main/labs/lab03',
    demoLink: '',
    image: '/projects/image-upload.jpg',
  }
];

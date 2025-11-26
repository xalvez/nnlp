import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://yourapp.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      category: 'frontend',
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://yourapp.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current weather and forecasts with beautiful data visualizations and location-based services.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      category: 'frontend',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://yourapp.com',
      featured: false
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with modern backend practices.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Swagger'],
      category: 'backend',
      githubUrl: 'https://github.com/yourusername/rest-api',
      liveUrl: 'https://yourapp.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode, and optimized performance. Built with React and modern CSS.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
      category: 'frontend',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourapp.com',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and emoji support. Features socket.io for real-time communication.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      githubUrl: 'https://github.com/yourusername/chat-app',
      liveUrl: 'https://yourapp.com',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills and experience
          </p>

          {/* Filter Buttons */}
          <motion.div 
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FaCode /> Featured
                  </div>
                )}
                
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>Interested in seeing more of my work?</p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
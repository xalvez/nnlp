import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const stats = [
    { number: '2+', text: 'Years Experience' },
    { number: '50+', text: 'Projects Completed' },
    { number: '30+', text: 'Happy Clients' },
    { number: '10+', text: 'Technologies' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My journey in web development started 2 years ago, and since then I've been constantly 
                learning and adapting to new technologies and best practices.
              </motion.p>
              <motion.div
                className="stats"
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <h3>{stat.number}</h3>
                    <p>{stat.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="image-container">
                <div className="profile-image"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
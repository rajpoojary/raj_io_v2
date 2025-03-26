import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArchitectureExplorer = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const architecture = {
    layers: [
      {
        name: 'Frontend Layer',
        components: [
          {
            name: 'React/Next.js UI',
            description: 'Modern, responsive user interface built with React and Next.js',
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
          },
          {
            name: 'State Management',
            description: 'Client-side state management and data flow',
            technologies: ['Context API', 'Redux', 'Zustand']
          }
        ]
      },
      {
        name: 'API Layer',
        components: [
          {
            name: 'RESTful APIs',
            description: 'Backend APIs handling data operations and business logic',
            technologies: ['Node.js', 'Express', 'GraphQL']
          },
          {
            name: 'Authentication',
            description: 'Secure user authentication and authorization',
            technologies: ['JWT', 'OAuth', 'Session Management']
          }
        ]
      },
      {
        name: 'Data Layer',
        components: [
          {
            name: 'Database',
            description: 'Data storage and management',
            technologies: ['MongoDB', 'PostgreSQL', 'Redis']
          },
          {
            name: 'Caching',
            description: 'Performance optimization through caching',
            technologies: ['Redis', 'CDN', 'Browser Cache']
          }
        ]
      },
      {
        name: 'Infrastructure Layer',
        components: [
          {
            name: 'Cloud Services',
            description: 'Cloud infrastructure and deployment',
            technologies: ['AWS', 'Vercel', 'Docker']
          },
          {
            name: 'Monitoring',
            description: 'System monitoring and logging',
            technologies: ['Prometheus', 'Grafana', 'ELK Stack']
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-light dark:bg-dark p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-light">
          Technical Architecture Explorer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecture.layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300
                  ${selectedLayer === layer.name 
                    ? 'border-primary dark:border-primaryDark bg-primary/10 dark:bg-primaryDark/10' 
                    : 'border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primaryDark'}`}
                onClick={() => setSelectedLayer(selectedLayer === layer.name ? null : layer.name)}
              >
                <h3 className="text-xl font-semibold mb-4 dark:text-light">{layer.name}</h3>
                <div className="space-y-4">
                  {layer.components.map((component) => (
                    <motion.div
                      key={component.name}
                      className="p-4 rounded-md bg-white dark:bg-gray-800 shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredComponent(component)}
                      onHoverEnd={() => setHoveredComponent(null)}
                    >
                      <h4 className="font-medium dark:text-light">{component.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {component.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {component.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredComponent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-light">
                {hoveredComponent.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {hoveredComponent.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {hoveredComponent.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ArchitectureExplorer; 
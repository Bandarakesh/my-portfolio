import { motion } from 'framer-motion';
const Projects = () => {
    const projects = [
      {
        title: "Portfolio Website",
        description: "A modern single-page React portfolio built with Vite and Tailwind CSS.",
        link: "https://bandarakesh.github.io/my-portfolio/",
      },
      {
        title: "Weather App",
        description: "Fetches real-time weather using a public API with a clean UI.",
        link: "#",
      },
    ];
  
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center bg-black text-white text-center">
        <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 font-medium" target="_blank">
                View Project →
              </a>
            </div>
            
          ))}
        </div>
        </motion.div>
      </section>
    );
  };
  
  export default Projects;
  
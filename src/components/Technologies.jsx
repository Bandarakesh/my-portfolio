import { motion } from 'framer-motion';
const Technologies = () => {
    const techStack = ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"];
  
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center bg-black text-white text-center">
        <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-medium shadow hover:shadow-md transition"
            >
              {tech}
            </span>
          ))}
        </div>
        </motion.div>
      </section>
    );
  };
  
  export default Technologies;
  
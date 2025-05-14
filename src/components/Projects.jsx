// import { motion } from 'framer-motion';

// const Projects = () => {
//   const projects = [
//     {
//       title: "AI-Enhanced Clinical Decision Support System",
//       description: [
//         " Processed 100+ real-time patient vitals/sec using FastAPI, reducing sepsis prediction latency by 40%.",
//         " Built a RAG-based chatbot using LangChain, trained on medical PDFs & ICU data (Pinecone vectors), improving answer accuracy by 35%.",
//         " Engineered real-time SMS alerts (<2 sec latency) and dashboards, improving ICU intervention efficiency by 25%.",
//         " RAG Pipeline: Ingested 1000+ medical records (PDFs/CSV) via OpenAI embeddings.",
//       ],
//       link: "https://github.com/Bandarakesh/sepsis_prediction_system",
//     },
//     {
//       title: "CampusConnect (Django Web App)",
//       description: [
//         " Developed a scalable backend with JWT authentication supporting 100+ concurrent users.",
//         " Reduced API response time by 30% via PostgreSQL indexing and query optimization.",
//         " Implemented Agile methodologies (sprints, Jira) for iterative feature delivery.",
//       ],
//       link: "https://github.com/Bandarakesh/django_blog",
//     },
//     {
//       title:"node-time-api-servers",
//       description: [
//         " Built custom Node.js servers from scratch using core HTTP modules to handle real-time time retrieval and dynamic JSON API responses.",
//         " Demonstrated strong backend fundamentals including request routing, URL parsing, and JSON data handling without external frameworks.",
//         " Showcased clean, modular code design and low-level server architecture to highlight deep understanding of server-side development.",
//       ],
//       link: "https://github.com/Bandarakesh/js_project"
//     },
//     {
//       title: "Brain Tumor Detection Using Deep Learning",
//       description: [
//         " Built a CNN model for MRI scan classification with 92% recall on imbalanced datasets.",
//         " Designed an image preprocessing pipeline and tuned hyperparameters for low-latency deployment.",
//       ],
//       link: "#",
//     },
//     {
//       title: "Portfolio Website",
//       description: ["A modern single-page React portfolio built with Vite and Tailwind CSS."],
//       link: "https://bandarakesh.github.io/my-portfolio/",
//     },
//     {
//       title: "Weather App",
//       description: ["Fetches real-time weather using a public API with a clean UI."],
//       link: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center bg-black text-white text-center">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center p-6"
//       >
//         <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="p-6 shadow hover:shadow-lg transition mb-12"> {/* Removed border */}
//               <h3 className="text-2xl font-semibold mb-4 bg-gray-800 text-white px-4 py-2 rounded">{project.title}</h3>
//               <ul className="list-disc list-inside text-left mb-4">
//                 {project.description.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//               <a href={project.link} className="text-blue-600 font-medium" target="_blank" rel="noopener noreferrer">
//                 Github 🔗 
//               </a>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI-Enhanced Clinical Decision Support System",
      description: [
        "Processed 100+ real-time patient vitals/sec using FastAPI, reducing sepsis prediction latency by 40%.",
        "Built a RAG-based chatbot using LangChain, trained on medical PDFs & ICU data (Pinecone vectors), improving answer accuracy by 35%.",
        "Engineered real-time SMS alerts (<2 sec latency) and dashboards, improving ICU intervention efficiency by 25%.",
        "RAG Pipeline: Ingested 1000+ medical records (PDFs/CSV) via OpenAI embeddings.",
      ],
      link: "https://github.com/Bandarakesh/sepsis_prediction_system",
    },
    {
      title: "CampusConnect (Django Web App)",
      description: [
        "Developed a scalable backend with JWT authentication supporting 100+ concurrent users.",
        "Reduced API response time by 30% via PostgreSQL indexing and query optimization.",
        "Implemented Agile methodologies (sprints, Jira) for iterative feature delivery.",
      ],
      link: "https://github.com/Bandarakesh/django_blog",
    },
    {
      title: "node-time-api-servers",
      description: [
        "Built custom Node.js servers from scratch using core HTTP modules to handle real-time time retrieval and dynamic JSON API responses.",
        "Demonstrated strong backend fundamentals including request routing, URL parsing, and JSON data handling without external frameworks.",
        "Showcased clean, modular code design and low-level server architecture to highlight deep understanding of server-side development.",
      ],
      link: "https://github.com/Bandarakesh/js_project"
    },
    {
      title: "Brain Tumor Detection Using Deep Learning",
      description: [
        "Built a CNN model for MRI scan classification with 92% recall on imbalanced datasets.",
        "Designed an image preprocessing pipeline and tuned hyperparameters for low-latency deployment.",
      ],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: ["A modern single-page React portfolio built with Vite and Tailwind CSS."],
      link: "https://bandarakesh.github.io/my-portfolio/",
    },
    {
      title: "Weather App",
      description: ["Fetches real-time weather using a public API with a clean UI."],
      link: "#",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black text-white py-20 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Projects
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={projectItem}
              className="group p-6 hover:bg-gray-900/50 transition-all duration-300"
            >
              {/* Title with subtle highlight */}
              <motion.h3 
                className="text-xl font-semibold mb-6 text-gray-50 relative"
              >
                <span className="relative z-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></span>
              </motion.h3>
              
              <motion.ul 
                className="space-y-3 mb-6 pl-2"
                variants={container}
              >
                {project.description.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={listItem}
                    className="text-gray-300 flex items-start font-light leading-relaxed"
                    transition={{ delay: 0.05 * idx }}
                  >
                    <span className="text-blue-400/80 mr-3 mt-1">▹</span>
                    <span className="text-gray-300/90">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-mono transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>View on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
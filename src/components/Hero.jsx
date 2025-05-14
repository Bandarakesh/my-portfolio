import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Rakesh Banda</h1>
        <p className="text-xl max-w-xl mx-auto">Results-driven Software Engineer with a master's in computer science and hands-on experience in Python, AI/ML, and automation. Proven ability to design and deploy AI-driven solutions (e.g., RAG chatbots, NLP pipelines) to optimize workflows. Skilled in Agile methodologies, cross-functional collaboration, and developing scalable systems for enterprise environments</p>
      </motion.div>
    </section>
  );
}

  

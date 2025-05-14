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
        <p className="text-xl max-w-xl mx-auto">A passionate developer building fast, beautiful web apps with React, Tailwind, and love for animations.</p>
      </motion.div>
    </section>
  );
}

  

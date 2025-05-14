import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-4 text-lg">
          Feel free to reach out to me via email or LinkedIn.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="mailto:Bandarakesh875@gmail.com"
            className="underline hover:text-gray-300"
          >
            Bandarakesh875@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/Bandarakesh875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline hover:text-gray-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

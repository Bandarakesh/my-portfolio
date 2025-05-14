import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = {
    "Programming Languages": ["Python (Pandas, NumPy)", "Java", "C++", "SQL"],
    "AI/ML": ["Deep Learning", "NLP", "RAG", "LangChain", "LLMs (OpenAI)"],
    "Backend Development": ["Django", "FastAPI", "REST APIs", "Microservices Architecture"],
    "Databases": ["PostgreSQL", "SQLite (Query Optimization, Indexing)"],
    "Tools & Platforms": ["Git", "GitHub", "AWS (Basic)", "Agile/Jira", "VS Code"],
    "Data Processing": ["Large-scale data ingestion (100+ data points/sec)", "Real-time analytics"],
  };

  return (
    <section id="technologies" className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center p-6 max-w-6xl"
  >
    <h2 className="text-4xl font-bold mb-12 text-center">Technologies</h2>
    <div>
      {Object.entries(techCategories).map(([category, items], index) => (
        <div key={index} className="text-left mb-16"> {/* Added margin-bottom */}
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <p className="text-sm leading-relaxed"> {/* Added paragraph for comma-separated list */}
            {items.join(", ")} {/* Join items with commas */}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
</section>
  );
};

export default Technologies;
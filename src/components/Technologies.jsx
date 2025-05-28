import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = {
    "AI/ML & GenAI": {
      "LLMs & Frameworks": ["OpenAI GPT", "LangChain", "RAG", "Vector Databases (Pinecone)", "HuggingFace"],
      "ML/DL": ["PyTorch", "Scikit-learn", "Hyperparameter Tuning", "CNN"],
      "NLP": ["Text Embeddings", "Transformer Models", "Chatbots"]
    },
    "Backend & Data Engineering": {
      "Languages": ["Python (Pandas, NumPy)", "SQL", "Java"],
      "APIs/Cloud": ["FastAPI", "Django", "REST", "AWS (Basic)", "Microservices"],
      "Databases": ["PostgreSQL", "SQLite (Query Optimization, Indexing)"]
    },
    "Tools": ["Git", "GitHub", "Jira", "VS Code", "Agile/Scrum"]
  };

  return (
    <section id="technologies" className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Technologies</h2>
        
        {/* AI/ML Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">AI/ML & GenAI</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techCategories["AI/ML & GenAI"]).map(([subcategory, items], index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-300">{subcategory}</h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-300">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div className="space-y-12">
          {Object.entries(techCategories).filter(([category]) => category !== "AI/ML & GenAI").map(([category, subitems], index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6 text-gray-300">{category}</h3>
              {Array.isArray(subitems) ? (
                <div className="flex flex-wrap gap-4">
                  {subitems.map((item, i) => (
                    <span key={i} className="bg-gray-800 px-4 py-2 rounded-full text-sm">• {item}</span>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(subitems).map(([subcategory, items], i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-gray-400">{subcategory}</h4>
                      <ul className="space-y-1">
                        {items.map((item, j) => (
                          <li key={j} className="text-sm text-gray-300">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
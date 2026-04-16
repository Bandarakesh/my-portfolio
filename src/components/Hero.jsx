import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 text-white py-20">
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="px-6 max-w-5xl w-full"
      >
        {/* Title & Headline */}
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
            Rakesh Banda
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium">
            Machine Learning Engineer | LLM Optimization & Agentic Systems
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-left text-base md:text-lg text-blue-50 leading-relaxed">
          
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-3">About Me</h2>
            <p>
              Hey, I'm Rakesh. I’m a developer who’s spent the last few years obsessed with how we can move beyond "chatbots" and actually build software that thinks. I’ve got a Master’s in Computer Science, but I find I learn the most when I’m breaking things in a code editor. I love the challenge of taking a raw, unpredictable model and turning it into a reliable system that can handle messy, real-world data.
            </p>
          </div>

          {/* Grid Layout for Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
            
            {/* Column 1: What I'm Building */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-400 pb-2 inline-block">
                What I’m Building
              </h3>
              <ul className="space-y-4 list-disc list-inside marker:text-blue-300">
                <li>
                  <span className="font-semibold text-white">Agentic Workflows:</span> Multi-agent systems that reason, self-correct, and maintain state while working through complex, multi-step tasks.
                </li>
                <li>
                  <span className="font-semibold text-white">Reliable RAG Pipelines:</span> Building data-centric retrieval systems that prioritize structured parsing and high-fidelity context.
                </li>
                <li>
                  <span className="font-semibold text-white">Observability:</span> Using tracing and evaluation tools like LangSmith to turn "black box" agent behavior into predictable, debuggable engineering.
                </li>
              </ul>
            </div>

            {/* Column 2: Current Focus & Efficiency */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-400 pb-2 inline-block">
                Current Focus: Optimization
              </h3>
              <ul className="space-y-4 list-disc list-inside marker:text-blue-300">
                <li>
                  <span className="font-semibold text-white">Quantization:</span> Diving deep into model compression and optimization to make LLMs lightweight and high-performing.
                </li>
                <li>
                  <span className="font-semibold text-white">Local Hosting:</span> Exploring how to host optimized models on local hardware (macOS) to eliminate token costs and improve privacy.
                </li>
                <li>
                  <span className="font-semibold text-white">Scalable Infrastructure:</span> Building high-concurrency backends with FastAPI and deploying containerized services via GCP.
                </li>
              </ul>
            </div>

          </div>

          {/* Engineering Mindset Section */}
          <div className="pt-6 max-w-3xl">
            <h3 className="text-xl font-bold text-white mb-3">The Engineering Mindset</h3>
            <p className="italic text-blue-100">
              "I prioritize engineering over hype. If a system doesn't save time or solve a concrete problem, it’s just a shiny toy. I build for utility, reliability, and performance."
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
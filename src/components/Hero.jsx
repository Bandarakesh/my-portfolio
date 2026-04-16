import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="px-6 max-w-4xl"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
          AI & Machine Learning Engineer
        </h1>

        <p className="text-center text-blue-100 mb-8 text-lg">
          LLM Systems, Optimization & Agentic Architectures
        </p>

        {/* Main Content */}
        <div className="space-y-6 text-base md:text-lg text-blue-50 leading-relaxed">
          
          <p>
            I am an AI & Machine Learning Engineer with a Master’s degree in Computer Science, 
            focused on building intelligent systems that operate reliably in real-world environments. 
            My work sits at the intersection of LLM orchestration, system architecture, and model 
            optimization, enabling scalable and cost-efficient AI solutions.
          </p>

          <p>
            I specialize in designing stateful, multi-agent systems that transform unstructured data 
            into autonomous workflows. Alongside system design, I am deeply interested in LLM 
            optimization and efficient inference, working toward reducing latency and cost while 
            maintaining high-quality outputs.
          </p>

          <p>
            My approach combines deep technical execution with production awareness — I build systems 
            that are not only intelligent, but also observable, scalable, and resource-efficient.
          </p>

          {/* Core Expertise */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
              Core Expertise
            </h2>

            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-white">
                  Agentic Orchestration & System Design:
                </span>{" "}
                Designing stateful, multi-agent workflows that enable LLMs to reason, iterate, and 
                execute complex tasks autonomously.
              </li>

              <li>
                <span className="font-semibold text-white">
                  LLM Optimization & Efficient Inference:
                </span>{" "}
                Focused on model efficiency through quantization and optimized inference, enabling 
                high-performance systems on local and constrained environments.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Production Observability & Reliability:
                </span>{" "}
                Implementing tracing, debugging, and evaluation pipelines to ensure system 
                reliability and performance in production.
              </li>

              <li>
                <span className="font-semibold text-white">
                  AI Infrastructure & Deployment:
                </span>{" "}
                Building scalable backends with FastAPI and deploying containerized AI systems on 
                cloud platforms like GCP.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Data-Centric AI & RAG Systems:
                </span>{" "}
                Developing advanced RAG pipelines focused on structured parsing and context-aware 
                retrieval.
              </li>
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
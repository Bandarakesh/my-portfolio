import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="px-6 max-w-5xl w-full"
      >
        {/* Title & Headline */}
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight tracking-tight">
            Rakesh Banda
          </h1>
          <p className="text-xl md:text-2xl text-indigo-400 font-semibold">
            AI & Machine Learning Engineer
          </p>
          <p className="text-lg text-slate-400 mt-1">
            Specializing in Multi-Agent Systems, LLM Optimization & Production Observability
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-left text-base md:text-lg text-slate-300 leading-relaxed">
          
          {/* About Me Section */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide text-indigo-300 uppercase text-sm">
              About Me
            </h2>
            <p className="mb-4">
              I am an AI and Machine Learning Engineer with a Master’s degree in Computer Science, dedicated to bridging the gap between cutting-edge AI research and predictable, production-grade software. I specialize in moving beyond brittle, prompt-dependent "chatbots" to architect stateful, multi-agent workflows that can autonomously reason, self-correct, and execute complex, multi-step tasks.
            </p>
            <p>
              My engineering philosophy treats LLMs not as mysterious black boxes, but as components within a highly observable, scalable ecosystem. Whether I am optimizing model kernels for local inference on Apple Silicon, designing robust data-centric RAG pipelines, or engineering high-concurrency backends, I build with a strict focus on utility, performance, and deterministic engineering over hype.
            </p>
          </div>

          {/* Grid Layout for Technical Deep-Dives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
            
            {/* Column 1: Core Competencies */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-indigo-500/30 pb-2">
                Systems & Architecture
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <strong className="text-indigo-300">Agentic Orchestration:</strong> Designing complex, deterministic multi-agent graphs that maintain strict state boundaries and execute reliable long-horizon tasks.
                </li>
                <li>
                  <strong className="text-indigo-300">Production Observability:</strong> Embedding rigorous evaluation frameworks and transaction tracing into AI applications to turn non-deterministic behavior into debuggable engineering.
                </li>
                <li>
                  <strong className="text-indigo-300">Data-Centric RAG:</strong> Engineering high-fidelity retrieval systems using advanced parsing, metadata structuring, and robust semantic search pipelines.
                </li>
              </ul>
            </div>

            {/* Column 2: Current Focus & Efficiency */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-indigo-500/30 pb-2">
                Optimization & Scale
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <strong className="text-indigo-300">Model Quantization:</strong> Diving into low-level compression techniques to shrink memory footprints and maximize throughput for edge deployment.
                </li>
                <li>
                  <strong className="text-indigo-300">Local Inference:</strong> Tuning weights and optimizing execution kernels to host local models securely on consumer-grade hardware, dropping token costs to zero.
                </li>
                <li>
                  <strong className="text-indigo-300">Scalable Backends:</strong> Building high-concurrency architectures with FastAPI, Docker, and cloud-native services to support high-throughput AI workloads.
                </li>
              </ul>
            </div>

          </div>

          {/* Engineering Mindset Section */}
          <div className="pt-6 max-w-3xl border-l-2 border-indigo-500 pl-4">
            <h3 className="text-sm font-bold tracking-wider text-indigo-400 uppercase mb-1">The Engineering Commitment</h3>
            <p className="italic text-slate-400">
              "If an AI workflow doesn't deliver reliable utility, reduce operational overhead, or solve a concrete problem at scale, it is just a shiny toy. I build for reliability, efficiency, and real-world impact."
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
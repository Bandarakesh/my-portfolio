import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="px-6 max-w-4xl w-full"
      >
        {/* Title & Headline */}
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight tracking-tight">
            Rakesh Banda
          </h1>
          <p className="text-xl md:text-2xl text-indigo-400 font-semibold">
            AI & Machine Learning Engineer
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12 text-left text-base md:text-lg text-slate-300 leading-relaxed">
          
          {/* About Me Section */}
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-wider text-indigo-400 uppercase mb-3">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-slate-200 font-medium">
              I am an AI and Machine Learning Engineer with a Master’s degree in Computer Science. I focus on developing multi-agent systems, engineering robust backends, and optimizing open-source models for local infrastructure.
            </p>
          </div>

          {/* Core Interests Grid */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-indigo-400 uppercase mb-6">
              Core Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <span className="font-semibold text-white">LangGraph & Multi-Agent Systems</span>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <span className="font-semibold text-white">LangSmith & Production Observability</span>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <span className="font-semibold text-white">Model Quantization & Local Inference (macOS)</span>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <span className="font-semibold text-white">FastAPI, Docker & Cloud Deployment (GCP)</span>
              </div>

              <div className="col-span-1 md:col-span-2 bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <span className="font-semibold text-white">Data Pipelines (SQL, Snowflake, Apache Spark)</span>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
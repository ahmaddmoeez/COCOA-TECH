import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles, Cpu } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-chocolate-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-chocolate-600/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d2317_1px,transparent_1px),linear-gradient(to_bottom,#3d2317_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-chocolate-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-chocolate-300">Next-Gen Architecture</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 tracking-tighter">
              Crafting <br />
              <span className="text-gradient italic">Digital Silk</span> <br />
              in Cocoa.
            </h1>

            <p className="text-lg md:text-xl text-chocolate-200/70 max-w-lg mb-10 leading-relaxed">
              We blend the richness of artisan craft with high-performance tech. 
              Experience a platform that feels as smooth as it performs.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-chocolate-500 text-white font-semibold flex items-center justify-center gap-2 group shadow-lg shadow-chocolate-900/50"
              >
                Explore the Core
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-chocolate-200 hover:text-chocolate-50 transition-colors font-medium"
              >
                View Documentation
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-chocolate-800 pt-8">
              {[
                { label: 'Latency', value: '12ms' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Nodes', value: '4.2k' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-mono text-chocolate-100">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-chocolate-400 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-chocolate-700/30 rounded-[40px]"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-chocolate-600/20 rounded-[35px]"
              />
              
              {/* Main Visual Card */}
              <div className="absolute inset-8 glass rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-chocolate-900/80 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800" 
                  alt="Abstract Tech"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating UI Element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-chocolate-500 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-chocolate-100">System Integrity</div>
                      <div className="text-[10px] text-chocolate-400 font-mono">SECURE_CHANNEL_01</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-full flex items-center justify-center animate-float">
                <div className="text-xs font-mono text-chocolate-300">v3.1</div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 glass rounded-2xl flex items-center justify-center animate-float [animation-delay:1s]">
                <div className="text-center">
                  <div className="text-xl font-display italic text-chocolate-100">Rich</div>
                  <div className="text-[8px] uppercase tracking-tighter text-chocolate-400">Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-chocolate-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-chocolate-500 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-7 py-30">
        {/* Centered VAULTIFY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center mb-28 relative"
        >
          <h1
            className="
              font-extrabold uppercase
              text-9xl
              tracking-[-0.08em]
              text-transparent bg-clip-text
              bg-gradient-to-b from-white via-cyan-200 to-cyan-400
              opacity-90
              select-none
            "
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
            }}
          >
          
          </h1>
        </motion.div>

        

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              VAULTIFY<br />
              <br />
              Save Smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Earn Rewards.
              </span><br />
              Secure Your Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-blue-100 max-w-lg"
            >
              Vault is your intelligent savings companion. Lock in your goals, automate your emergency fund, and earn rewards while building wealth with discipline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                See How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Glassmorphic card container */}
              
              
              {/* Phone mockup */}
              <div className="relative p-5">
                <div className="mx-auto max-w-sm">
                  
                    
                      <ImageWithFallback
                        src="/IMG_7958-portrait copy.png"
                        alt="Vaultify Mobile App Interface"
                        className="w-full h-auto object-cover"
                        style={{ display: 'block', maxWidth: '79%', height: 'auto' }}
                      />
                    </div>
                  </div>
                
              

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 -right-6 px-6 py-3 bg-emerald-500 rounded-2xl shadow-lg"
              >
                <div className="text-white text-sm">+₹250 saved!</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-20 -left-6 px-6 py-3 bg-cyan-500 rounded-2xl shadow-lg"
              >
                <div className="text-white text-sm">🎯 Goal: 75%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

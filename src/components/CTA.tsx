import { motion } from 'motion/react';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-cyan-900 to-emerald-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-8"
          >
            <span className="text-emerald-300">🚀 Join into Smart Savers cult.
              Let's Lockin
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Start Saving with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Vault Today
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
          >
            Take control of your financial future. Build wealth with discipline, earn rewards, and achieve your goals faster than ever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-white min-w-[200px] justify-center">
            COMING VERY SOON
            </button>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 min-w-[180px]">
              <div className="p-2 bg-white/10 rounded-lg">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-200">Download on the</div>
                <div className="text-white">App Store</div>
              </div>
            </button>

            <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 min-w-[180px]">
              <div className="p-2 bg-white/10 rounded-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-200">Get it on</div>
                <div className="text-white">Google Play</div>
              </div>
            </button> */}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200 text-sm"
          >
            {/* <div className="flex items-center gap-2">
              ✓ No credit card required
            </div>
            <div className="flex items-center gap-2">
              ✓ Free to start
            </div>
            <div className="flex items-center gap-2">
              ✓ Cancel anytime
            </div> */}
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-20 right-20 w-24 h-24 border-2 border-cyan-500/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 border-2 border-emerald-500/20 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}

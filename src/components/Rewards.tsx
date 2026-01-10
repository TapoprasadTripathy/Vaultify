import { motion } from 'motion/react';
import { MapPin, Tag, Sparkles } from 'lucide-react';

const rewards = [
  { name: 'Coffee Shop', discount: '20% OFF', location: '0.3 Km away', color: 'bg-amber-500' },
  { name: 'Fitness Center', discount: '1 Month Free', location: '0.5 Km away', color: 'bg-emerald-500' },
  { name: 'Restaurant', discount: '₹250 OFF', location: '0.8 Km away', color: 'bg-purple-500' },
  { name: 'Book Store', discount: '15% OFF', location: '1.2 Km away', color: 'bg-blue-500' },
];

export function Rewards() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Map container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 p-8">
              {/* Decorative map grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              </div>

              {/* Center marker (You are here) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative"
                >
                  <div className="w-6 h-6 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
                  <div className="absolute inset-0 bg-cyan-500/30 rounded-full animate-ping"></div>
                </motion.div>
              </div>

              {/* Reward markers */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-1/4 left-1/3 w-4 h-4 bg-emerald-500 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-2/3 left-1/4 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/3 right-1/4 w-4 h-4 bg-amber-500 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full shadow-lg"
              ></motion.div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                  x1="50%" y1="50%" x2="33%" y2="25%"
                  stroke="rgba(16, 185, 129, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Floating reward card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 p-6 bg-white rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Active Reward</div>
                  <div className="mb-1">Coffee Shop</div>
                  <div className="text-emerald-600">20% OFF</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-300">Location-Based Rewards</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">
              Earn While You
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"> Save</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              The more you save, the more you earn. Vault unlocks exclusive discounts and cashback offers from local businesses near you.
            </p>

            {/* Reward list */}
            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div className={`w-2 h-2 ${reward.color} rounded-full`}></div>
                  <div className="flex-1">
                    <div className="text-white">{reward.name}</div>
                    <div className="text-sm text-blue-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {reward.location}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-lg text-cyan-300">
                    {reward.discount}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Lock, Zap, Gift, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Lock-In Savings Wallets',
    description: 'Time-locked savings with customizable milestones. Your money stays secure until you reach your goal.',
    gradient: 'from-cyan-500 to-blue-600',
    bgGlow: 'bg-cyan-500/10',
  },
  {
    icon: Zap,
    title: 'Emergency Fund Automation',
    description: 'Auto-allocate funds at 25%, 50%, 75%, and 100% thresholds. Build your safety net effortlessly.',
    gradient: 'from-emerald-500 to-teal-600',
    bgGlow: 'bg-emerald-500/10',
  },
  {
    icon: Gift,
    title: 'Rewards & Discounts',
    description: 'Unlock location-based rewards, exclusive coupons, and cashback as you save consistently.',
    gradient: 'from-purple-500 to-pink-600',
    bgGlow: 'bg-purple-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Goal Tracking',
    description: 'Visual dashboards track your progress in real-time. Stay motivated with intuitive charts and insights.',
    gradient: 'from-orange-500 to-yellow-600',
    bgGlow: 'bg-orange-500/10',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full mb-4">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600"> Build Wealth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vaultify combines smart automation, gamification, and financial discipline to help you achieve your savings goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${feature.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

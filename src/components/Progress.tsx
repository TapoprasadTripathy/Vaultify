import { motion } from 'motion/react';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const savingsData = [
  { month: 'Jan', amount: 450 },
  { month: 'Feb', amount: 680 },
  { month: 'Mar', amount: 920 },
  { month: 'Apr', amount: 1150 },
  { month: 'May', amount: 1580 },
  { month: 'Jun', amount: 2100 },
];

const goals = [
  { title: 'Emergency Fund', current: 7500, target: 10000, color: 'cyan' },
  { title: 'Vacation', current: 2800, target: 5000, color: 'emerald' },
  { title: 'New Laptop', current: 1200, target: 1500, color: 'purple' },
];

export function Progress() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
            Track Your Progress
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Watch Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600"> Wealth Grow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beautiful visualizations keep you motivated. Track milestones, celebrate wins, and stay disciplined.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Savings chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl mb-2">Savings Overview</h3>
                  <p className="text-gray-500">Your growth over time</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-4xl mb-2">₹2,100</div>
                <div className="text-emerald-600 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+32% this month</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={savingsData}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                    {savingsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={`url(#colorGradient${index})`}
                      />
                    ))}
                  </Bar>
                  <defs>
                    {savingsData.map((_, index) => (
                      <linearGradient
                        key={`gradient-${index}`}
                        id={`colorGradient${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    ))}
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right: Goals progress */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {goals.map((goal, index) => {
              const percentage = (goal.current / goal.target) * 100;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br from-${goal.color}-500 to-${goal.color}-600 rounded-xl`}>
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl">{goal.title}</h4>
                        <p className="text-gray-500 text-sm">
                          ₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-2xl text-gray-900">
                      {percentage.toFixed(0)}%
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      className={`h-full bg-gradient-to-r from-${goal.color}-500 to-${goal.color}-600 rounded-full`}
                    ></motion.div>
                  </div>

                  {/* Milestones */}
                  <div className="flex justify-between mt-3 text-xs text-gray-400">
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Motivation card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl text-white"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">You're on fire! 🔥</h4>
                  <p className="text-cyan-50">
                    Keep it up! You've saved 5 days in a row. Unlock a special reward at 7 days.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

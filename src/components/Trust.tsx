import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

const transactions = [
  { type: 'Deposit', amount: '+₹500', date: 'Dec 18, 2024', status: 'completed' },
  { type: 'Goal: Vacation', amount: '-₹200', date: 'Dec 17, 2024', status: 'locked' },
  { type: 'Reward Earned', amount: '+₹25', date: 'Dec 16, 2024', status: 'completed' },
  { type: 'Emergency Fund', amount: '+₹150', date: 'Dec 15, 2024', status: 'automated' },
];

const securityFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Encryption',
    description: '256-bit SSL encryption protects all your data',
  },
  {
    icon: Lock,
    title: 'Secure Lock-In',
    description: 'Your savings are protected with time-based locks',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Clear penalty structure and complete transaction history',
  },
];

export function Trust() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Transaction UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl mb-2">Transaction History</h3>
                  <p className="text-gray-500">Complete transparency, always</p>
                </div>
                <button className="px-4 py-2 text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        transaction.status === 'completed' ? 'bg-emerald-100' :
                        transaction.status === 'locked' ? 'bg-cyan-100' :
                        'bg-purple-100'
                      }`}>
                        {transaction.status === 'completed' ? (
                          <CheckCircle2 className={`w-5 h-5 ${
                            transaction.amount.startsWith('+') ? 'text-emerald-600' : 'text-gray-600'
                          }`} />
                        ) : transaction.status === 'locked' ? (
                          <Lock className="w-5 h-5 text-cyan-600" />
                        ) : (
                          <Shield className="w-5 h-5 text-purple-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-gray-900">{transaction.type}</div>
                        <div className="text-sm text-gray-500">{transaction.date}</div>
                      </div>
                    </div>
                    <div className={`${
                      transaction.amount.startsWith('+') ? 'text-emerald-600' : 'text-gray-900'
                    }`}>
                      {transaction.amount}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Penalty info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl"
              >
                <div className="flex gap-3">
                  <div className="text-amber-600 mt-1">⚠️</div>
                  <div>
                    <div className="text-sm text-amber-900 mb-1">Early Withdrawal Policy</div>
                    <p className="text-xs text-amber-700">
                      Breaking a lock-in incurs a  penalty depending how soon you withdraw. Stay disciplined, stay rewarded.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Security features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full mb-6">
              Security & Trust
            </span>

            <h2 className="text-4xl md:text-5xl mb-6">
              Your Money Is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600"> Safe & Secure</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Built with enterprise-grade security. Your financial data is encrypted, protected, and always in your control.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>RBI Approved</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Lock className="w-5 h-5 text-cyan-600" />
                  <span>256-bit SSL</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

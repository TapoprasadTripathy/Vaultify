import { Lock } from 'lucide-react';
import { Complaint } from './Complaint';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Pricing', 'Rewards'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Help Center', 'Security', 'Privacy', 'Terms'],
  Connect: ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl text-white">Vault</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The smart savings platform that helps you build wealth with discipline, automation, and rewards.
            </p>
            <div className="mb-6">
              <Complaint />
            </div>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 rounded-lg transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Vault. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

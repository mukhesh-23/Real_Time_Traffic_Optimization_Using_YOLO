import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-orange rounded-full flex items-center justify-center">
                <span className="text-dark font-bold">AI</span>
              </div>
              <span className="font-orbitron font-bold text-2xl text-white">TrafficAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Real-Time Traffic Optimization with YOLO - Driving towards a sustainable future through AI-powered traffic management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Technology', 'Traffic AI', 'Dashboard'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="text-neon-green" size={16} />
                <span className="text-gray-400 text-sm">Smart City Campus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-neon-green" size={16} />
                <span className="text-gray-400 text-sm">traffic@ai-system.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TrafficAI. All rights reserved. Driving Towards a Sustainable Future.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
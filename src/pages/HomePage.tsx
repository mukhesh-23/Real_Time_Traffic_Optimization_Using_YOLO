import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Zap, Shield, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-dark">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-green rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-neon-orange rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-green rounded-full animate-bounce opacity-25"></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-neon-orange rounded-full animate-ping opacity-20"></div>
          
          {/* Moving road lines */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse opacity-30"></div>
          <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-bounce opacity-20"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-to-r from-neon-green via-white to-neon-orange bg-clip-text text-transparent">
              Real-Time Traffic
            </span>
            <br />
            <span className="text-white">
              Optimization with YOLO
            </span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Safe & Smart Journeys for a <span className="text-neon-green font-semibold">Sustainable Future</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/about"
              className="group bg-gradient-to-r from-neon-green to-emerald-500 hover:from-emerald-500 hover:to-neon-green px-8 py-4 rounded-full font-poppins font-semibold text-dark transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Explore Project</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
            
            <Link
              to="/visualization"
              className="group border-2 border-neon-orange hover:bg-neon-orange px-8 py-4 rounded-full font-poppins font-semibold text-neon-orange hover:text-dark transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <Play size={20} />
              <span>View Demo</span>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-neon-green/50 transition-all duration-300 group">
              <Zap className="text-neon-green mb-4 group-hover:scale-110 transition-transform duration-200" size={32} />
              <h3 className="font-orbitron font-semibold text-white mb-2">Real-Time Processing</h3>
              <p className="text-gray-400 text-sm">Lightning-fast YOLO detection for instant traffic analysis</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-neon-orange/50 transition-all duration-300 group">
              <Shield className="text-neon-orange mb-4 group-hover:scale-110 transition-transform duration-200" size={32} />
              <h3 className="font-orbitron font-semibold text-white mb-2">GDPR Compliant</h3>
              <p className="text-gray-400 text-sm">Privacy-first approach with secure data handling</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 group">
              <Leaf className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-200" size={32} />
              <h3 className="font-orbitron font-semibold text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-400 text-sm">Reduce emissions by 10% through smart routing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-orbitron font-bold text-neon-green mb-2">20%</div>
              <div className="text-xl font-poppins text-white">Congestion Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-orbitron font-bold text-neon-orange mb-2">15%</div>
              <div className="text-xl font-poppins text-white">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-orbitron font-bold text-green-400 mb-2">10%</div>
              <div className="text-xl font-poppins text-white">Lower Emissions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
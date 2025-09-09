import React from 'react';
import { Car } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-neon-green to-neon-orange rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-6 left-0 animate-bounce">
            <Car className="text-neon-green" size={32} />
          </div>
        </div>
        <h2 className="font-orbitron text-2xl text-white mb-2">TrafficAI</h2>
        <p className="font-poppins text-gray-400">Loading traffic optimization system...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
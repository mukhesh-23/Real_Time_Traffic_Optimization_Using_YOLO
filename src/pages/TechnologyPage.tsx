import React, { useState } from 'react';
import { Brain, Camera, Cpu, Shield, Zap, Database } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      title: "YOLOv5",
      icon: <Camera className="text-neon-green" size={48} />,
      front: "Real-time Object Detection",
      back: "You Only Look Once v5 provides lightning-fast object detection with 95% accuracy for vehicles and pedestrians in traffic scenarios.",
      color: "neon-green"
    },
    {
      id: 2,
      title: "LSTM Networks",
      icon: <Brain className="text-neon-orange" size={48} />,
      front: "Traffic Pattern Prediction",
      back: "Long Short-Term Memory networks analyze historical traffic data to predict congestion patterns and optimize routing decisions.",
      color: "neon-orange"
    },
    {
      id: 3,
      title: "Reinforcement Learning",
      icon: <Zap className="text-blue-400" size={48} />,
      front: "Adaptive Traffic Control",
      back: "RL algorithms continuously learn and adapt traffic signal timing and routing strategies for optimal traffic flow management.",
      color: "blue-400"
    },
    {
      id: 4,
      title: "IoT Cameras",
      icon: <Cpu className="text-purple-400" size={48} />,
      front: "Smart Infrastructure",
      back: "High-resolution IoT cameras provide 24/7 traffic monitoring with edge computing capabilities for real-time processing.",
      color: "purple-400"
    },
    {
      id: 5,
      title: "GDPR Compliance",
      icon: <Shield className="text-green-400" size={48} />,
      front: "Privacy Protection",
      back: "Full GDPR compliance with encrypted data transmission, anonymization techniques, and secure cloud storage solutions.",
      color: "green-400"
    },
    {
      id: 6,
      title: "Edge Computing",
      icon: <Database className="text-red-400" size={48} />,
      front: "Local Processing",
      back: "Edge computing reduces latency and bandwidth usage by processing traffic data locally at camera endpoints.",
      color: "red-400"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Cutting-edge technologies powering the future of traffic optimization
          </p>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="relative h-64 perspective-1000 cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === tech.id ? null : tech.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === tech.id ? 'rotate-y-180' : ''
                }`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-gray-700 hover:border-${tech.color} transition-all duration-300 h-full flex flex-col items-center justify-center text-center group`}>
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                        {tech.title}
                      </h3>
                      <p className="font-poppins text-gray-400">
                        {tech.front}
                      </p>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="text-xs text-gray-500 animate-pulse">Click to flip</div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className={`bg-gradient-to-br from-${tech.color}/20 to-gray-900 rounded-xl p-6 border-2 border-${tech.color} h-full flex flex-col justify-center text-center`}>
                      <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                        {tech.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-sm leading-relaxed">
                        {tech.back}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-12 text-center">System Architecture</h2>
          
          <div className="bg-dark/50 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-neon-green/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="text-neon-green" size={32} />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Data Collection</h3>
                <p className="font-poppins text-gray-400 text-sm">
                  IoT cameras capture real-time traffic data across urban intersections
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-neon-orange/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="text-neon-orange" size={32} />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">AI Processing</h3>
                <p className="font-poppins text-gray-400 text-sm">
                  YOLO and LSTM models process data for detection and prediction
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-400/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="text-blue-400" size={32} />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Optimization</h3>
                <p className="font-poppins text-gray-400 text-sm">
                  RL algorithms provide optimal routing and traffic control solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
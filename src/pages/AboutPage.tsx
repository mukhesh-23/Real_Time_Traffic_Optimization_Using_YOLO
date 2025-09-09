import React from 'react';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const phases = [
    {
      title: "Deploy Cameras",
      description: "Strategic placement of IoT cameras across traffic intersections",
      icon: "📹",
      color: "neon-green"
    },
    {
      title: "Train Model",
      description: "YOLOv5 training on diverse traffic datasets for accurate detection",
      icon: "🧠",
      color: "neon-orange"
    },
    {
      title: "Implement ML",
      description: "LSTM and Reinforcement Learning for pattern recognition",
      icon: "⚡",
      color: "blue-400"
    },
    {
      title: "Test Strategies",
      description: "Real-world testing and optimization of traffic flow algorithms",
      icon: "🧪",
      color: "purple-400"
    },
    {
      title: "Deployment",
      description: "Full-scale deployment with GDPR compliance and monitoring",
      icon: "🚀",
      color: "green-400"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-gray-900 to-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              About Our Project
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing urban mobility through AI-powered traffic optimization
          </p>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-dark to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="font-orbitron font-bold text-3xl text-white mb-8 text-center">Project Abstract</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="font-poppins text-gray-300 leading-relaxed">
                  Our Real-Time Traffic Optimization system leverages cutting-edge YOLO (You Only Look Once) technology 
                  to create intelligent traffic management solutions. By combining computer vision, machine learning, 
                  and IoT infrastructure, we aim to reduce urban congestion and promote sustainable transportation.
                </p>
                <p className="font-poppins text-gray-300 leading-relaxed">
                  The system employs YOLOv5 for real-time object detection, LSTM networks for traffic pattern prediction, 
                  and reinforcement learning algorithms for optimal route suggestions. Our approach ensures GDPR 
                  compliance while delivering measurable improvements in traffic flow efficiency.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-xl p-4 text-center">
                  <Target className="text-neon-green mx-auto mb-2" size={32} />
                  <div className="font-orbitron font-bold text-2xl text-neon-green">20%</div>
                  <div className="font-poppins text-sm text-gray-400">Congestion Reduction</div>
                </div>
                <div className="bg-neon-orange/10 border border-neon-orange/30 rounded-xl p-4 text-center">
                  <TrendingUp className="text-neon-orange mx-auto mb-2" size={32} />
                  <div className="font-orbitron font-bold text-2xl text-neon-orange">15%</div>
                  <div className="font-poppins text-sm text-gray-400">Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-12 text-center">Project Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-neon-green via-neon-orange to-green-400"></div>
            
            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{phase.icon}</span>
                      <h3 className="font-orbitron font-semibold text-white group-hover:text-neon-green transition-colors duration-200">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-gray-400 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-green rounded-full border-4 border-dark"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="text-neon-green" size={32} />,
                title: "Real-Time Detection",
                description: "Advanced YOLO technology for instant vehicle and pedestrian recognition"
              },
              {
                icon: <Users className="text-neon-orange" size={32} />,
                title: "Smart Routing",
                description: "AI-powered route optimization based on live traffic conditions"
              },
              {
                icon: <Target className="text-blue-400" size={32} />,
                title: "Predictive Analytics",
                description: "LSTM networks predict traffic patterns for proactive management"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-dark/50 rounded-xl p-6 border border-gray-700 hover:border-neon-green/30 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-3 group-hover:text-neon-green transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
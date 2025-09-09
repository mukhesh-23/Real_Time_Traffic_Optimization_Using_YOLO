import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Trishitha',
      role: 'AI/ML Engineer & Project Lead',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialized in YOLO implementation and deep learning models for traffic optimization.',
      skills: ['YOLOv5', 'TensorFlow', 'Computer Vision', 'Project Management'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'trishitha@trafficai.com'
      }
    },
    {
      name: 'Dedeepya',
      role: 'Data Scientist & LSTM Specialist',
      image: 'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in time series analysis and LSTM networks for traffic pattern prediction.',
      skills: ['LSTM', 'Time Series', 'Python', 'Statistical Analysis'],
      social: {
        github: '#',
        linkedin: '#', 
        email: 'dedeepya@trafficai.com'
      }
    },
    {
      name: 'Mukhesh',
      role: 'Reinforcement Learning Engineer',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Focused on reinforcement learning algorithms for optimal traffic routing strategies.',
      skills: ['Reinforcement Learning', 'PyTorch', 'Algorithm Design', 'Optimization'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'mukhesh@trafficai.com'
      }
    },
    {
      name: 'Ramakrishna',
      role: 'IoT Systems & Backend Developer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Responsible for IoT camera infrastructure and backend systems integration.',
      skills: ['IoT', 'Node.js', 'System Architecture', 'GDPR Compliance'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'ramakrishna@trafficai.com'
      }
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds driving traffic optimization innovation
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group hover:scale-105"
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Social Icons Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.github}
                      className="p-2 bg-dark/80 rounded-full text-white hover:text-neon-green transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-dark/80 rounded-full text-white hover:text-neon-orange transition-colors duration-200"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-dark/80 rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-1 group-hover:text-neon-green transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="font-poppins text-neon-orange text-sm font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="font-poppins text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-poppins rounded-full border border-neon-green/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-12 text-center">Team Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-neon-green/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-neon-green/30">
                <span className="font-orbitron font-bold text-3xl text-neon-green">5+</span>
              </div>
              <h3 className="font-orbitron font-semibold text-white mb-2">Years Experience</h3>
              <p className="font-poppins text-gray-400 text-sm">Combined AI/ML expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-neon-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-neon-orange/30">
                <span className="font-orbitron font-bold text-3xl text-neon-orange">12</span>
              </div>
              <h3 className="font-orbitron font-semibold text-white mb-2">Research Papers</h3>
              <p className="font-poppins text-gray-400 text-sm">Published in AI conferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-400/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                <span className="font-orbitron font-bold text-3xl text-blue-400">50+</span>
              </div>
              <h3 className="font-orbitron font-semibold text-white mb-2">Models Trained</h3>
              <p className="font-poppins text-gray-400 text-sm">Traffic optimization algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-400/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-green-400/30">
                <span className="font-orbitron font-bold text-3xl text-green-400">3</span>
              </div>
              <h3 className="font-orbitron font-semibold text-white mb-2">Awards Won</h3>
              <p className="font-poppins text-gray-400 text-sm">Innovation in smart cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-6">
            Interested in Collaboration?
          </h2>
          <p className="font-poppins text-xl text-gray-300 mb-8">
            We're always open to discussing new opportunities in AI-powered traffic optimization
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:team@trafficai.com"
              className="group bg-gradient-to-r from-neon-green to-emerald-500 hover:from-emerald-500 hover:to-neon-green px-8 py-4 rounded-full font-poppins font-semibold text-dark transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail size={20} />
              <span>Contact Team</span>
            </a>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span className="font-poppins text-sm">Smart City Research Campus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-green" size={24} />,
      title: 'Email Us',
      details: 'team@trafficai.com',
      subdetails: 'We reply within 24 hours'
    },
    {
      icon: <Phone className="text-neon-orange" size={24} />,
      title: 'Call Us', 
      details: '+1 (555) 123-4567',
      subdetails: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: 'Visit Us',
      details: 'Smart City Research Campus',
      subdetails: 'Innovation District, Tech Valley'
    },
    {
      icon: <Clock className="text-green-400" size={24} />,
      title: 'Office Hours',
      details: 'Monday - Friday',
      subdetails: '9:00 AM - 6:00 PM EST'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunity',
    'Research Collaboration',
    'Media Inquiry',
    'Job Opportunity'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-orange rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-green rounded-full animate-bounce opacity-25"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize traffic management? Let's discuss how our AI solutions can transform your city.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2 group-hover:text-neon-green transition-colors duration-200">
                  {info.title}
                </h3>
                <p className="font-poppins text-gray-300 mb-1">{info.details}</p>
                <p className="font-poppins text-gray-500 text-sm">{info.subdetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-green/5 to-neon-orange/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/5 to-green-400/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="font-orbitron font-bold text-3xl text-white mb-4">Send us a Message</h2>
                <p className="font-poppins text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Send className="text-green-500" size={24} />
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="font-poppins text-gray-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-neon-green focus:outline-none peer"
                        placeholder="Your Name"
                      />
                      <label className="absolute left-4 -top-2.5 text-sm text-neon-green bg-gray-700 px-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-green transition-all duration-200">
                        Your Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-neon-green focus:outline-none peer"
                        placeholder="Your Email"
                      />
                      <label className="absolute left-4 -top-2.5 text-sm text-neon-green bg-gray-700 px-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-green transition-all duration-200">
                        Your Email
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-neon-green focus:outline-none"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-neon-green focus:outline-none peer resize-none"
                      placeholder="Your Message"
                    />
                    <label className="absolute left-4 -top-2.5 text-sm text-neon-green bg-gray-700 px-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-green transition-all duration-200">
                      Your Message
                    </label>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group bg-gradient-to-r from-neon-green to-emerald-500 hover:from-emerald-500 hover:to-neon-green px-8 py-4 rounded-full font-poppins font-semibold text-dark transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl mx-auto ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-dark border-t-transparent rounded-full"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-4">
            Driving Towards a Sustainable Future
          </h2>
          <p className="font-poppins text-xl text-gray-300 mb-8">
            Together, we can revolutionize urban mobility and create smarter, more efficient cities for everyone.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm font-poppins text-gray-400">
            <span>🌱 Eco-Friendly Solutions</span>
            <span>🚗 Smart Traffic Management</span>
            <span>📊 Data-Driven Insights</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
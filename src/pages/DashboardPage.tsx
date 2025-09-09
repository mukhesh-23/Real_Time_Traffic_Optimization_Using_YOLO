import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Clock, Leaf, Car, Users } from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Mock data for charts
  const trafficDensityData = [
    { time: '6:00', density: 20, vehicles: 45 },
    { time: '7:00', density: 45, vehicles: 120 },
    { time: '8:00', density: 80, vehicles: 200 },
    { time: '9:00', density: 65, vehicles: 150 },
    { time: '10:00', density: 40, vehicles: 90 },
    { time: '11:00', density: 35, vehicles: 80 },
    { time: '12:00', density: 55, vehicles: 130 },
    { time: '13:00', density: 60, vehicles: 140 },
    { time: '14:00', density: 50, vehicles: 110 },
    { time: '15:00', density: 45, vehicles: 100 },
    { time: '16:00', density: 70, vehicles: 170 },
    { time: '17:00', density: 85, vehicles: 210 },
    { time: '18:00', density: 75, vehicles: 180 },
  ];

  const emissionsData = [
    { month: 'Jan', emissions: 120 },
    { month: 'Feb', emissions: 115 },
    { month: 'Mar', emissions: 110 },
    { month: 'Apr', emissions: 105 },
    { month: 'May', emissions: 100 },
    { month: 'Jun', emissions: 95 },
  ];

  const routeEfficiencyData = [
    { name: 'Main Street', efficiency: 85 },
    { name: 'Highway 101', efficiency: 92 },
    { name: 'Downtown', efficiency: 70 },
    { name: 'Industrial', efficiency: 88 },
  ];

  const congestionPieData = [
    { name: 'Low', value: 45, color: '#10B981' },
    { name: 'Medium', value: 35, color: '#F59E0B' },
    { name: 'High', value: 20, color: '#EF4444' },
  ];

  const kpiData = [
    {
      title: 'Traffic Reduction',
      value: '18.5%',
      target: '20%',
      trend: 'up',
      icon: <TrendingDown className="text-green-400" size={24} />,
      color: 'green'
    },
    {
      title: 'Fuel Efficiency',
      value: '14.2%',
      target: '15%',
      trend: 'up', 
      icon: <Leaf className="text-neon-green" size={24} />,
      color: 'neon-green'
    },
    {
      title: 'Average Wait Time',
      value: '2.3 min',
      target: '2.0 min',
      trend: 'down',
      icon: <Clock className="text-neon-orange" size={24} />,
      color: 'orange'
    },
    {
      title: 'Active Cameras',
      value: '247',
      target: '250',
      trend: 'up',
      icon: <Car className="text-blue-400" size={24} />,
      color: 'blue'
    }
  ];

  const StatCard = ({ stat }: { stat: any }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="group-hover:scale-110 transition-transform duration-200">
          {stat.icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {stat.trend === 'up' ? <TrendingUp size={12} className="inline mr-1" /> : <TrendingDown size={12} className="inline mr-1" />}
          {stat.trend === 'up' ? 'Improving' : 'Declining'}
        </div>
      </div>
      
      <h3 className="font-poppins text-gray-400 text-sm mb-1">{stat.title}</h3>
      <div className="flex items-end space-x-2">
        <span className="font-orbitron font-bold text-3xl text-white">{stat.value}</span>
        <span className="font-poppins text-gray-500 text-sm mb-1">/ {stat.target}</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${
            stat.color === 'green' ? 'from-green-400 to-green-500' :
            stat.color === 'neon-green' ? 'from-neon-green to-green-400' :
            stat.color === 'orange' ? 'from-yellow-400 to-orange-500' :
            'from-blue-400 to-blue-500'
          }`}
          style={{ width: `${Math.random() * 40 + 60}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Smart Dashboard
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics and insights for traffic optimization
          </p>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kpiData.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traffic Density Chart */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-orbitron font-bold text-xl text-white mb-6 flex items-center">
                <Users className="text-neon-green mr-3" size={24} />
                Traffic Density Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trafficDensityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="density" 
                    stroke="#00FF88" 
                    fill="url(#densityGradient)" 
                  />
                  <defs>
                    <linearGradient id="densityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Congestion Distribution */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-orbitron font-bold text-xl text-white mb-6 flex items-center">
                <Car className="text-neon-orange mr-3" size={24} />
                Congestion Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={congestionPieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {congestionPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Emissions Reduction */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-orbitron font-bold text-xl text-white mb-6 flex items-center">
                <Leaf className="text-green-400 mr-3" size={24} />
                CO2 Emissions Reduction
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={emissionsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="emissions" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Route Efficiency */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-orbitron font-bold text-xl text-white mb-6 flex items-center">
                <TrendingUp className="text-blue-400 mr-3" size={24} />
                Route Efficiency
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={routeEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                  />
                  <Bar dataKey="efficiency" fill="url(#barGradient)" />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF8800" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF8800" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Status */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h2 className="font-orbitron font-bold text-2xl text-white mb-6 text-center">System Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">System Health</h3>
                <p className="text-green-400 font-poppins">Optimal</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neon-green font-orbitron font-bold text-2xl">247</span>
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Active Cameras</h3>
                <p className="text-neon-green font-poppins">99.2% Uptime</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-orange/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neon-orange font-orbitron font-bold text-xl">0.8s</span>
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Response Time</h3>
                <p className="text-neon-orange font-poppins">Real-time Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
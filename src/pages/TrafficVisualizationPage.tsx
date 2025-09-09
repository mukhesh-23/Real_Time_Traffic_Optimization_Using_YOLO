import React, { useState, useRef } from 'react';
import { Upload, Camera, MapPin, Clock, AlertCircle, CheckCircle, Route } from 'lucide-react';

interface DetectionResult {
  id: number;
  type: 'vehicle' | 'pedestrian' | 'cyclist';
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface RouteOptimization {
  currentRoute: string;
  alternateRoutes: Array<{
    name: string;
    duration: string;
    distance: string;
    traffic: 'low' | 'medium' | 'high';
    savings: string;
  }>;
  congestionLevel: 'low' | 'medium' | 'high';
}

const TrafficVisualizationPage: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detections, setDetections] = useState<DetectionResult[]>([]);
  const [routeData, setRouteData] = useState<RouteOptimization | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        processImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    setIsProcessing(true);
    setDetections([]);
    setRouteData(null);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock YOLO detection results
    const mockDetections: DetectionResult[] = [
      { id: 1, type: 'vehicle', confidence: 0.95, x: 150, y: 100, width: 120, height: 80 },
      { id: 2, type: 'vehicle', confidence: 0.88, x: 300, y: 120, width: 110, height: 70 },
      { id: 3, type: 'pedestrian', confidence: 0.92, x: 80, y: 180, width: 40, height: 100 },
      { id: 4, type: 'vehicle', confidence: 0.87, x: 450, y: 90, width: 130, height: 85 },
    ];

    // Mock route optimization data
    const mockRouteData: RouteOptimization = {
      currentRoute: "Main Street → City Center",
      congestionLevel: 'high',
      alternateRoutes: [
        {
          name: "Highway Route",
          duration: "12 min",
          distance: "8.2 km",
          traffic: 'low',
          savings: "Save 8 min"
        },
        {
          name: "Riverside Path",
          duration: "15 min", 
          distance: "6.8 km",
          traffic: 'medium',
          savings: "Save 5 min"
        },
        {
          name: "Industrial Route",
          duration: "18 min",
          distance: "9.1 km", 
          traffic: 'low',
          savings: "Save 2 min"
        }
      ]
    };

    setDetections(mockDetections);
    setRouteData(mockRouteData);
    setIsProcessing(false);
  };

  const getTrafficColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400';
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400';
    }
  };

  const getDetectionColor = (type: string) => {
    switch (type) {
      case 'vehicle': return 'border-neon-green bg-neon-green/20';
      case 'pedestrian': return 'border-neon-orange bg-neon-orange/20';
      case 'cyclist': return 'border-blue-400 bg-blue-400/20';
      default: return 'border-white bg-white/20';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Traffic AI Visualization
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Upload traffic images to see YOLO detection in action and get optimized routing suggestions
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="font-orbitron font-bold text-2xl text-white mb-6 flex items-center">
                  <Camera className="text-neon-green mr-3" size={28} />
                  Upload Traffic Image
                </h2>
                
                {!uploadedImage ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-600 hover:border-neon-green rounded-xl p-12 text-center cursor-pointer transition-all duration-300 group"
                  >
                    <Upload className="text-gray-400 group-hover:text-neon-green mx-auto mb-4 group-hover:scale-110 transition-all duration-200" size={48} />
                    <h3 className="font-poppins text-white mb-2">Drop your traffic image here</h3>
                    <p className="text-gray-400 text-sm">or click to browse files</p>
                    <p className="text-gray-500 text-xs mt-2">Supports: JPG, PNG, WebP</p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Traffic scene"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    
                    {/* Overlay detections */}
                    {detections.map((detection) => (
                      <div
                        key={detection.id}
                        className={`absolute border-2 ${getDetectionColor(detection.type)} rounded`}
                        style={{
                          left: `${(detection.x / 600) * 100}%`,
                          top: `${(detection.y / 400) * 100}%`,
                          width: `${(detection.width / 600) * 100}%`,
                          height: `${(detection.height / 400) * 100}%`
                        }}
                      >
                        <div className="absolute -top-6 left-0 bg-dark/90 text-white text-xs px-2 py-1 rounded">
                          {detection.type} ({Math.round(detection.confidence * 100)}%)
                        </div>
                      </div>
                    ))}

                    {isProcessing && (
                      <div className="absolute inset-0 bg-dark/80 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="animate-spin w-12 h-12 border-4 border-neon-green border-t-transparent rounded-full mx-auto mb-4"></div>
                          <p className="text-white font-poppins">Processing with YOLO...</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {uploadedImage && (
                  <button
                    onClick={() => {
                      setUploadedImage(null);
                      setDetections([]);
                      setRouteData(null);
                    }}
                    className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-poppins transition-colors duration-200"
                  >
                    Upload New Image
                  </button>
                )}
              </div>

              {/* Detection Results */}
              {detections.length > 0 && (
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center">
                    <CheckCircle className="text-neon-green mr-2" size={24} />
                    Detection Results
                  </h3>
                  
                  <div className="space-y-3">
                    {detections.map((detection) => (
                      <div key={detection.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            detection.type === 'vehicle' ? 'bg-neon-green' :
                            detection.type === 'pedestrian' ? 'bg-neon-orange' : 'bg-blue-400'
                          }`}></div>
                          <span className="font-poppins text-white capitalize">{detection.type}</span>
                        </div>
                        <span className="font-poppins text-sm text-gray-400">
                          {Math.round(detection.confidence * 100)}% confidence
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Route Optimization Panel */}
            <div className="space-y-6">
              {routeData && (
                <>
                  {/* Congestion Status */}
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center">
                      <AlertCircle className="text-neon-orange mr-2" size={24} />
                      Traffic Analysis
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-poppins text-gray-300">Current Route:</span>
                        <span className="font-poppins text-white font-semibold">{routeData.currentRoute}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-poppins text-gray-300">Congestion Level:</span>
                        <span className={`px-3 py-1 rounded-full border text-sm font-poppins ${getTrafficColor(routeData.congestionLevel)}`}>
                          {routeData.congestionLevel.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Routes */}
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center">
                      <Route className="text-neon-green mr-2" size={24} />
                      Optimized Routes
                    </h3>
                    
                    <div className="space-y-3">
                      {routeData.alternateRoutes.map((route, index) => (
                        <div key={index} className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-200 cursor-pointer group">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-poppins font-semibold text-white group-hover:text-neon-green transition-colors duration-200">
                              {route.name}
                            </h4>
                            <span className="text-neon-green font-poppins text-sm font-semibold">
                              {route.savings}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{route.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{route.distance}</span>
                            </div>
                            <span className={`px-2 py-1 rounded border text-xs ${getTrafficColor(route.traffic)}`}>
                              {route.traffic}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Instructions */}
              {!uploadedImage && (
                <div className="bg-gradient-to-r from-neon-green/10 to-neon-orange/10 rounded-2xl p-6 border border-neon-green/30">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-4">How It Works</h3>
                  <div className="space-y-3 text-sm font-poppins text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="bg-neon-green text-dark rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                      <span>Upload a traffic scene image from your device</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-neon-orange text-dark rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                      <span>Our YOLO model detects vehicles, pedestrians, and cyclists</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-400 text-dark rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                      <span>AI analyzes congestion and suggests optimal routes</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrafficVisualizationPage;
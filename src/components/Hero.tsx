
import React from 'react';
import { Rocket, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-200 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4 text-orange-600">
            <Sparkles className="w-8 h-8 animate-pulse" />
            <Rocket className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
            <Users className="w-8 h-8 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          Josh Innovation Lab
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Where curiosity meets code. We're a community of weekend warriors, AI experimenters, and open-source dreamers building the future, one innovative project at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
            Join Our Community
          </Button>
          <Button variant="outline" size="lg" className="border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
            Explore Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

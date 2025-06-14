
import React from 'react';
import { Sparkles, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-100 to-electric-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-coral-100 to-indigo-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-electric-500 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-coral-500 rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        {/* Icon group */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className="p-4 bg-gradient-to-br from-indigo-500 to-electric-600 rounded-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="p-5 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
            <Rocket className="w-10 h-10 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
            <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-display font-bold text-gray-900 mb-8 tracking-tight">
          Josh Innovation
          <span className="bg-gradient-to-r from-indigo-600 via-electric-600 to-coral-500 bg-clip-text text-transparent block">
            Lab
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Where Josh Software teams experiment, innovate, and build the future. 
          <span className="text-indigo-600 font-semibold"> Weekend warriors</span> creating 
          <span className="text-coral-500 font-semibold"> tomorrow's solutions</span> today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-electric-600 hover:from-indigo-700 hover:to-electric-700 text-white font-semibold px-10 py-4 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Lab
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-indigo-300 font-semibold px-10 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

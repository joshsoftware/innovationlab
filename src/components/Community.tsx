
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Sparkles, Globe } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-400 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to turn your weekend curiosity into groundbreaking projects? 
            Connect with fellow innovators, share ideas, and build the future together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-gray-300">Join our Discord community and meet fellow weekend warriors</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">Create</h3>
              <p className="text-gray-300">Participate in weekly hackathons and bring your ideas to life</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Contribute</h3>
              <p className="text-gray-300">Share your projects with the world and make an impact</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-12 py-4 rounded-full transform hover:scale-105 transition-all duration-200 text-lg">
            Start Your Innovation Journey
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Free to join • Open to all skill levels • Fully remote friendly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;

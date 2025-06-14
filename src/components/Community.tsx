
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Sparkles, Globe } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-32 bg-josh-gray-900 text-white relative overflow-hidden">
      {/* Josh Software inspired background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-josh-teal/20 to-josh-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-josh-orange/20 to-josh-purple/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-josh-gray-300 max-w-3xl mx-auto font-medium">
            Ready to turn your weekend curiosity into groundbreaking projects? 
            Connect with fellow Josh Software innovators and build the future together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 rounded-3xl group transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-josh-blue to-josh-teal flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Connect</h3>
              <p className="text-josh-gray-300 font-medium">Join our Slack community and meet fellow Josh Software weekend warriors</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 rounded-3xl group transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-josh-teal to-josh-orange flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Create</h3>
              <p className="text-josh-gray-300 font-medium">Participate in weekly hackathons and bring your ideas to life</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 rounded-3xl group transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-josh-orange to-josh-purple flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Contribute</h3>
              <p className="text-josh-gray-300 font-medium">Share your projects with the world and make an impact</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-josh-blue to-josh-teal hover:from-josh-blue-light hover:to-josh-teal-light text-white font-semibold px-12 py-5 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg shadow-2xl"
          >
            Start Your Innovation Journey
          </Button>
          <p className="text-sm text-josh-gray-400 mt-6 font-medium">
            Free to join • Open to all Josh Software employees • Fully remote friendly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;

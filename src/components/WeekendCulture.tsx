
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Sparkles, Rocket } from 'lucide-react';

const WeekendCulture = () => {
  const stats = [
    { 
      icon: Clock, 
      value: "48hrs", 
      label: "Weekend Hackathons", 
      gradient: "from-josh-blue to-josh-teal" 
    },
    { 
      icon: Users, 
      value: "150+", 
      label: "Active Members", 
      gradient: "from-josh-teal to-josh-orange" 
    },
    { 
      icon: Sparkles, 
      value: "80+", 
      label: "Projects Launched", 
      gradient: "from-josh-orange to-josh-purple" 
    },
    { 
      icon: Rocket, 
      value: "12", 
      label: "Months Running", 
      gradient: "from-josh-purple to-josh-blue" 
    }
  ];

  return (
    <section className="py-32 bg-josh-gray-50/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            Weekend Innovation Culture
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Every weekend is an opportunity to create something amazing. We gather, ideate, code, and ship projects that matter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-3xl group"
            >
              <CardContent className="pt-10 pb-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-josh-gray-900 mb-2">{stat.value}</div>
                <div className="text-josh-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-josh-blue via-josh-teal to-josh-orange rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join Our Next Weekend Adventure
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-medium">
              Every Saturday morning, we kick off with coffee, ideas, and endless possibilities. 
              By Sunday evening, we've built something incredible together.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-2xl text-lg font-semibold backdrop-blur-sm">
              <div className="w-3 h-3 bg-josh-teal-light rounded-full mr-3 animate-pulse"></div>
              Next Session: This Saturday 9 AM IST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendCulture;

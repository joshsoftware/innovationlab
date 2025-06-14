
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Sparkles, Rocket } from 'lucide-react';

const WeekendCulture = () => {
  const stats = [
    { icon: Clock, value: "48hrs", label: "Weekend Hackathons", color: "text-orange-600" },
    { icon: Users, value: "150+", label: "Active Members", color: "text-blue-600" },
    { icon: Sparkles, value: "80+", label: "Projects Launched", color: "text-purple-600" },
    { icon: Rocket, value: "12", label: "Months Running", color: "text-green-600" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weekend Innovation Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every weekend is an opportunity to create something amazing. We gather, ideate, code, and ship projects that matter, all while building lasting friendships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Next Weekend Adventure
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Every Saturday morning, we kick off with coffee, ideas, and endless possibilities. 
            By Sunday evening, we've built something incredible together.
          </p>
          <div className="text-sm opacity-80">
            Next Session: This Saturday 9 AM PST • Virtual & In-Person
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendCulture;

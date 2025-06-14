
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Rocket, Globe } from 'lucide-react';

const AIExperiments = () => {
  const experiments = [
    {
      title: "Neural Creative Assistant",
      description: "AI-powered tool that helps generate creative content and brainstorm ideas for weekend projects.",
      icon: Sparkles,
      status: "Active",
      gradient: "from-josh-blue to-josh-teal"
    },
    {
      title: "Code Companion Bot",
      description: "Smart coding assistant that learns from our open-source contributions and community patterns.",
      icon: Rocket,
      status: "Beta",
      gradient: "from-josh-teal to-josh-orange"
    },
    {
      title: "Innovation Predictor",
      description: "ML model that identifies trending technologies and suggests weekend hackathon themes.",
      icon: Globe,
      status: "Research",
      gradient: "from-josh-purple to-josh-blue"
    }
  ];

  return (
    <section className="py-32 bg-josh-gray-50/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            AI Experiments
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Our playground for artificial intelligence, where we push boundaries and explore what's possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden"
            >
              <CardHeader className="text-center pb-6 pt-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${experiment.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <experiment.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-josh-gray-900 mb-3">
                  {experiment.title}
                </CardTitle>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-josh-teal/10 to-josh-blue/10 text-josh-blue">
                  <div className="w-2 h-2 bg-josh-teal rounded-full mr-2 animate-pulse"></div>
                  {experiment.status}
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-josh-gray-600 text-center leading-relaxed text-base">
                  {experiment.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperiments;

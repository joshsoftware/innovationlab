
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
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Code Companion Bot",
      description: "Smart coding assistant that learns from our open-source contributions and community patterns.",
      icon: Rocket,
      status: "Beta",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Innovation Predictor",
      description: "ML model that identifies trending technologies and suggests weekend hackathon themes.",
      icon: Globe,
      status: "Research",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Experiments in Motion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our playground for artificial intelligence, where we push boundaries and explore what's possible when curiosity meets cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${experiment.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <experiment.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{experiment.title}</CardTitle>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                  {experiment.status}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
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

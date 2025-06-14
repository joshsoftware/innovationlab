
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Globe } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      name: "WeekendJS",
      description: "A lightweight framework for rapid prototyping during hackathons",
      stars: "2.3k",
      contributors: "45",
      language: "JavaScript",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      name: "AI-Toolkit",
      description: "Collection of ML utilities and helpers for weekend warriors",
      stars: "1.8k",
      contributors: "32",
      language: "Python",
      color: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      name: "InnovateCLI",
      description: "Command-line tools for bootstrapping innovation projects",
      stars: "950",
      contributors: "28",
      language: "TypeScript",
      color: "bg-gradient-to-br from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Open Source Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Building in the open, sharing our learnings, and contributing to the global developer community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 rounded-3xl overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-display font-bold text-gray-900">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{project.stars}</span>
                  </div>
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white w-fit ${project.color}`}>
                  {project.language}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                  {project.description}
                </CardDescription>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="font-medium">{project.contributors} contributors</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-electric-600 to-indigo-600 hover:from-electric-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <Globe className="w-5 h-5 mr-3" />
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

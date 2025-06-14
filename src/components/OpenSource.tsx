
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
      language: "JavaScript"
    },
    {
      name: "AI-Toolkit",
      description: "Collection of ML utilities and helpers for weekend warriors",
      stars: "1.8k",
      contributors: "32",
      language: "Python"
    },
    {
      name: "InnovateCLI",
      description: "Command-line tools for bootstrapping innovation projects",
      stars: "950",
      contributors: "28",
      language: "TypeScript"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Source Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building in the open, sharing our learnings, and contributing to the global developer community. Our weekend projects become tools for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-between">
                  {project.name}
                  <div className="flex items-center text-yellow-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{project.stars}</span>
                  </div>
                </CardTitle>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 w-fit">
                  {project.language}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{project.contributors} contributors</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
            <Globe className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

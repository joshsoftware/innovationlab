
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const OpenSource = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            Open Source Impact
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Building in the open, sharing our learnings, and contributing to the global developer community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.slug}`} key={index} className="block h-full">
              <Card 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 rounded-3xl overflow-hidden h-full flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-display font-bold text-josh-gray-900">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-josh-gray-600">
                      <Star className="w-4 h-4 text-josh-orange fill-current" />
                      <span className="text-sm font-semibold">{project.stars}</span>
                    </div>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white w-fit ${project.color}`}>
                    {project.language}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow">
                  <CardDescription className="text-josh-gray-600 mb-6 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                  <div className="mt-auto flex items-center text-josh-gray-500 text-sm">
                      <div className="flex -space-x-2 overflow-hidden mr-3">
                          {project.contributors.map((c, i) => (
                              <Avatar key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
                                  <AvatarImage src={c.avatar} alt={c.name} />
                                  <AvatarFallback>{c.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                          ))}
                      </div>
                      <span className="font-medium">{project.contributors.length} contributors</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-josh-teal to-josh-blue hover:from-josh-teal-light hover:to-josh-blue-light text-white font-semibold px-10 py-4 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
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

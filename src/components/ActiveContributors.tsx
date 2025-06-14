
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Trophy, Star } from 'lucide-react';

const ActiveContributors = () => {
  const contributors = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg",
      contributions: 47,
      expertise: ["React", "Node.js", "AI/ML"],
      achievement: "Weekend Warrior",
      color: "from-josh-blue to-josh-teal"
    },
    {
      name: "Arjun Patel",
      role: "Backend Engineer",
      avatar: "/placeholder.svg",
      contributions: 32,
      expertise: ["Python", "Django", "DevOps"],
      achievement: "Innovation Lead",
      color: "from-josh-teal to-josh-orange"
    },
    {
      name: "Sneha Reddy",
      role: "Frontend Specialist",
      avatar: "/placeholder.svg",
      contributions: 41,
      expertise: ["Vue.js", "TypeScript", "UI/UX"],
      achievement: "Design Pioneer",
      color: "from-josh-orange to-josh-purple"
    },
    {
      name: "Rahul Kumar",
      role: "DevOps Engineer",
      avatar: "/placeholder.svg",
      contributions: 28,
      expertise: ["Docker", "Kubernetes", "AWS"],
      achievement: "Cloud Expert",
      color: "from-josh-purple to-josh-blue"
    },
    {
      name: "Anita Singh",
      role: "Data Scientist",
      avatar: "/placeholder.svg",
      contributions: 35,
      expertise: ["Python", "TensorFlow", "Analytics"],
      achievement: "AI Innovator",
      color: "from-josh-blue to-josh-teal"
    },
    {
      name: "Vikram Gupta",
      role: "Mobile Developer",
      avatar: "/placeholder.svg",
      contributions: 24,
      expertise: ["React Native", "Flutter", "iOS"],
      achievement: "Mobile Maven",
      color: "from-josh-teal to-josh-orange"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            Active Contributors
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Meet the brilliant minds driving innovation at Josh Software. Our weekend warriors and weekday heroes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contributors.map((contributor, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${contributor.color} p-1 transform group-hover:scale-110 transition-all duration-300`}>
                    <Avatar className="w-full h-full">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback className="bg-white text-josh-gray-900 font-display font-bold text-lg">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-josh-orange text-white rounded-full p-2 shadow-lg">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-josh-gray-900 mb-2">
                  {contributor.name}
                </h3>
                <p className="text-josh-gray-600 mb-4 font-medium">
                  {contributor.role}
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Github className="w-4 h-4 text-josh-gray-500" />
                  <span className="text-josh-gray-600 font-semibold">
                    {contributor.contributions} contributions
                  </span>
                  <Star className="w-4 h-4 text-josh-orange fill-current ml-1" />
                </div>
                
                <Badge className="bg-gradient-to-r from-josh-teal/10 to-josh-blue/10 text-josh-blue border-0 mb-4 font-semibold">
                  {contributor.achievement}
                </Badge>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {contributor.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-josh-gray-100 text-josh-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-josh-blue/5 to-josh-teal/5 rounded-2xl">
            <div className="w-3 h-3 bg-josh-teal rounded-full mr-3 animate-pulse"></div>
            <span className="text-josh-gray-700 font-semibold">
              Want to see your name here? Join our next weekend hackathon!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveContributors;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowLeft } from 'lucide-react';
import NotFound from './NotFound';

const ProjectDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-josh-gray-600 hover:text-josh-blue font-semibold">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <main>
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-4xl font-display font-bold text-josh-gray-900">{project.name}</h1>
                            <div className="flex items-center space-x-1 text-josh-gray-600">
                                <Star className="w-5 h-5 text-josh-orange fill-current" />
                                <span className="text-lg font-semibold">{project.stars}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white w-fit ${project.color}`}>
                                {project.language}
                            </div>
                            <Badge variant={project.status === 'Active' ? 'default' : 'secondary'} className={project.status === 'Active' ? 'bg-josh-teal hover:bg-josh-teal/90 text-white border-transparent' : 'bg-josh-gray-400 text-white border-transparent'}>
                                {project.status}
                            </Badge>
                        </div>
                        <p className="text-lg text-josh-gray-600 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    
                    <div>
                         <h2 className="text-2xl font-display font-bold text-josh-gray-900 mb-4">Contributors</h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.contributors.map((contributor, index) => (
                                <Card key={index} className="bg-josh-gray-50/50 border-0 rounded-xl">
                                    <CardContent className="p-4 flex items-center gap-4">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={contributor.avatar} alt={contributor.name}/>
                                            <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold text-josh-gray-900">{contributor.name}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                         </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProjectDetailPage;

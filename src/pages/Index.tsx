
import React from 'react';
import Hero from '@/components/Hero';
import AIExperiments from '@/components/AIExperiments';
import OpenSource from '@/components/OpenSource';
import WeekendCulture from '@/components/WeekendCulture';
import Community from '@/components/Community';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIExperiments />
      <OpenSource />
      <WeekendCulture />
      <Community />
    </div>
  );
};

export default Index;

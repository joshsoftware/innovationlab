
import React from 'react';
import Hero from '@/components/Hero';
import AIExperiments from '@/components/AIExperiments';
import OpenSource from '@/components/OpenSource';
import ActiveContributors from '@/components/ActiveContributors';
import WeekendCulture from '@/components/WeekendCulture';
import Community from '@/components/Community';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIExperiments />
      <OpenSource />
      <ActiveContributors />
      <WeekendCulture />
      <Community />
    </div>
  );
};

export default Index;

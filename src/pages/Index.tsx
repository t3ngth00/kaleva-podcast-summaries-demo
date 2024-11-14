import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KalevaLogo } from '@/components/KalevaLogo';
import { VoiceControl } from '@/components/VoiceControl';
import { Headphones } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl animate-fade-up">
        <div className="flex justify-center mb-16">
          <KalevaLogo />
        </div>
        
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-kaleva-red/10 text-kaleva-red text-sm font-medium mb-6">
            New Feature
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Podcast Summaries
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the key insights from Kaleva's podcasts and news, perfectly summarized for social media sharing. Control everything with just your voice.
          </p>
          
          <button
            onClick={() => navigate('/podcast-summary')}
            className="inline-flex items-center px-8 py-4 bg-kaleva-red text-white rounded-lg button-hover gap-2"
          >
            <Headphones className="h-5 w-5" />
            <span>Start Listening</span>
          </button>
        </div>
      </div>
      
      <VoiceControl />
    </div>
  );
};

export default Index;
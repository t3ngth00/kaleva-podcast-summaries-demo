import React, { useState } from 'react';
import { KalevaLogo } from '@/components/KalevaLogo';
import { VoiceControl } from '@/components/VoiceControl';
import { Play, Share2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PodcastSummary = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<'weekly' | 'monthly'>('weekly');

  const summaries = [
    {
      title: "Climate Change Impact in Northern Finland",
      date: "March 15, 2024",
      duration: "5 min summary",
      original: "45 min podcast",
      thumbnail: "https://picsum.photos/400/200",
    },
    {
      title: "Local Business Innovation Report",
      date: "March 14, 2024",
      duration: "4 min summary",
      original: "35 min podcast",
      thumbnail: "https://picsum.photos/400/201",
    },
    // Add more summaries as needed
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-600 hover:text-kaleva-red transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <KalevaLogo />
        </div>

        <div className="glass-panel rounded-2xl p-8 mb-8">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelectedPeriod('weekly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedPeriod === 'weekly'
                  ? 'bg-kaleva-red text-white'
                  : 'bg-kaleva-gray text-gray-600'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setSelectedPeriod('monthly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedPeriod === 'monthly'
                  ? 'bg-kaleva-red text-white'
                  : 'bg-kaleva-gray text-gray-600'
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {summaries.map((summary, index) => (
              <div
                key={index}
                className="glass-panel rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={summary.thumbnail}
                  alt={summary.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{summary.date}</span>
                    <span className="text-sm text-kaleva-red">{summary.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{summary.title}</h3>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-kaleva-red text-white rounded-lg button-hover">
                      <Play className="h-4 w-4" />
                      Play Summary
                    </button>
                    <button className="p-2 text-gray-600 hover:text-kaleva-red transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <VoiceControl />
    </div>
  );
};

export default PodcastSummary;
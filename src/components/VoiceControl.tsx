import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

export const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition logic would go here
    setFeedback(isListening ? 'Voice control deactivated' : 'Listening for commands...');
  };

  return (
    <div className="fixed bottom-8 right-8 animate-fade-in">
      <button
        onClick={toggleListening}
        className="glass-panel p-4 rounded-full button-hover"
        aria-label="Toggle voice control"
      >
        {isListening ? (
          <Mic className="h-6 w-6 text-kaleva-red" />
        ) : (
          <MicOff className="h-6 w-6 text-gray-400" />
        )}
      </button>
      {feedback && (
        <div className="absolute bottom-full mb-2 right-0 glass-panel px-4 py-2 rounded-lg text-sm">
          {feedback}
        </div>
      )}
    </div>
  );
};
'use client';

import { useState } from 'react';
import { getOpenAIResponse } from '../api/open-ai';

export default function ChatBot() {
  const [aiResponse, setAiResponse] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAiResponse('');
    try {
      const response = await getOpenAIResponse(userInput);
      setAiResponse(response);
    } catch {
      setAiResponse('Error fetching response.');
    }
    setLoading(false);
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 mb-2"
      >
        <svg 
          className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      <div className={`
        bg-gray-800 rounded-lg p-4 w-80
        transform transition-all duration-300 origin-bottom
        ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}
      `}>
        <h2 className="text-xl font-bold mb-3">Chat with Rio&apos;s AI</h2>
        <form onSubmit={handleSubmit} className="mb-3 flex">
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className="flex-1 rounded-l px-2 py-1 text-black"
            placeholder="Ask a question..."
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-r"
            disabled={loading || !userInput.trim()}
          >
            Send
          </button>
        </form>
        <div className="text-white whitespace-pre-line min-h-[2rem]">
          {loading ? 'Loading...' : aiResponse}
        </div>
      </div>
    </div>
  );
}
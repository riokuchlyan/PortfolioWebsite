'use client';

import { useState } from 'react';

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
      const response = await fetch('/api/open-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput }),
      });
      const data = await response.json();
      setAiResponse(data.choices?.[0]?.message?.content || 'No response');
    } catch {
      setAiResponse('Error fetching response.');
    }
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-colors rounded-full p-2 mb-2 shadow-none focus:outline-none"
        aria-label={isExpanded ? 'Close chat' : 'Open chat'}
      >
        <svg 
          className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      <div className={`
        bg-gray-900 border border-gray-700 rounded-xl p-4 w-80
        transition-all duration-300 origin-bottom shadow-lg
        ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 pointer-events-none'}
      `}>
        <h2 className="text-lg font-semibold mb-2 text-gray-200 tracking-tight">Chat with Rio&apos;s AI</h2>
        <form onSubmit={handleSubmit} className="mb-2 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className="flex-1 rounded bg-gray-800 border border-gray-700 px-3 py-1 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition min-w-0"
            placeholder="Ask a question..."
            disabled={loading}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 w-20"
            disabled={loading || !userInput.trim()}
          >
            Send
          </button>
        </form>
        <div className="text-gray-300 text-sm min-h-[2rem] whitespace-pre-line">
          {loading ? 'Loading...' : aiResponse}
        </div>
      </div>
    </div>
  );
}
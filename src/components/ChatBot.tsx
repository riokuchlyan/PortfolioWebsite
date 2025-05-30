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
    <div className="flex flex-col items-center">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-card border border-border hover:border-accent transition-all duration-200 rounded-xl px-4 py-2 mb-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 group"
        aria-label={isExpanded ? 'Close chat' : 'Open chat'}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors">
            Chat with Rio's AI
          </span>
          <svg 
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''} text-muted group-hover:text-accent`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`
        bg-card border border-border rounded-xl p-6 w-full max-w-md
        transition-all duration-300 origin-top shadow-lg
        ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 pointer-events-none overflow-hidden'}
      `}>
        <h3 className="text-lg font-semibold mb-4 tracking-tight">Ask me anything</h3>
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className="flex-1 rounded-lg bg-background border border-border px-3 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition min-w-0"
            placeholder="Ask a question..."
            disabled={loading}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            disabled={loading || !userInput.trim()}
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
        <div className="text-muted text-sm min-h-[3rem] whitespace-pre-line border-t border-border pt-4">
          {loading ? 'Thinking...' : aiResponse || 'Ask me about Rio, his projects, or anything else!'}
        </div>
      </div>
    </div>
  );
}
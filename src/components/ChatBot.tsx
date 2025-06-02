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
        className="bg-card/80 border border-border hover:border-accent transition-all duration-300 rounded-2xl px-6 py-3 mb-6 shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 group hover:scale-105 hover:shadow-xl"
        aria-label={isExpanded ? 'Close chat' : 'Open chat'}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors font-medium">
              Chat with Rio&apos;s AI
            </span>
          </div>
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} text-muted group-hover:text-accent`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`
        bg-card/90 border border-border rounded-2xl p-8 w-full max-w-lg
        transition-all duration-500 origin-top shadow-xl backdrop-blur-md
        ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 pointer-events-none overflow-hidden'}
      `}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">Ask me anything</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className="flex-1 rounded-xl bg-background/50 border border-border px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 min-w-0 backdrop-blur-sm"
            placeholder="Ask a question..."
            disabled={loading}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 font-medium hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            disabled={loading || !userInput.trim()}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </form>
        
        <div className="bg-background/30 rounded-xl p-4 border border-border/50 backdrop-blur-sm">
          <div className="text-card-foreground text-sm min-h-[4rem] whitespace-pre-line leading-relaxed">
            {loading ? (
              <div className="flex items-center gap-2 text-muted">
                <div className="w-4 h-4 border-2 border-muted/30 border-t-muted rounded-full animate-spin"></div>
                Thinking...
              </div>
            ) : aiResponse ? (
              aiResponse
            ) : (
              <span className="text-muted">Ask me about Rio, his projects, experience, or anything else!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
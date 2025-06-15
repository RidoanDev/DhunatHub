
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, X } from 'lucide-react';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const callAPI = async (prompt: string) => {
    setIsLoading(true);
    try {
      const apiUrl =
        'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      return 'Sorry, there was an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await callAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content:
          'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  // Floating ghost icon (simple SVG for demonstration)
  const GhostIcon = ({ size = 24, className = '', isFloating = true }) => (
    <svg 
      className={`ghost-icon ${className} ${isFloating ? 'animate-float' : ''}`}
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
    >
      <path 
        d="M12 2C6.48 2 2 6.48 2 12v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.52-4.48-10-10-10zm0 18H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8v6h-8zm-4-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4-5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" 
        fill="currentColor"
      />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <path 
        d="M10 17h4v1.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V17z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div
      // নিচের ন্যাভ বারের ঠিক ওপর, মোবাইলে/ডেস্কটপে যেন গ্যাপ থাকে: bottom-24 ভালো
      className="fixed bottom-24 right-6 flex flex-col items-end gap-2 z-[9999] sm:bottom-24"
      ref={containerRef}
    >
      {/* Main Ghost Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-colors duration-300"
        title="Open Ghost AI"
        style={{
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.7)'
        }}
      >
        <GhostIcon size={24} isFloating={false} />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-5 right-6 w-96 max-w-[90vw] bg-gray-900 rounded-lg shadow-xl z-[9999] flex flex-col max-h-[440px] border border-purple-500">
          {/* Chat Header */}
          <div className="bg-purple-800 text-white p-3 rounded-t-lg flex justify-between items-center border-b border-purple-500">
            <div className="flex items-center gap-3">
              <GhostIcon className="w-6 h-6" isFloating={false} />
              <h2 className="font-bold text-lg">Ghost AI</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px] bg-gray-800">
            {messages.length === 0 && (
              <div className="text-center text-purple-100 mt-8">
                <div className="mb-4">
                  <GhostIcon className="w-16 h-16 mx-auto text-purple-300" />
                </div>
                <p className="text-xl font-medium">Boo! 👻</p>
                <p className="text-purple-200 mt-2">
                  I'm Ghost AI.<br/>Ask me anything!
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <GhostIcon className="w-5 h-5 text-white" isFloating={false} />
                  )}
                </div>
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-700 text-purple-50 shadow-[0_0_8px_rgba(147,51,234,0.3)]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className="text-xs mt-2 opacity-70 text-right">
                    {message.timestamp &&
                      new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_8px_rgba(147,51,234,0.6)]">
                  <GhostIcon className="w-5 h-5 text-white" isFloating={false} />
                </div>
                <div className="bg-purple-700 rounded-xl px-4 py-3 shadow-[0_0_8px_rgba(147,51,234,0.3)] flex items-center gap-1">
                  <span className="animate-bounce block w-2 h-2 bg-purple-300 rounded-full"></span>
                  <span className="animate-bounce block w-2 h-2 bg-purple-300 rounded-full" style={{ animationDelay: '0.2s' }}></span>
                  <span className="animate-bounce block w-2 h-2 bg-purple-300 rounded-full" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t border-purple-700 p-3 bg-gray-900 rounded-b-lg">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the ghost..."
                disabled={isLoading}
                className="flex-1 rounded-lg bg-gray-800 text-white border border-purple-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-purple-300"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_8px_rgba(147,51,234,0.5)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations for ghost and bounce */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}
      </style>
    </div>
  );
};

export default LiveChat;

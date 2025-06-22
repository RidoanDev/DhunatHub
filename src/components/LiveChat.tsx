import React, { useState, useRef, useEffect } from 'react';
import { Send, User, X } from 'lucide-react';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface LiveChatProps {
  apiEndpoint?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  title?: string;
  initialMessage?: string;
  ghostIcon?: React.ReactNode;
  showTimestamp?: boolean;
}

const LiveChat: React.FC<LiveChatProps> = ({
  apiEndpoint = process.env.REACT_APP_CHAT_API || 'https://your-default-api-endpoint.com',
  position = 'bottom-right',
  primaryColor = 'purple',
  title = 'Ghost AI',
  initialMessage = "Boo! 👻\nI'm Ghost AI.\nAsk me anything!",
  ghostIcon,
  showTimestamp = true,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load saved messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('ghost-ai-messages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        'ghost-ai-messages',
        JSON.stringify(messages.map(msg => ({
          ...msg,
          timestamp: msg.timestamp.toISOString()
        })))
      );
    }
  }, [messages]);

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
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API call error:', error);
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
        content: 'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const clearConversation = () => {
    setMessages([]);
    localStorage.removeItem('ghost-ai-messages');
  };

  const positionClasses = {
    'bottom-right': 'bottom-24 right-6',
    'bottom-left': 'bottom-24 left-6',
    'top-right': 'top-24 right-6',
    'top-left': 'top-24 left-6',
  };

  const colorClasses = {
    purple: {
      bg: 'bg-purple-700',
      hover: 'hover:bg-purple-800',
      border: 'border-purple-500',
      text: 'text-purple-50',
      shadow: 'shadow-[0_0_8px_rgba(147,51,234,0.3)]',
      header: 'bg-purple-800',
    },
    blue: {
      bg: 'bg-blue-700',
      hover: 'hover:bg-blue-800',
      border: 'border-blue-500',
      text: 'text-blue-50',
      shadow: 'shadow-[0_0_8px_rgba(59,130,246,0.3)]',
      header: 'bg-blue-800',
    },
    green: {
      bg: 'bg-green-700',
      hover: 'hover:bg-green-800',
      border: 'border-green-500',
      text: 'text-green-50',
      shadow: 'shadow-[0_0_8px_rgba(34,197,94,0.3)]',
      header: 'bg-green-800',
    },
  };

  const colors = colorClasses[primaryColor as keyof typeof colorClasses] || colorClasses.purple;

  const GhostIcon = ({ size = 24, className = '', isFloating = true }) => (
    ghostIcon || (
      <svg 
        className={`ghost-icon ${className} ${isFloating ? 'animate-float' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 24 24"
        aria-hidden="true"
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
    )
  );

  return (
    <div
      className={`fixed ${positionClasses[position as keyof typeof positionClasses]} flex flex-col items-end gap-2 z-[9999]`}
      ref={containerRef}
    >
      <button
        onClick={() => setIsChatOpen(true)}
        className={`${colors.bg} text-white p-4 rounded-full shadow-lg ${colors.hover} transition-colors duration-300`}
        title="Open chat"
        aria-label="Open chat"
        style={{
          boxShadow: `0 0 15px ${colors.shadow}`
        }}
      >
        <GhostIcon size={24} isFloating={false} />
      </button>

      {isChatOpen && (
        <div className={`fixed bottom-5 right-6 w-96 max-w-[90vw] bg-gray-900 rounded-lg shadow-xl z-[9999] flex flex-col max-h-[440px] border ${colors.border}`}>
          <div className={`${colors.header} text-white p-3 rounded-t-lg flex justify-between items-center border-b ${colors.border}`}>
            <div className="flex items-center gap-3">
              <GhostIcon className="w-6 h-6" isFloating={false} />
              <h2 className="font-bold text-lg">{title}</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearConversation}
                className="text-white/70 hover:text-white transition-colors text-sm"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                Clear
              </button>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px] bg-gray-800">
            {messages.length === 0 && (
              <div className={`text-center ${colors.text} mt-8`}>
                <div className="mb-4">
                  <GhostIcon className="w-16 h-16 mx-auto text-opacity-70" />
                </div>
                <p className="text-xl font-medium">{initialMessage.split('\n')[0]}</p>
                <p className={`${colors.text} mt-2 opacity-80`}>
                  {initialMessage.split('\n').slice(1).join('\n')}
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
                      : `${colors.bg} ${colors.shadow}`
                  }`}
                  aria-label={message.role === 'user' ? 'User' : 'Assistant'}
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
                      : `${colors.bg} ${colors.text} ${colors.shadow}`
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                  {showTimestamp && (
                    <p className="text-xs mt-2 opacity-70 text-right">
                      {message.timestamp &&
                        new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-full ${colors.bg} flex items-center justify-center ${colors.shadow}`}>
                  <GhostIcon className="w-5 h-5 text-white" isFloating={false} />
                </div>
                <div className={`${colors.bg} rounded-xl px-4 py-3 ${colors.shadow} flex items-center gap-1`}>
                  <span className="animate-bounce block w-2 h-2 bg-opacity-70 rounded-full"></span>
                  <span className="animate-bounce block w-2 h-2 bg-opacity-70 rounded-full" style={{ animationDelay: '0.2s' }}></span>
                  <span className="animate-bounce block w-2 h-2 bg-opacity-70 rounded-full" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className={`border-t ${colors.border} p-3 bg-gray-900 rounded-b-lg`}>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-lg bg-gray-800 text-white border border-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-opacity-70"
                aria-label="Type your message"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`${colors.bg} text-white rounded-lg px-4 py-2 ${colors.hover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ${colors.shadow}`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

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

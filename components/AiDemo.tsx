"use client"

import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function AIDemo() {
  const [messages, setMessages] = useState<Array<{text: string; sender: 'bot' | 'user'}>>([
    { text: "Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen helfen?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Danke für Ihre Nachricht! Dies ist eine Demo-Version des KI-Chatbots. In der finalen Version werden hier intelligente, personalisierte Antworten erscheinen.",
        sender: 'bot'
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">KI-Chatbot Demo</h1>
          <p className="mt-4 text-gray-600">
            Erleben Sie die Zukunft der Kundenkommunikation mit unserem KI-Chatbot
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'bot' ? 'bg-blue-500' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'bot' ? 
                      <Bot className="w-5 h-5 text-white" /> : 
                      <User className="w-5 h-5 text-gray-600" />
                    }
                  </div>
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.sender === 'bot' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Schreiben Sie eine Nachricht..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, ViewMode } from '../types';

interface AIAssistantProps {
  currentView: ViewMode;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'model', text: '¡Hola! Soy el asistente virtual de Pilares. ¿Cómo puedo ayudarte hoy?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);
    const res = await getGeminiResponse(msg, `Área actual: ${currentView}`);
    setMessages(prev => [...prev, { role: 'model', text: res }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-[#1a2e4c] rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform">🤖</button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-[#1a2e4c] p-4 text-white font-bold flex items-center gap-3"><span className="text-xl">🏛️</span> Pilares AI</div>
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs ${m.role === 'user' ? 'bg-[#1a2e4c] text-white rounded-br-none' : 'bg-white shadow-sm border border-gray-200 rounded-bl-none'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Duda jurídica o inmobiliaria..." className="flex-grow p-2 text-xs outline-none bg-gray-100 rounded" />
            <button onClick={send} className="bg-[#a6894a] text-white p-2 rounded px-4 font-bold">➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
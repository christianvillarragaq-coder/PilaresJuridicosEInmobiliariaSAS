import React from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, ViewMode } from '../types';

interface AIAssistantProps {
  currentView: ViewMode;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([{ 
    role: 'model', 
    text: 'Bienvenido a Pilares Jurídicos e Inmobiliaria. Soy su asesor virtual. ¿En qué área puedo asistirle hoy?' 
  }]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);
    const res = await getGeminiResponse(msg, `El usuario está viendo la sección: ${currentView}`);
    setMessages(prev => [...prev, { role: 'model', text: res }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 bg-[#1a2e4c] rounded-full shadow-[0_10px_40px_rgba(26,46,76,0.4)] flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#d4af37]/30"
      >
        {isOpen ? '✕' : '🏛️'}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-gray-100 animate-fadeIn">
          {/* Header */}
          <div className="bg-[#1a2e4c] p-5 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]">⚖️</div>
              <div>
                <p className="font-serif font-bold text-sm leading-tight">Asesor Jurídico Virtual</p>
                <p className="text-[9px] text-[#d4af37] tracking-widest uppercase font-bold">Respaldo Integral</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-4 bg-[#f8f9fb]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed shadow-sm whitespace-pre-wrap ${
                  m.role === 'user' 
                  ? 'bg-[#1a2e4c] text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && send()} 
              placeholder="Escriba su consulta jurídica o inmobiliaria..." 
              className="flex-grow p-3 text-xs outline-none bg-gray-50 rounded-xl border border-gray-200 focus:border-[#d4af37] transition-colors" 
            />
            <button 
              onClick={send} 
              disabled={loading}
              className="bg-[#d4af37] text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#b8860b] disabled:opacity-50 transition-colors shadow-md"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
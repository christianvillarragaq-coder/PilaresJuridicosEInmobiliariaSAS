
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, ViewMode } from '../types';

interface AIAssistantProps {
  currentView: ViewMode;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de Pilares. ¿En qué área puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMsg, `Navegando en la sección: ${currentView}`);
      setMessages(prev => [...prev, { role: 'model', text: response || 'Lo siento, hubo un error procesando tu solicitud.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error de conexión. Inténtalo más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-900 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform relative"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <>
            <span className="text-3xl">🤖</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-blue-900 p-4 text-white flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-xl">🏛️</div>
            <div>
              <h3 className="font-bold text-sm">Asistente Pilares</h3>
              <p className="text-[10px] text-blue-200">Asesoría Inteligente 24/7</p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-900 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-2xl rounded-bl-none animate-pulse text-xs text-gray-500">
                  Escribiendo asesoría...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu consulta legal o inmobiliaria..."
              className="flex-grow p-2 bg-gray-100 rounded-lg text-sm outline-none focus:ring-1 focus:ring-gold transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-900 text-white p-2 rounded-lg hover:bg-gold transition-colors"
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

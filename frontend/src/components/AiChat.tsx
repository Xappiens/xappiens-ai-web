import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardContent } from './ui/card';
import { Mail, MessageSquare, Info, Book } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const welcomeMessage = "¡Bienvenido a Xappiens! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, formación, consultoría o cómo podemos ayudarte con la transformación digital e inteligencia artificial.";

const predefinedResponses = {
  servicios: "En Xappiens ofrecemos servicios de Transformación Digital, Desarrollo de Aplicaciones, Inteligencia Artificial, Formación, Consultoría, Interim Management de IT y Outsourcing. Nuestro objetivo es potenciar tu empresa con soluciones tecnológicas innovadoras adaptadas a tus necesidades.",
  
  contacto: "¡Nos encantaría hablar contigo! Puedes contactarnos por email a info@xappiens.com o llamarnos al +34 900 123 456. También puedes visitar nuestras oficinas en Madrid: Calle Innovación, 123, 28001.",
  
  ia: "En Xappiens somos expertos en soluciones de Inteligencia Artificial. Ofrecemos servicios de desarrollo de chatbots, sistemas de recomendación, análisis predictivo, procesamiento de lenguaje natural, visión artificial y automatización inteligente. ¿Te interesa alguna solución específica?",
  
  formacion: "Nuestros programas de formación están diseñados para capacitar a tu equipo en las últimas tecnologías y metodologías. Ofrecemos cursos en Inteligencia Artificial, Desarrollo Web, Cloud Computing, Gestión de Proyectos Ágiles y Transformación Digital. Los programas son personalizables según las necesidades de tu empresa.",
  
  transformacion: "La Transformación Digital es un proceso estratégico que integra tecnologías digitales en todas las áreas de negocio. En Xappiens te acompañamos en este viaje: analizamos tu situación actual, diseñamos una estrategia a medida, implementamos soluciones y te ayudamos con la gestión del cambio.",
};

const loaderMessageId = -1; // ID especial para el mensaje de loader

const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: welcomeMessage,
    isUser: false
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      const scrollContainer = scrollArea.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim() === '' || loading) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Añadir mensaje de loader IA
    setMessages(prev => [
      ...prev,
      { id: loaderMessageId, text: '', isUser: false }
    ]);

    // Prepara el historial para el backend
    const history = [...messages, userMessage].map(m => ({
      role: m.isUser ? 'user' : 'assistant',
      content: m.text
    }));

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });
      const data = await response.json();
      const aiText = data.aiMessage || 'Lo siento, no pude generar una respuesta.';
      setMessages(prev => [
        ...prev.filter(m => m.id !== loaderMessageId),
        { id: prev.length + 1, text: aiText, isUser: false }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev.filter(m => m.id !== loaderMessageId),
        { id: prev.length + 1, text: 'Error al conectar con la IA. Inténtalo de nuevo más tarde.', isUser: false }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handlePredefinedButtonClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default to avoid page scroll
    
    const type = e.currentTarget.getAttribute('data-type') as keyof typeof predefinedResponses;
    if (!type) return;
    
    const responseText = predefinedResponses[type];
    
    const aiResponse: Message = {
      id: messages.length + 1,
      text: responseText,
      isUser: false
    };
    
    setMessages(prev => [...prev, aiResponse]);
  };

  return (
    <Card className="w-full bg-white shadow-lg rounded-xl overflow-hidden border-xappiens-purple">
      <div className="bg-gradient-to-r from-xappiens-blue to-xappiens-purple p-4">
        <h2 className="text-white font-bold flex items-center">
          <MessageSquare className="mr-2" size={18} />
          Chat con IA de Xappiens
        </h2>
      </div>
      
      <ScrollArea ref={scrollAreaRef} className="h-[350px] p-4">
        <style>{`
          .dot-flashing {
            position: relative;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: #7c3aed;
            color: #7c3aed;
            animation: dotFlashing 1s infinite linear alternate;
            display: inline-block;
          }
          @keyframes dotFlashing {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `}</style>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.isUser
                    ? 'bg-xappiens-purple text-white rounded-tr-none'
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}
                style={!msg.isUser ? { whiteSpace: 'pre-line' } : {}}
              >
                {msg.id === loaderMessageId ? (
                  <span className="flex items-center gap-2">
                    <span className="dot-flashing"></span>
                    <span className="text-xs text-gray-500">Pensando...</span>
                  </span>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <CardContent className="p-4 border-t">
        <div className="flex gap-2 mb-3 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            data-type="servicios"
            onClick={handlePredefinedButtonClick}
            className="text-xs"
          >
            <Info className="mr-1 h-3 w-3" />
            Servicios
          </Button>
          <Button
            variant="outline"
            size="sm"
            data-type="contacto"
            onClick={handlePredefinedButtonClick}
            className="text-xs"
          >
            <Mail className="mr-1 h-3 w-3" />
            Contacto
          </Button>
          <Button
            variant="outline"
            size="sm"
            data-type="ia"
            onClick={handlePredefinedButtonClick}
            className="text-xs"
          >
            <Book className="mr-1 h-3 w-3" />
            IA
          </Button>
          <Button
            variant="outline"
            size="sm"
            data-type="formacion"
            onClick={handlePredefinedButtonClick}
            className="text-xs"
          >
            <Book className="mr-1 h-3 w-3" />
            Formación
          </Button>
          <Button
            variant="outline"
            size="sm"
            data-type="transformacion"
            onClick={handlePredefinedButtonClick}
            className="text-xs"
          >
            <Info className="mr-1 h-3 w-3" />
            Digital
          </Button>
        </div>
        
        <form onSubmit={handleSend} className="flex gap-2">
          <Input
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            disabled={loading}
          />
          <Button type="submit" className="bg-xappiens-purple hover:bg-xappiens-blue" disabled={loading}>
            {loading ? 'Pensando...' : 'Enviar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AiChat;

import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardContent } from './ui/card';
import { Mail, MessageSquare, Info, Book, services } from 'lucide-react';

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

const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: welcomeMessage,
    isUser: false
  }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI processing
    setTimeout(() => {
      let responseText = "Gracias por tu mensaje. Uno de nuestros expertos se pondrá en contacto contigo pronto para ayudarte con tu consulta específica.";
      
      // Simple keyword matching
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('servicio') || lowerInput.includes('ofrece')) {
        responseText = predefinedResponses.servicios;
      } else if (lowerInput.includes('contacto') || lowerInput.includes('email') || lowerInput.includes('teléfono')) {
        responseText = predefinedResponses.contacto;
      } else if (lowerInput.includes('inteligencia artificial') || lowerInput.includes('ia') || lowerInput.includes('ai')) {
        responseText = predefinedResponses.ia;
      } else if (lowerInput.includes('formacion') || lowerInput.includes('curso') || lowerInput.includes('capacitación')) {
        responseText = predefinedResponses.formacion;
      } else if (lowerInput.includes('transformacion') || lowerInput.includes('digital')) {
        responseText = predefinedResponses.transformacion;
      }
      
      const aiResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        isUser: false
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const handlePredefinedButtonClick = (type: keyof typeof predefinedResponses) => {
    const responseText = predefinedResponses[type];
    
    const aiResponse: Message = {
      id: messages.length + 1,
      text: responseText,
      isUser: false
    };
    
    setMessages(prev => [...prev, aiResponse]);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border-xappiens-purple">
      <div className="bg-gradient-to-r from-xappiens-blue to-xappiens-purple p-4">
        <h2 className="text-white font-bold flex items-center">
          <MessageSquare className="mr-2" size={18} />
          Chat con IA de Xappiens
        </h2>
      </div>
      
      <ScrollArea className="h-[400px] p-4">
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
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <CardContent className="p-4 border-t">
        <div className="flex gap-2 mb-3 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePredefinedButtonClick('servicios')}
            className="text-xs"
          >
            <services className="mr-1 h-3 w-3" />
            Servicios
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePredefinedButtonClick('contacto')}
            className="text-xs"
          >
            <Mail className="mr-1 h-3 w-3" />
            Contacto
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePredefinedButtonClick('ia')}
            className="text-xs"
          >
            <Book className="mr-1 h-3 w-3" />
            IA
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePredefinedButtonClick('formacion')}
            className="text-xs"
          >
            <Book className="mr-1 h-3 w-3" />
            Formación
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePredefinedButtonClick('transformacion')}
            className="text-xs"
          >
            <Info className="mr-1 h-3 w-3" />
            Digital
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Input
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-xappiens-purple hover:bg-xappiens-blue">
            Enviar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiChat;

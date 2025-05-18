import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, Info, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      toast.error('No se pudo inicializar reCAPTCHA.');
      return;
    }
    const token = await executeRecaptcha('contact_form');
    if (!token) {
      toast.error('Por favor, verifica el captcha.');
      return;
    }
    // Aquí puedes enviar el token junto con el formulario al backend
    console.log('Form submitted:', { ...formData, recaptchaToken: token });
    toast.success('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <Input 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <Input 
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono
        </label>
        <Input 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+34 XXX XXX XXX"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Empresa
        </label>
        <Input 
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Nombre de tu empresa"
        />
      </div>
      
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
          ¿En qué estás interesado? *
        </label>
        <Select value={formData.interest} onValueChange={handleSelectChange} required>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transformacion-digital">Transformación Digital</SelectItem>
            <SelectItem value="inteligencia-artificial">Inteligencia Artificial</SelectItem>
            <SelectItem value="desarrollo-aplicaciones">Desarrollo de Aplicaciones</SelectItem>
            <SelectItem value="formacion">Formación</SelectItem>
            <SelectItem value="consultoria">Consultoría</SelectItem>
            <SelectItem value="outsourcing">Outsourcing</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje *
        </label>
        <Textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="¿En qué podemos ayudarte?"
          rows={5}
        />
      </div>
      
      <Button type="submit" className="w-full bg-xappiens-purple hover:bg-xappiens-blue">
        Enviar mensaje
      </Button>
    </form>
  );
};

const Contacto = () => {
  console.log("RECAPTCHA KEY:", process.env.VITE_RECAPTCHA_SITE_KEY);
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.VITE_RECAPTCHA_SITE_KEY || ''} language="es">
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Contacto</h1>
              <p className="text-lg max-w-3xl mx-auto">
                ¿Tienes alguna pregunta o quieres saber más sobre nuestros servicios?
                Estaremos encantados de ayudarte.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
                <p className="text-gray-600 mb-8">
                  Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
                <ContactForm />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
                <p className="text-gray-600 mb-8">
                  Puedes contactarnos directamente a través de los siguientes medios:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@xappiens.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-600">+34 614 230 720</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple mr-4">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Chat en vivo</h3>
                      <p className="text-gray-600">Disponible de lunes a viernes, de 9:00 a 18:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://wa.me/34614230720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-center text-lg transition-colors flex items-center justify-center gap-3"
                    title="Contactar por WhatsApp"
                  >
                    <MessageCircle size={28} />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </GoogleReCaptchaProvider>
  );
};

export default Contacto;

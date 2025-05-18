require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const FRAPPE_API_URL = "https://xappiens.frappe.cloud/api/resource/CRM%20Lead";

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, interest, message, recaptchaToken } = req.body;
  console.log('--- Nueva petición /api/contact ---');
  console.log('Datos recibidos:', { name, email, phone, company, interest, message });

  // 1. Validar reCAPTCHA
  try {
    const recaptchaRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );
    console.log('Respuesta reCAPTCHA:', recaptchaRes.data);
    if (!recaptchaRes.data.success || recaptchaRes.data.score < 0.5) {
      console.log('Fallo en la verificación de reCAPTCHA.');
      return res.status(400).json({ error: 'Fallo en la verificación de reCAPTCHA.' });
    }
  } catch (err) {
    console.log('Error al verificar reCAPTCHA:', err.response?.data || err.message);
    return res.status(500).json({ error: 'Error al verificar reCAPTCHA.' });
  }

  // 2. Crear Lead en Frappe
  try {
    const frappeRes = await axios.post(
      FRAPPE_API_URL,
      {
        lead_name: name,
        first_name: name,
        email,
        mobile_no: phone,
        organization: company,
        custom_message: message,
        source: "xappiens.com/escribenos",
        lead_owner: "abel@xappiens.com"
      },
      {
        headers: {
          Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Respuesta de Frappe:', frappeRes.data);
    return res.json({ success: true, frappe: frappeRes.data });
  } catch (err) {
    console.log('Error al crear el Lead en Frappe:', err.response?.data || err.message);
    return res.status(500).json({ error: 'Error al crear el Lead en Frappe.', details: err.response?.data || err.message });
  }
});

app.post('/api/ai-chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'No se recibió historial de mensajes.' });
  }

  // Insertar mensaje de sistema al inicio si no está
  const systemPrompt = {
    role: 'system',
    content: 'Eres el asistente virtual de Xappiens. Ayudas a empresas a digitalizarse, automatizar procesos y resolver dudas sobre tecnología, IA, formación y consultoría.'
  };
  let fullMessages = messages;
  if (!messages.find(m => m.role === 'system')) {
    fullMessages = [systemPrompt, ...messages];
  }

  try {
    const response = await axios.post(
      'https://api.deepseek.com/chat/completions',
      {
        model: 'deepseek-chat',
        messages: fullMessages,
        stream: false
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const aiMessage = response.data.choices?.[0]?.message?.content || 'Lo siento, no pude generar una respuesta.';
    res.json({ aiMessage });
  } catch (error) {
    console.error('Error al consultar DeepSeek:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al consultar la IA de DeepSeek.' });
  }
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
}); 
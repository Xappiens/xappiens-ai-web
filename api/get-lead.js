require('dotenv').config();
const axios = require('axios');

const FRAPPE_API_KEY = process.env.FRAPPE_API_KEY;
const FRAPPE_API_SECRET = process.env.FRAPPE_API_SECRET;
const LEAD_URL = 'https://xappiens.frappe.cloud/api/resource/CRM%20Lead/CRM-LEAD-2025-00016';

axios.get(LEAD_URL, {
  headers: {
    Authorization: `token ${FRAPPE_API_KEY}:${FRAPPE_API_SECRET}`,
    'Content-Type': 'application/json',
  }
})
.then(res => {
  console.log(JSON.stringify(res.data, null, 2));
})
.catch(err => {
  if (err.response) {
    console.error('Error:', err.response.status, err.response.data);
  } else {
    console.error('Error:', err.message);
  }
}); 
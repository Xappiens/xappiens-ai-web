# Despliegue

## Requisitos Previos

- Node.js 18+
- PM2
- Nginx
- Git

## Estructura de Despliegue

```
/var/www/
├── frontend/          # Build de React
├── api/              # Servicio Express
├── nginx/            # Configuración Nginx
└── deploy.sh         # Script de despliegue
```

## Script de Despliegue

### deploy.sh
```bash
#!/bin/bash

# Variables
VERSION=$(node -p "require('./frontend/package.json').version")
FRONTEND_DIR="/var/www/frontend"
API_DIR="/var/www/api"

# Limpiar builds anteriores
rm -rf $FRONTEND_DIR/dist

# Build Frontend
cd $FRONTEND_DIR
npm install
export VITE_RECAPTCHA_SITE_KEY="your_site_key"
npm run build

# Build Backend
cd $API_DIR
npm install
npm run build

# Reiniciar servicios
pm2 restart xappiens-api
```

## Configuración de Nginx

### /etc/nginx/sites-available/xappiens
```nginx
server {
    listen 80;
    server_name xappiens.com www.xappiens.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name xappiens.com www.xappiens.com;

    ssl_certificate /etc/letsencrypt/live/xappiens.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xappiens.com/privkey.pem;

    # Frontend
    location / {
        root /var/www/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Variables de Entorno

### Frontend (.env)
```env
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

### Backend (.env)
```env
PORT=3001
NODE_ENV=production
FRAPPE_API_URL=https://xappiens.frappe.cloud
FRAPPE_API_KEY=your_api_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

## Proceso de Despliegue

1. **Preparación**
   - Actualizar código
   - Verificar variables de entorno
   - Hacer backup de datos críticos

2. **Build**
   - Limpiar builds anteriores
   - Instalar dependencias
   - Compilar frontend y backend

3. **Despliegue**
   - Copiar archivos
   - Reiniciar servicios
   - Verificar logs

4. **Verificación**
   - Comprobar frontend
   - Probar API
   - Validar formularios

## Monitoreo

### PM2
```bash
# Ver logs
pm2 logs xappiens-api

# Monitoreo en tiempo real
pm2 monit

# Estado de servicios
pm2 status
```

### Nginx
```bash
# Ver logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# Verificar configuración
nginx -t
```

## Mantenimiento

### Actualizaciones
1. Pull de cambios
2. Actualizar dependencias
3. Rebuild
4. Reiniciar servicios

### Backups
- Configuración Nginx
- Variables de entorno
- Logs importantes

### Limpieza
- Logs antiguos
- Builds anteriores
- Caché

## Troubleshooting

### Problemas Comunes
1. **Frontend no carga**
   - Verificar build
   - Comprobar Nginx
   - Revisar SSL

2. **API no responde**
   - Verificar PM2
   - Comprobar logs
   - Validar puertos

3. **Formularios fallan**
   - Verificar reCAPTCHA
   - Comprobar variables
   - Revisar logs

### Comandos Útiles
```bash
# Reiniciar todo
./deploy.sh

# Solo frontend
cd frontend && npm run build

# Solo backend
cd api && npm run build && pm2 restart xappiens-api

# Ver logs
pm2 logs
tail -f /var/log/nginx/error.log
``` 
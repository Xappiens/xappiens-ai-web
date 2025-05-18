# Backend

## Tecnologías

- Node.js
- Express
- TypeScript
- PM2
- Axios

## Estructura del Servicio

```
api/
├── src/
│   ├── controllers/    # Lógica de negocio
│   ├── routes/        # Definición de rutas
│   ├── services/      # Servicios externos
│   ├── config/        # Configuración
│   └── utils/         # Utilidades
```

## API Endpoints

### POST /api/contact
Procesa el formulario de contacto y crea un Lead en Frappe.

#### Request
```typescript
interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  recaptchaToken: string;
}
```

#### Response
```typescript
interface ContactResponse {
  success: boolean;
  message: string;
  leadId?: string;
}
```

## Integración con Frappe

### Configuración
```typescript
// .env
FRAPPE_API_URL=https://xappiens.frappe.cloud
FRAPPE_API_KEY=your_api_key
```

### Mapeo de Campos
```typescript
const leadMapping = {
  first_name: 'name',
  email_id: 'email',
  phone: 'phone',
  company_name: 'company',
  description: 'message',
  source: 'Website',
  lead_owner: 'Administrator'
};
```

## Validación de reCAPTCHA

### Configuración
```typescript
// .env
RECAPTCHA_SECRET_KEY=your_secret_key
```

### Proceso de Validación
1. Recibir token del frontend
2. Verificar con Google reCAPTCHA API
3. Validar score (threshold: 0.5)
4. Procesar formulario si es válido

## Manejo de Errores

### Tipos de Errores
- Validación de datos
- Error de reCAPTCHA
- Error de Frappe API
- Error interno

### Logging
- Timestamp
- Tipo de error
- Detalles del error
- Stack trace (en desarrollo)

## Seguridad

### Middleware
- CORS configurado
- Rate limiting
- Validación de datos
- Sanitización de inputs

### Variables de Entorno
- Claves API en .env
- No expuestas en logs
- Validación al inicio

## Despliegue

### PM2
```bash
pm2 start api/src/index.ts --name xappiens-api
```

### Scripts
```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run start
```

## Monitoreo

### Logs
- Acceso a endpoints
- Errores de validación
- Errores de API
- Tiempo de respuesta

### Métricas
- Tasa de éxito
- Tiempo de respuesta
- Uso de memoria
- CPU usage

## Pruebas

### Unitarias
- Validación de datos
- Procesamiento de formularios
- Integración con reCAPTCHA

### Integración
- Flujo completo
- Errores de API
- Timeouts

## Mejores Prácticas

1. **Código**
   - TypeScript estricto
   - Async/await
   - Manejo de promesas
   - Documentación de funciones

2. **Seguridad**
   - Validación de inputs
   - Sanitización de datos
   - Rate limiting
   - CORS configurado

3. **Rendimiento**
   - Caché cuando sea posible
   - Timeouts configurados
   - Manejo de conexiones
   - Logging optimizado

4. **Mantenibilidad**
   - Código modular
   - Documentación clara
   - Tests automatizados
   - Logging estructurado 
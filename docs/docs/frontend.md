# Frontend

## Tecnologías

- React 18
- TypeScript
- Vite
- TailwindCSS
- react-google-recaptcha-v3

## Estructura de Componentes

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── config/        # Configuración
│   └── assets/        # Recursos estáticos
```

## Componentes Principales

### Navbar
- Navegación principal
- Menú responsive
- Integración con rutas

### Footer
- Información de contacto
- Enlaces de redes sociales
- Mapa del sitio

### ServiceCard
- Presentación de servicios
- Diseño consistente
- Animaciones

## Páginas

### Index
- Hero section
- Servicios destacados
- Casos de éxito

### Servicios
- Listado de servicios
- Descripciones detalladas
- Formulario de contacto

### Transformación Digital
- Línea de tiempo
- Proceso de transformación
- Beneficios

### Formación
- Catálogo de cursos
- Imágenes específicas
- Información de contacto

### Contacto
- Formulario con reCAPTCHA
- Validación de campos
- Integración con backend

## Integración de reCAPTCHA

### Configuración
```typescript
// .env
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

### Implementación
```typescript
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// En el componente principal
<GoogleReCaptchaProvider
  reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
>
  <App />
</GoogleReCaptchaProvider>
```

### Uso en Formularios
```typescript
const { executeRecaptcha } = useGoogleReCaptcha();

const handleSubmit = async () => {
  const token = await executeRecaptcha('contact_form');
  // Enviar token con el formulario
};
```

## Configuración de Vite

### Variables de Entorno
- Prefijo `VITE_` para variables públicas
- Configuración en `vite.config.ts`
- Exportación en build

### Optimizaciones
- Code splitting
- Lazy loading de componentes
- Optimización de imágenes
- Minificación de assets

## Estilos

### TailwindCSS
- Sistema de diseño consistente
- Componentes personalizados
- Responsive design
- Dark mode (preparado)

## Despliegue

### Build
```bash
npm run build
```

### Variables de Entorno
- Configuración en `deploy.sh`
- Exportación automática
- Validación de variables requeridas

## Mejores Prácticas

1. **Componentes**
   - Componentes pequeños y reutilizables
   - Props tipadas con TypeScript
   - Documentación de props

2. **Estado**
   - Uso de hooks
   - Context API para estado global
   - Manejo de formularios con React Hook Form

3. **Rendimiento**
   - Memoización cuando sea necesario
   - Lazy loading de rutas
   - Optimización de imágenes

4. **Accesibilidad**
   - ARIA labels
   - Navegación por teclado
   - Contraste de colores

## Pruebas

- Jest para pruebas unitarias
- React Testing Library
- Pruebas de integración
- E2E con Cypress (planeado) 
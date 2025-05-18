# Arquitectura del Sistema

## Visión General

Xappiens está construido como una aplicación moderna basada en microservicios, diseñada para escalar y mantener una clara separación de responsabilidades.

## Estructura de Directorios

```
/
├── frontend/          # Aplicación React + Vite
├── api/              # Servicio Express para formularios
├── mailer/           # Servicio de correo (futuro)
├── users/            # Servicio de usuarios (futuro)
├── worker/           # Procesos en segundo plano (futuro)
└── docs/             # Documentación del proyecto
```

## Componentes Principales

### Frontend (React + Vite)
- Interfaz de usuario moderna y responsiva
- Formularios de contacto con validación
- Integración con reCAPTCHA v3
- Optimización de rendimiento con Vite

### Backend (Express)
- API REST para procesamiento de formularios
- Validación de reCAPTCHA
- Integración con Frappe CRM
- Manejo de errores y logging

### Nginx
- Servidor web para archivos estáticos
- Proxy inverso para microservicios
- Configuración de SSL/TLS
- Manejo de rutas y redirecciones

## Flujo de Datos

1. **Formulario de Contacto**
   - Usuario completa el formulario
   - reCAPTCHA v3 valida la interacción
   - Frontend envía datos al backend

2. **Procesamiento Backend**
   - Validación de datos
   - Verificación de reCAPTCHA
   - Creación de Lead en Frappe
   - Respuesta al frontend

3. **Integración Frappe**
   - API REST para creación de Leads
   - Mapeo de campos del formulario
   - Manejo de respuestas y errores

## Diagrama de Arquitectura

```
[Cliente] → [Nginx] → [Frontend (React)]
                    → [Backend (Express)] → [Frappe CRM]
```

## Consideraciones de Escalabilidad

- Cada microservicio puede escalar independientemente
- Separación clara de responsabilidades
- Fácil adición de nuevos servicios
- Gestión centralizada de configuración

## Seguridad

- Validación de reCAPTCHA en cada formulario
- Variables de entorno para claves sensibles
- HTTPS forzado a través de Nginx
- Validación de datos en backend

## Monitoreo y Logging

- Logs detallados en backend
- Monitoreo de errores
- Trazabilidad de formularios
- Métricas de rendimiento 
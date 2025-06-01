# Xappiens Frontend

Este es el frontend de Xappiens, construido con Vite y React.

## Requisitos

- Node.js 20 o superior
- npm o bun

## Instalación

```bash
# Instalar dependencias
npm install
# o
bun install
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o
bun dev
```

## Construcción

```bash
# Construir para producción
npm run build
# o
bun run build
```

## Docker

El proyecto incluye configuración para Docker y está optimizado para despliegue en CapRover.

Para construir la imagen:

```bash
docker build -t xappiens-frontend .
```

Para ejecutar localmente:

```bash
docker run -p 80:80 xappiens-frontend
```

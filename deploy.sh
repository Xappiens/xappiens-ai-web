#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando despliegue...${NC}"

# Guardar cambios locales si existen
echo -e "${YELLOW}Guardando cambios locales...${NC}"
git add .
git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')" || true

# Obtener cambios del repositorio remoto
echo -e "${YELLOW}Obteniendo cambios del repositorio...${NC}"
git pull origin main || {
    echo -e "${RED}Error al obtener cambios del repositorio${NC}"
    exit 1
}

# Instalar dependencias
echo -e "${YELLOW}Instalando dependencias...${NC}"
npm install || {
    echo -e "${RED}Error al instalar dependencias${NC}"
    exit 1
}

# Construir la aplicación
echo -e "${YELLOW}Construyendo la aplicación...${NC}"
npm run build || {
    echo -e "${RED}Error al construir la aplicación${NC}"
    exit 1
}

# Reiniciar Nginx
echo -e "${YELLOW}Reiniciando Nginx...${NC}"
sudo systemctl reload nginx || {
    echo -e "${RED}Error al reiniciar Nginx${NC}"
    exit 1
}

echo -e "${GREEN}¡Despliegue completado con éxito!${NC}"
echo -e "${GREEN}La aplicación está actualizada y funcionando en:${NC}"
echo -e "${GREEN}https://xappiens.com${NC}"
echo -e "${GREEN}https://www.xappiens.com${NC}" 
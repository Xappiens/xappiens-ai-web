#!/bin/bash

# Colores para mensajes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Iniciando despliegue...${NC}"

# Configurar usuario de git
echo -e "${YELLOW}Configurando usuario de git...${NC}"
git config user.name "Xappiens"
git config user.email "xappiens@xappiens.com"

# Actualizar versión semántica (patch)
echo -e "${YELLOW}Actualizando versión...${NC}"
VERSION_FILE="src/config/version.ts"
if [ -f "$VERSION_FILE" ]; then
    CURRENT_PATCH=$(grep 'patch:' "$VERSION_FILE" | head -1 | grep -o '[0-9]\+')
    NEW_PATCH=$((CURRENT_PATCH + 1))
    sed -i "s/patch: $CURRENT_PATCH/patch: $NEW_PATCH/" "$VERSION_FILE"
    echo -e "${GREEN}Versión actualizada a patch $NEW_PATCH${NC}"
else
    echo -e "${RED}Error: Archivo de versión no encontrado${NC}"
    exit 1
fi

# Guardar cambios locales
echo -e "${YELLOW}Guardando cambios locales...${NC}"
git add .
git commit -m "Actualización automática: $(date +%Y-%m-%d_%H-%M-%S)" || {
    echo -e "${RED}Error al guardar cambios locales${NC}"
    exit 1
}

# Obtener cambios del repositorio remoto
echo -e "${YELLOW}Obteniendo cambios del repositorio...${NC}"
git pull origin main || {
    echo -e "${RED}Error al obtener cambios del repositorio${NC}"
    exit 1
}

# Subir cambios al repositorio remoto
echo -e "${YELLOW}Subiendo cambios al repositorio...${NC}"
git push origin main || {
    echo -e "${RED}Error al subir cambios al repositorio${NC}"
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
sudo systemctl restart nginx || {
    echo -e "${RED}Error al reiniciar Nginx${NC}"
    exit 1
}

echo -e "${GREEN}¡Despliegue completado con éxito!${NC}"
echo -e "${GREEN}La aplicación está actualizada y funcionando en:${NC}"
echo -e "${GREEN}https://xappiens.com${NC}"
echo -e "${GREEN}https://www.xappiens.com${NC}" 
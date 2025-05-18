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

# Actualizar versión semántica
echo -e "${YELLOW}Actualizando versión...${NC}"
VERSION_FILE="frontend/src/config/version.ts"
if [ -f "$VERSION_FILE" ]; then
    CURRENT_MAJOR=$(grep 'major:' "$VERSION_FILE" | head -1 | grep -o '[0-9]\+')
    CURRENT_MINOR=$(grep 'minor:' "$VERSION_FILE" | head -1 | grep -o '[0-9]\+')
    CURRENT_PATCH=$(grep 'patch:' "$VERSION_FILE" | head -1 | grep -o '[0-9]\+')
    
    # Incrementar patch
    NEW_PATCH=$((CURRENT_PATCH + 1))
    
    # Si patch llega a 10, incrementar minor y resetear patch
    if [ $NEW_PATCH -ge 10 ]; then
        NEW_PATCH=0
        NEW_MINOR=$((CURRENT_MINOR + 1))
        
        # Si minor llega a 10, incrementar major y resetear minor
        if [ $NEW_MINOR -ge 10 ]; then
            NEW_MINOR=0
            NEW_MAJOR=$((CURRENT_MAJOR + 1))
            sed -i "s/major: $CURRENT_MAJOR/major: $NEW_MAJOR/" "$VERSION_FILE"
        else
            sed -i "s/minor: $CURRENT_MINOR/minor: $NEW_MINOR/" "$VERSION_FILE"
        fi
    else
        NEW_MINOR=$CURRENT_MINOR
    fi
    
    sed -i "s/patch: $CURRENT_PATCH/patch: $NEW_PATCH/" "$VERSION_FILE"
    echo -e "${GREEN}Versión actualizada a v$CURRENT_MAJOR.$NEW_MINOR.$NEW_PATCH${NC}"
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
cd frontend && npm install || {
    echo -e "${RED}Error al instalar dependencias${NC}"
    exit 1
}

# Construir la aplicación
echo -e "${YELLOW}Construyendo la aplicación...${NC}"
npm run build || {
    echo -e "${RED}Error al construir la aplicación${NC}"
    exit 1
}
cd ..

# Reiniciar Nginx
echo -e "${YELLOW}Reiniciando Nginx...${NC}"
sudo systemctl restart nginx || {
    echo -e "${RED}Error al reiniciar Nginx${NC}"
    exit 1
}

# Despliegue backend (API)
echo -e "${YELLOW}Instalando dependencias del backend...${NC}"
cd /var/www/xappienscom/api
npm install

echo -e "${YELLOW}Reiniciando servicio pm2 del backend...${NC}"
pm2 reload xappiens-api || pm2 start index.js --name xappiens-api

cd /var/www/xappienscom

# Build del frontend (React)
echo -e "${YELLOW}Construyendo el frontend...${NC}"
cd /var/www/xappienscom/frontend
export $(cat .env | xargs)
npm run build
cd /var/www/xappienscom

echo -e "${GREEN}¡Despliegue completado con éxito!${NC}"
echo -e "${GREEN}La aplicación está actualizada y funcionando en:${NC}"
echo -e "${GREEN}https://xappiens.com${NC}"
echo -e "${GREEN}https://www.xappiens.com${NC}" 
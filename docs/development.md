# Guías de Desarrollo

## Configuración del Entorno

### Requisitos
- Node.js 18+
- Git
- VS Code (recomendado)
- PM2 (producción)

### Instalación

1. **Clonar Repositorio**
```bash
git clone https://github.com/xappiens/xappienscom.git
cd xappienscom
```

2. **Frontend**
```bash
cd frontend
npm install
cp .env.example .env
```

3. **Backend**
```bash
cd api
npm install
cp .env.example .env
```

## Estructura del Proyecto

```
xappienscom/
├── frontend/          # React + Vite
├── api/              # Express
├── docs/             # Documentación
└── deploy.sh         # Script de despliegue
```

## Flujo de Trabajo

### 1. Desarrollo

#### Frontend
```bash
cd frontend
npm run dev
```

#### Backend
```bash
cd api
npm run dev
```

### 2. Pruebas
```bash
# Frontend
npm run test

# Backend
npm run test
```

### 3. Build
```bash
# Frontend
npm run build

# Backend
npm run build
```

## Convenciones de Código

### TypeScript

#### Nombres
- Interfaces: PascalCase
- Tipos: PascalCase
- Variables: camelCase
- Constantes: UPPER_CASE

#### Estructura
```typescript
// Imports
import { useState } from 'react';

// Interfaces
interface Props {
  name: string;
  age: number;
}

// Componentes
const Component: React.FC<Props> = ({ name, age }) => {
  // Hooks
  const [state, setState] = useState();

  // Funciones
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    // ...
  );
};
```

### React

#### Componentes
- Funcionales con hooks
- Props tipadas
- Memoización cuando necesario
- Documentación de props

#### Estilos
- TailwindCSS
- Componentes reutilizables
- Responsive design
- Dark mode

### Express

#### Rutas
```typescript
// routes/contact.ts
import { Router } from 'express';
import { contactController } from '../controllers';

const router = Router();

router.post('/', contactController.handleContact);

export default router;
```

#### Controladores
```typescript
// controllers/contact.ts
export const contactController = {
  handleContact: async (req: Request, res: Response) => {
    try {
      // ...
    } catch (error) {
      // ...
    }
  }
};
```

## Pruebas

### Frontend

#### Unitarias
```typescript
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

#### Integración
```typescript
import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('submits correctly', async () => {
    render(<Form />);
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Success')).toBeInTheDocument();
  });
});
```

### Backend

#### Unitarias
```typescript
import { contactController } from './contact';

describe('Contact Controller', () => {
  it('handles valid input', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await contactController.handleContact(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
```

#### Integración
```typescript
import request from 'supertest';
import app from '../app';

describe('Contact API', () => {
  it('creates lead', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send(validData);
    expect(response.status).toBe(200);
  });
});
```

## Git

### Branches
- main: Producción
- develop: Desarrollo
- feature/*: Nuevas características
- bugfix/*: Correcciones

### Commits
```
feat: nueva característica
fix: corrección de bug
docs: documentación
style: formato
refactor: refactorización
test: pruebas
chore: mantenimiento
```

### Pull Requests
1. Crear branch
2. Desarrollar
3. Pruebas
4. PR a develop
5. Code review
6. Merge

## Despliegue

### Desarrollo
```bash
./deploy.sh dev
```

### Producción
```bash
./deploy.sh prod
```

## Monitoreo

### Logs
```bash
# Frontend
tail -f frontend/logs/app.log

# Backend
pm2 logs xappiens-api
```

### Métricas
- Tiempo de respuesta
- Uso de memoria
- CPU
- Errores

## Recursos

### Documentación
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [TailwindCSS](https://tailwindcss.com)

### Herramientas
- VS Code
- Postman
- Chrome DevTools
- Git 
# Architecture Overview

## Frontend (React)
- Built with `create-react-app` + TypeScript
- Styled using Tailwind CSS v3 (CRA compatible)
- Uses Context API for auth state
- Routing via `react-router-dom`
- Pages:
  - Login (simulated email auth)
  - Dashboard (lists mock APIs)
  - MockEditor (create/edit OpenAPI mocks)

## Backend (Planned - Node.js)
- Express/Fastify server to serve mock routes dynamically
- Will expose `/api/:mockId/:route` style endpoints
- Store OpenAPI JSON for each mock
- Optional: Add JWT-based auth

## Folder Structure
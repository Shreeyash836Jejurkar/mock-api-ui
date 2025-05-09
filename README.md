# MockHub – Mock API Server Generator

**MockHub** lets developers instantly spin up live, sharable mock REST APIs from OpenAPI (Swagger) specs. Perfect for frontend development, prototyping, and testing without waiting on backend endpoints.

---

## Features

- ✅ Paste or upload OpenAPI JSON
- ✅ Save mock APIs with a name and ID
- ✅ Edit or view mock definitions
- 🔜 Parse OpenAPI and list all endpoint paths/methods
- 🔜 Shareable mock API URLs
- 🔜 Serve live endpoints via backend
- 🔜 User accounts + team sharing

---

## Tech Stack

| Layer     | Tech                       |
|-----------|----------------------------|
| Frontend  | React + TypeScript         |
| Styling   | Tailwind CSS               |
| Routing   | React Router v6            |
| Auth      | Context API (local email)  |
| Backend   | Node.js + Express (planned)|
| Storage   | localStorage → file/db     |
| Deploy    | Vercel (UI) + Render (API) |

---

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/mock-api-ui.git
cd mock-api-ui
npm install
npm start
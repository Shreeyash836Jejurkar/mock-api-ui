---

## ✅ `/docs/backend-plan.md`

```md
# 🖥️ Backend Mock Server Plan

## Goals
- Serve RESTful mock APIs from uploaded OpenAPI specs
- Generate routes dynamically
- Persist mock definitions

## Route Plan

| Method | Path                          | Description                  |
|--------|-------------------------------|------------------------------|
| POST   | `/api/mocks`                  | Create new mock              |
| GET    | `/api/mocks/:id`              | Fetch mock metadata          |
| GET    | `/api/:mockId/:route`         | Serve mock response          |

## Design Options
- Store JSON in filesystem (MVP)
- Move to MongoDB or Firebase later
---

## ✅ `/docs/openapi-parser.md`

```md
# OpenAPI Parser Design

## Goal
Parse OpenAPI JSON specs and extract endpoints for mocking.

## MVP Strategy
- Parse `paths` object
- Detect HTTP methods (get, post, put, delete)
- Extract response structure (optional for now)

## Example Input
```json
{
  "paths": {
    "/users": {
      "get": {
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}
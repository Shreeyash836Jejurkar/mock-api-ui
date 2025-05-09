# Internal API Spec

## `POST /api/mocks`
Creates a new mock server

**Request Body**
```json
{
  "title": "User API",
  "openApiJson": "{...}"
}
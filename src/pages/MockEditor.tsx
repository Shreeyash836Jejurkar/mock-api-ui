// src/pages/MockEditor.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function MockEditor() {
  const { mockId } = useParams();
  const isNew = mockId === "new";

  const [title, setTitle] = useState(isNew ? "" : "Mock User API");
  const [openApiJson, setOpenApiJson] = useState(
    isNew ? "" : `{
  "openapi": "3.0.0",
  "paths": {
    "/users": {
      "get": {
        "responses": {
          "200": {
            "description": "List of users"
          }
        }
      }
    }
  }
}`
  );

  const handleSave = () => {
    // Placeholder — here you’d POST or PUT to backend
    console.log("Saved mock:", { title, openApiJson });
    alert("Mock saved! (Console log for now)");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        {isNew ? "Create New Mock API" : `Edit Mock: ${mockId}`}
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Mock API Name"
          className="w-full border p-2 rounded"
        />

        <textarea
          value={openApiJson}
          onChange={(e) => setOpenApiJson(e.target.value)}
          placeholder="Paste OpenAPI JSON here..."
          rows={12}
          className="w-full border p-2 rounded font-mono text-sm"
        />

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Mock
        </button>
      </div>
    </div>
  );
}
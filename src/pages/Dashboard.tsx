import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  // Later: Replace this with a real fetch from backend
  const mockApis = [
    { id: "abc123", name: "User API" },
    { id: "def456", name: "Order API" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {user?.email}</h1>

      <div className="mb-4">
        <Link
          to="/editor/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create New Mock
        </Link>
      </div>

      <div className="space-y-2">
        {mockApis.map((mock) => (
          <Link
            key={mock.id}
            to={`/editor/${mock.id}`}
            className="block p-4 border rounded hover:bg-gray-50"
          >
            {mock.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
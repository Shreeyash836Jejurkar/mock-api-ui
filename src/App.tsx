import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
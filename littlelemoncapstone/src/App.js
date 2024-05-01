import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './pages/AppRoutes ';

function App() {
  return (
    <>

    <Router  basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
    </>
  );
}

export default App;


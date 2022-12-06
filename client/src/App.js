import './App.css';
import { Login } from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './components/signup';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;

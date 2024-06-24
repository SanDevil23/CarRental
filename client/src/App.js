import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import CForm from './pages/CForm';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<CForm />} />
      </Routes>        
    </BrowserRouter>
  );
}

export default App;

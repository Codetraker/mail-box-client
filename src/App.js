import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './pages/AuthPage';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

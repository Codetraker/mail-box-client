import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './pages/AuthPage';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AuthPage />}/> */}
        <Route path="/" element={<Home />}/>
        {/* <Route path="/email" element={<EmailWrite />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

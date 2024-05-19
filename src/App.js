import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './pages/AuthPage';
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.userData.user);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
        <>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/detail" element={<Details />}/>
        </>
        ) : (
          <Route path="/" element={<AuthPage />}/>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

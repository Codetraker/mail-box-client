import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './pages/AuthPage';
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceAction } from "./store/userSlice";
import Sent from "./pages/Sent";

function App() {
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      dispatch(userSliceAction.signIn(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Details />} />
            <Route exact path="/sent" element={<Sent />} />
          </>
        ) : (
          <Route path="/" element={<AuthPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

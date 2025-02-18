import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";
import Cookies from "js-cookie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwt = Cookies.get("accessToken");
    if (jwt) setIsLoggedIn(true);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/todo" replace />
            )
          }
        />
        <Route
          path="/register"
          element={
            !isLoggedIn ? (
              <Register setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/todo" replace />
            )
          }
        />
        <Route
          path="/todo"
          element={isLoggedIn ? <Todo /> : <Navigate to="/login" replace />}
        />
        {/* Catch-all route for undefined paths */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/todo" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Navigate to /login if user accesses the root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todo />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/todo" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

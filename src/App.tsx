// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HanalogHome from "./pages/hanalog/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/hanalog/home" replace />} />
        <Route path="/hanalog/home" element={<HanalogHome />} />
      </Routes>
    </Router>
  );
}

export default App;

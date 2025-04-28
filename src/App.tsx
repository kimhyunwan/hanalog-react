// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HanalogHome from "./pages/hanalog/home";

function App() {
  return (
    <Router>
      <Header /> {/* 공통 Header */}
      <Routes>
        <Route path="/" element={<Navigate to="/hanalog/home" replace />} />
        <Route path="/hanalog/home" element={<HanalogHome />} />
        {/* 다른 페이지 추가 시 여기에 Route 추가 */}
      </Routes>
      <Footer /> {/* 공통 Footer */}
    </Router>
  );
}

export default App;

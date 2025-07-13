import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import { Header } from "./widgets/Header";
import { Body } from "./widgets/Body";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<div>메인 페이지</div>} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;

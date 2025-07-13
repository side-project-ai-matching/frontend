import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./features/auth/pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<div>메인 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

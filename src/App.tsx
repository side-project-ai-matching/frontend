import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import { UserInformationPage } from "./features/user-information/pages/UserInformationPage";
import { Header } from "./widgets/Header";
import { Body } from "./widgets/Body";
import { AuthGuard } from "./features/auth/guards/AuthGuard";

function App() {
  return (
    <BrowserRouter>
    <div className="relative flex flex-col h-screen">
      <Header />
      <Body>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-info" element={
            <AuthGuard>
              <UserInformationPage />
            </AuthGuard>
          } />
          <Route path="/" element={<div>메인 페이지</div>} />
        </Routes>
      </Body>
      </div>
    </BrowserRouter>
  );
}

export default App;

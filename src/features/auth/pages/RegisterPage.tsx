import { RegisterForm } from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 32 }}>
      <h2>회원가입</h2>
      <RegisterForm />
    </div>
  );
}

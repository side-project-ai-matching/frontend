import { RegisterForm } from "../components/RegisterForm";
import { Card } from "../../../shared/components/Card";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="p-4 flex flex-col gap-4 w-full max-w-md">
        <h2>회원가입</h2>
        <RegisterForm />
      </Card>
    </div>
  );
}

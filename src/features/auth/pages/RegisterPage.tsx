import { RegisterForm } from "../components/RegisterForm";
import { Card } from "../../../shared/components/Card";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="p-4 flex flex-col gap-4 w-full max-w-lg">
        <div className="flex flex-col gap-2">
          <h3>회원가입</h3>
          <p className="text-sm text-muted-foreground">AI 기반 사이드 프로젝트 매칭 서비스에 가입하세요</p>
        </div>
        <RegisterForm />
      </Card>
    </div>
  );
}

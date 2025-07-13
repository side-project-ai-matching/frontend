import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { Input } from "../../../shared/components/Input";
import { Label } from "../../../shared/components/Label";
import { ErrorMessage } from "./ErrorMessage";
import { Button } from "../../../shared/components/Button";

const schema = yup.object().shape({
  email: yup.string().email("이메일 형식이 아닙니다.").required("필수 입력"),
  password: yup.string().required("필수 입력"),
});

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setLoginError("");
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    // TODO: 로그인 API 호출 및 검증
    const result = true; // 임시
    if (!result) {
      setLoginError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Label htmlFor="email">이메일</Label>
      <Input {...register("email")}
        placeholder="이메일"
        autoComplete="username"
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" {...register("password")}
        placeholder="비밀번호"
        autoComplete="current-password"
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>
      <ErrorMessage>{loginError}</ErrorMessage>
      <div className="flex justify-between gap-2 mt-4">
        <Button variant="outline" size="lg" onClick={handleCancel}>취소</Button>
        <Button type="submit" size="lg">로그인</Button>
      </div>
    </form>
  );
}

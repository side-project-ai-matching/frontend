import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../shared/components/Input";
import { Label } from "../../../shared/components/Label";
import { ErrorMessage } from "./ErrorMessage";
import { Button } from "../../../shared/components/Button";

const schema = yup.object().shape({
  email: yup.string().email("이메일 형식이 아닙니다.").required("필수 입력"),
  password: yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/, "영문+숫자 8~24자")
    .required("필수 입력"),
  passwordConfirm: yup.string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 입력"),
  nickname: yup.string()
    .max(12, "닉네임은 12자 이내")
    .required("필수 입력"),
});

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [emailError, setEmailError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const navigate = useNavigate();

  const checkEmailDuplicate = async (email: string) => {
    // TODO
    return false;
  };

  const checkNicknameDuplicate = async (nickname: string) => {
    // TODO
    return false;
  };

  const onSubmit = async (data: any) => {
    setEmailError("");
    setNicknameError("");
    if (await checkEmailDuplicate(data.email)) {
      setEmailError("이미 사용 중인 이메일입니다.");
      return;
    }
    if (await checkNicknameDuplicate(data.nickname)) {
      setNicknameError("이미 사용 중인 닉네임입니다.");
      return;
    }
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    // TODO
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Label htmlFor="email">이메일</Label>
      <Input {...register("email")} placeholder="이메일" />
      <ErrorMessage>{errors.email?.message || emailError}</ErrorMessage>
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" {...register("password")} placeholder="비밀번호" />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>
      <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
      <Input type="password" {...register("passwordConfirm")} placeholder="비밀번호 확인" />
      <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
      <Label htmlFor="nickname">닉네임</Label>
      <Input {...register("nickname")} placeholder="닉네임" maxLength={12} />
      <ErrorMessage>{errors.nickname?.message || nicknameError}</ErrorMessage>
      <div className="flex justify-between gap-2 mt-4">
        <Button variant="outline" size="lg" onClick={handleCancel}>취소</Button>
        <Button type="submit" size="lg">{`다음 >`}</Button>
      </div>
    </form>
  );
}

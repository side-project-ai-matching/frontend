import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="이메일" />
      <div>{errors.email?.message || emailError}</div>
      <input type="password" {...register("password")} placeholder="비밀번호" />
      <div>{errors.password?.message}</div>
      <input type="password" {...register("passwordConfirm")} placeholder="비밀번호 확인" />
      <div>{errors.passwordConfirm?.message}</div>
      <input {...register("nickname")} placeholder="닉네임" maxLength={12} />
      <div>{errors.nickname?.message || nicknameError}</div>
      <button type="submit">회원가입</button>
    </form>
  );
}

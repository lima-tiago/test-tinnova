"use client";
import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <input id={id} placeholder=" " {...props} />
      <label htmlFor={id}>{label}</label>
    </S.Wrapper>
  );
};

export { Input };

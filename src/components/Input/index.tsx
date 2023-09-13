"use client";
import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = {
  id: string;
  label: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ id, label, errorMessage, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <input id={id} placeholder=" " {...props} />
      <label htmlFor={id}>{label}</label>
      {errorMessage ? <span>{errorMessage}</span> : null}
    </S.Wrapper>
  );
};

"use client";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  isLoading?: boolean;
  type?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  isLoading = false,
  children = "",
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper {...props}>{isLoading ? <S.Loading /> : children}</S.Wrapper>
  );
};

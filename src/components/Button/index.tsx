"use client";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ isLoading, children, ...props }: ButtonProps) => {
  if (isLoading) {
    return (
      <S.Wrapper {...props}>
        <S.Loading />
      </S.Wrapper>
    );
  }

  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};

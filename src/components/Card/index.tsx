import { ReactNode } from "react";
import * as S from "./styles";

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

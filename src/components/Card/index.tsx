import { ReactNode } from "react";
import * as S from "./styles";

export type CardProps = {
  className?: string;
  children: ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
  return <S.Wrapper className={className}>{children}</S.Wrapper>;
};

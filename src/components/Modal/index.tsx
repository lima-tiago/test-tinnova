import { ReactNode } from "react";
import * as S from "./styles";

export type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <S.Wrapper>
      <S.Body>{children}</S.Body>
      <S.Overlay onClick={onClose} />
    </S.Wrapper>
  );
};

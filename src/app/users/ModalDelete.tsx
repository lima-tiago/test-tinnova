import { Button, IUsers, Modal } from "@/components";
import * as S from "./styles";

export type ModalDeleteProps = {
  userSelected: IUsers;
  onClose: () => void;
};

export const ModalDelete = ({ userSelected, onClose }: ModalDeleteProps) => {
  const handleRemoveUser = () => {
    const usersSaved = localStorage.getItem("usersTinnova");
    const usersParsed = JSON.parse(usersSaved || "[]");
    const newUsers = usersParsed.filter(
      (user: IUsers) => user.cpf !== userSelected.cpf
    );
    console.log(newUsers);
    localStorage.setItem("usersTinnova", JSON.stringify(newUsers));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <p>
        Tem certeza que deseja deletar <strong>{userSelected.name}</strong>?
      </p>
      <S.ButtonsModal>
        <Button negative onClick={handleRemoveUser}>
          Confirmar
        </Button>
        <Button onClick={onClose}>Cancelar</Button>
      </S.ButtonsModal>
    </Modal>
  );
};

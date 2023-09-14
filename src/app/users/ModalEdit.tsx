import { IUsers, Modal, UserForm } from "@/components";

export type ModalEditProps = {
  userSelected: IUsers;
  onClose: () => void;
};

export const ModalEdit = ({ userSelected, onClose }: ModalEditProps) => {
  return (
    <Modal onClose={onClose}>
      <UserForm initialValues={userSelected} onClose={onClose} />
    </Modal>
  );
};

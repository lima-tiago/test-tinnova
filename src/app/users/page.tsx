"use client";
import { useCallback, useEffect, useState } from "react";
import { Button, Card } from "@/components";
import { cpfMask, maskPhone } from "@/utils";
import IconEdit from "assets/iconEdit.svg";
import IconTrash from "assets/iconTrash.svg";
import * as S from "./styles";
import { ModalEdit } from "./ModalEdit";
import { ModalDelete } from "./ModalDelete";

type IUsers = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

export default function Users() {
  const [users, setUsers] = useState<IUsers[] | null>(null);
  const [userSelected, setUserSelected] = useState<IUsers | null>(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const getInitialData = useCallback(async () => {
    try {
      const usersSaved = localStorage.getItem("usersTinnova");
      const usersParsed: IUsers[] = JSON.parse(usersSaved || "[]");

      const usersFetched = await fetch(process.env.NEXT_PUBLIC_API).then(
        (res) => res.json()
      );

      const usersFiltered = [...usersParsed, ...usersFetched].filter(
        (value, index, self) => {
          return index === self.findIndex((user) => user.cpf === value.cpf);
        }
      );

      setUsers(usersFiltered);
    } catch (error) {}
  }, []);

  const handleUserToEdit = (user: IUsers) => {
    setOpenModalEdit(true);
    setUserSelected(user);
  };

  const handleUserToDelete = (user: IUsers) => {
    setOpenModalDelete(true);
    setUserSelected(user);
  };

  const handleCloseModals = () => {
    setOpenModalDelete(false);
    setOpenModalEdit(false);
    setUserSelected(null);
    getInitialData();
  };

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  return (
    <S.Main>
      <S.UsersList>
        {users?.map((user, index) => (
          <Card key={index}>
            <S.Title>
              <h1>{user.name}</h1>
              <Button onClick={() => handleUserToEdit(user)}>
                <IconEdit />
              </Button>
              <Button onClick={() => handleUserToDelete(user)}>
                <IconTrash />
              </Button>
            </S.Title>
            <p>{user.email}</p>
            <p>{cpfMask(user.cpf)}</p>
            <p>{maskPhone(user.phone)}</p>
          </Card>
        ))}
      </S.UsersList>

      {openModalEdit && userSelected ? (
        <ModalEdit userSelected={userSelected} onClose={handleCloseModals} />
      ) : null}
      {openModalDelete && userSelected ? (
        <ModalDelete userSelected={userSelected} onClose={handleCloseModals} />
      ) : null}
    </S.Main>
  );
}

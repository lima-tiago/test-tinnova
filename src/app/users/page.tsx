"use client";
import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components";
import { cpfMask, maskPhone } from "@/utils";
import * as S from "./styles";

type IUsers = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

type UsersProps = {
  usersMock?: IUsers[];
};

export default function Users({ usersMock }: UsersProps) {
  const [users, setUsers] = useState<IUsers[]>(usersMock || []);

  const getInitialData = useCallback(async () => {
    if (!usersMock) {
      const usersSaved = localStorage.getItem("usersTinnova");
      const usersParsed = JSON.parse(usersSaved || "[]");

      const usersFetched = await fetch(process.env.NEXT_PUBLIC_API).then(
        (res) => res.json()
      );

      setUsers([...usersParsed, ...usersFetched]);
    }
  }, [usersMock]);

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  return (
    <S.Main>
      <S.UsersList>
        {users?.map((user, index) => (
          <Card key={index}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{cpfMask(user.cpf)}</p>
            <p>{maskPhone(user.phone)}</p>
          </Card>
        ))}
      </S.UsersList>
    </S.Main>
  );
}

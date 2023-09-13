"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/components";
import * as S from "./styles";
import { cpfMask, maskPhone } from "@/utils";

export default function Home() {
  const [hasSended, setHasSended] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });
  const [savedUsers, setSavedUsers] = useState([]);

  const validateFields = () => {
    if (values.name.length < 3) {
      return false;
    }
    if (values.cpf.length < 14) {
      return false;
    }
    if (values.phone.length < 14) {
      return false;
    }
    if (!values.email.includes("@") || !values.email.includes(".")) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isLoading) {
      setHasSended(true);
      const userToSave = {
        ...values,
        cpf: values.cpf.replace(/\D/g, ""),
        phone: values.phone.replace(/\D/g, ""),
      };
      localStorage.setItem(
        "usersTinnova",
        JSON.stringify([userToSave, ...savedUsers])
      );
    }
    // Apenas um timeout para simular a espera da comunicação com a API...
    setTimeout(() => {
      setIsLoading(false);
      router.push("/users");
    }, 2000);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const users = localStorage.getItem("usersTinnova");
    if (users) {
      setSavedUsers(JSON.parse(users));
    }
  }, []);

  return (
    <S.Main>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome completo (sem abreviações)"
          id="name"
          required={hasSended}
          onChange={handleChangeValue}
          name="name"
          value={values.name}
          type="text"
          minLength={3}
          errorMessage="Campo deve conter 3 caracteres ou mais"
        />
        <Input
          label="E-mail"
          id="email"
          required={hasSended}
          onChange={handleChangeValue}
          name="email"
          value={values.email}
          type="email"
          errorMessage="Insira um e-mail válido"
        />
        <Input
          label="CPF"
          id="cpf"
          required={hasSended}
          onChange={handleChangeValue}
          name="cpf"
          value={cpfMask(values.cpf)}
          type="text"
          errorMessage="Insira um CPF válido"
        />
        <Input
          label="Telefone"
          id="phone"
          required={hasSended}
          onChange={handleChangeValue}
          name="phone"
          value={maskPhone(values.phone)}
          type="tel"
          errorMessage="Insira um Telefone válido"
        />
        <Button
          type="submit"
          disabled={!validateFields()}
          isLoading={isLoading}
        >
          Cadastrar
        </Button>
      </form>
    </S.Main>
  );
}

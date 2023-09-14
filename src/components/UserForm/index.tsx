"use client";
import { cpfMask, maskPhone } from "../../utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input, Button } from "..";

export type IUsers = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

export type UserFormProps = {
  initialValues?: IUsers;
  onClose?: () => void;
};

export const UserForm = ({ initialValues, onClose }: UserFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSended, setHasSended] = useState(false);
  const [savedUsers, setSavedUsers] = useState<IUsers[]>();
  const router = useRouter();
  const [values, setValues] = useState({
    name: initialValues?.name || "",
    email: initialValues?.email || "",
    cpf: initialValues ? cpfMask(initialValues?.cpf) : "",
    phone: initialValues ? maskPhone(initialValues?.phone) : "",
  });

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isLoading) {
      setHasSended(true);
      const otherUsers = savedUsers?.filter(
        (user) => user?.cpf !== values.cpf.replace(/\D/g, "")
      );
      const userToSave = {
        ...values,
        cpf: values.cpf.replace(/\D/g, ""),
        phone: values.phone.replace(/\D/g, ""),
      };
      localStorage.setItem(
        "usersTinnova",
        JSON.stringify([userToSave, ...(otherUsers || [])])
      );
    }
    // Apenas um timeout para simular a espera da comunicação com a API...
    setTimeout(() => {
      setIsLoading(false);
      if (initialValues && onClose) {
        onClose();
      } else {
        router.push("/users");
      }
    }, 2000);
  };

  return (
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
      <Button type="submit" disabled={!validateFields()} isLoading={isLoading}>
        {initialValues ? "Salvar" : "Cadastrar"}
      </Button>
    </form>
  );
};

"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input } from "@/components";

export default function Home() {
  const [hasSended, setHasSended] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSended(true);
    console.log("Enviando!");
    setTimeout(() => {
      console.log("Enviado!");
      setIsLoading(false);
    }, 2000);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome completo (sem abreviações)"
          id="name"
          required={hasSended}
          value={values.name}
          name="name"
          onChange={handleChangeValue}
        />
        <Button type="submit" isLoading={isLoading}>
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

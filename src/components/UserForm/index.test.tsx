import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserForm } from ".";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

// Renders form with initial values
it("should render form with initial values when initialValues prop is provided", () => {
  // Arrange
  const initialValues = {
    name: "Tiago Lima",
    email: "email@example.com",
    cpf: "123.456.789-00",
    phone: "(12) 34567-8901",
  };

  // Act
  render(<UserForm initialValues={initialValues} />);

  // Assert
  expect(screen.getByLabelText("Nome completo (sem abreviações)")).toHaveValue(
    "Tiago Lima"
  );
  expect(screen.getByLabelText("E-mail")).toHaveValue("email@example.com");
  expect(screen.getByLabelText("CPF")).toHaveValue("123.456.789-00");
  expect(screen.getByLabelText("Telefone")).toHaveValue("(12) 34567-8901");
});

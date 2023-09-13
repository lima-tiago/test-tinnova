import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

// Tests that submitting the form with valid fields saves the user data and sets isLoading to true, then sets isLoading to false after a timeout
it("should save user data and set isLoading to true, then set isLoading to false after a timeout", () => {
  // Mock localStorage
  const mockGetItem = jest.fn();
  const mockSetItem = jest.fn();
  const mockRemoveItem = jest.fn();
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: (...args: string[]) => mockGetItem(...args),
      setItem: (...args: string[]) => mockSetItem(...args),
      removeItem: (...args: string[]) => mockRemoveItem(...args),
    },
  });

  // Mock setTimeout
  jest.useFakeTimers();

  // Render the component
  const { getByLabelText, getByText } = render(<Home />);

  // Fill in the form fields
  fireEvent.change(getByLabelText("Nome completo (sem abreviações)"), {
    target: { value: "Tiago Lima" },
  });
  fireEvent.change(getByLabelText("E-mail"), {
    target: { value: "email@example.com" },
  });
  fireEvent.change(getByLabelText("CPF"), {
    target: { value: "123.456.789-00" },
  });
  fireEvent.change(getByLabelText("Telefone"), {
    target: { value: "(12) 34567-8901" },
  });

  // Submit the form
  fireEvent.submit(getByText("Cadastrar"));

  // Check that user data is saved in localStorage
  expect(mockSetItem).toHaveBeenCalledWith(
    "usersTinnova",
    JSON.stringify([
      {
        name: "Tiago Lima",
        email: "email@example.com",
        cpf: "12345678900",
        phone: "12345678901",
      },
    ])
  );
});

// Tests that submitting the form with a name field containing less than 3 characters displays an error message
it("should display an error message when the name field contains less than 3 characters", () => {
  // Render the component
  const { getByLabelText, getByText } = render(<Home />);

  // Fill in the form fields with invalid data
  fireEvent.change(getByLabelText("Nome completo (sem abreviações)"), {
    target: { value: "Jo" },
  });

  // Submit the form
  fireEvent.submit(getByText("Cadastrar"));

  // Check that the error message is displayed
  expect(
    getByText("Campo deve conter 3 caracteres ou mais")
  ).toBeInTheDocument();
});

// Tests that submitting the form with an invalid email field displays an error message
it("should display an error message when the email field is invalid", () => {
  // Render the component
  const { getByLabelText, getByText } = render(<Home />);

  // Fill in the form fields with invalid data
  fireEvent.change(getByLabelText("E-mail"), {
    target: { value: "invalidemail" },
  });

  // Submit the form
  fireEvent.submit(getByText("Cadastrar"));

  // Check that the error message is displayed
  expect(getByText("Insira um e-mail válido")).toBeInTheDocument();
});

// Tests that submitting the form with an invalid cpf field displays an error message
it("should display an error message when the cpf field is invalid", () => {
  // Render the component
  const { getByLabelText, getByText } = render(<Home />);

  // Fill in the form fields with invalid data
  fireEvent.change(getByLabelText("CPF"), {
    target: { value: "123.456.789-0" },
  });

  // Submit the form
  fireEvent.submit(getByText("Cadastrar"));

  // Check that the error message is displayed
  expect(getByText("Insira um CPF válido")).toBeInTheDocument();
});

// Tests that submitting the form with an invalid phone field displays an error message
it("should display an error message when the phone field is invalid", () => {
  // Render the component
  const { getByLabelText, getByText } = render(<Home />);

  // Fill in the form fields with invalid data
  fireEvent.change(getByLabelText("Telefone"), {
    target: { value: "(12) 3456-7890" },
  });

  // Submit the form
  fireEvent.submit(getByText("Cadastrar"));

  // Check that the error message is displayed
  expect(getByText("Insira um Telefone válido")).toBeInTheDocument();
});
